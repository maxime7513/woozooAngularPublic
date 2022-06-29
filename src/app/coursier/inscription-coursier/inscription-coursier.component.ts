import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HotToastService } from '@ngneat/hot-toast';
import { EmailService } from 'src/app/services/email.service';

@Component({
  selector: 'app-inscription-coursier',
  templateUrl: './inscription-coursier.component.html',
  styleUrls: ['./inscription-coursier.component.scss']
})
export class InscriptionCoursierComponent implements OnInit {
  afficherPopup: boolean;
  signupForm: FormGroup;
  numberRegEx = /\-?\d*\.?\d{1,2}/;

  constructor(private emailService: EmailService,private toast: HotToastService) {
    this.afficherPopup = false;
  }

  ngOnInit(): void {
      this.initForm();
  }

  initForm(){
    this.signupForm =  new FormGroup(
    {
      nom: new FormControl("", Validators.required),
      prenom: new FormControl("", Validators.required),
      email: new FormControl("", [Validators.required, Validators.email]),
      phone: new FormControl("", [Validators.required, Validators.pattern(this.numberRegEx), Validators.minLength(9), Validators.maxLength(10)]),
      ville: new FormControl("", Validators.required),
      code_postal: new FormControl("", [Validators.required, Validators.pattern(this.numberRegEx), Validators.minLength(5), Validators.maxLength(5)]),
      vehicule: new FormControl("", Validators.required),
      statut_pro: new FormControl("", Validators.required),
      capacite_transport: new FormControl("", Validators.required),
    }
  );
  }

  activerPopup(){
    this.afficherPopup = true;
  }

  submit(){
    this.toast.close();

    if(this.signupForm.get('nom')?.hasError('required')){
      this.toast.error('Veuillez renseigner votre nom')
    }else if(this.signupForm.get('prenom')?.hasError('required')){
      this.toast.error('Veuillez renseigner votre prenom')
    }else if(this.signupForm.get('email')?.hasError('required')){
      this.toast.error('Veuillez renseigner votre email')
    }else if(this.signupForm.get('email')?.hasError('email')){
      this.toast.error('Veuillez renseigner un email valide')
    }else if(this.signupForm.get('phone')?.hasError('required')){
      this.toast.error('Veuillez renseigner votre numéro de téléphone')
    }else if(this.signupForm.get('phone')?.hasError('pattern') || this.signupForm.get('phone')?.hasError('minlength') || this.signupForm.get('phone')?.hasError('maxlength')){
      this.toast.error('Numéro de téléphone au mauvais format')
    }else if(this.signupForm.get('ville')?.hasError('required')){
      this.toast.error('Veuillez renseigner votre ville')
    }else if(this.signupForm.get('code_postal')?.hasError('required')){
      this.toast.error('Veuillez renseigner votre code postal')
    }else if(this.signupForm.get('code_postal')?.hasError('pattern') || this.signupForm.get('code_postal')?.hasError('minlength') || this.signupForm.get('code_postal')?.hasError('maxlength')){
      this.toast.error('Code postal au mauvais format')
    }else if(this.signupForm.get('vehicule')?.hasError('required')){
      this.toast.error('Veuillez renseigner votre moyen de transport')
    }else if(this.signupForm.get('statut_pro')?.hasError('required')){
      this.toast.error('Veuillez renseigner votre statut professionnel')
    }else if(this.signupForm.get('capacite_transport')?.hasError('required')){
      this.toast.error('Veuillez renseigner si vous detenez l\'attestation de capacité de transport')
    }

    if (!this.signupForm.valid) {
      return;
    }

    const toastValid = this.toast.loading('Demande d\'inscription en cours...',{duration: 3000});

    const {nom, prenom, email, phone, ville, code_postal, vehicule, statut_pro, capacite_transport} = this.signupForm.value;

    // Envoie d'un mail à WOOZOO
    const htmlWoozoo = `<b>
                          <p style="color: #046497; margin: 5px 0";><span style="color: #7e8da9;">Nom: </span>`+ nom +`</p>
                          <p style="color: #046497; margin: 5px 0";><span style="color: #7e8da9;">Prénom: </span>` + prenom + `</p>
                          <p style="color: #046497; margin: 5px 0";><span style="color: #7e8da9;">Email: </span>` + email + `</p>
                          <p style="color: #046497; margin: 5px 0";><span style="color: #7e8da9;">Téléphone: </span>` + phone + `</p>
                          <p style="color: #046497; margin: 5px 0";><span style="color: #7e8da9;">Ville: </span>` + ville + `</p>
                          <p style="color: #046497; margin: 5px 0";><span style="color: #7e8da9;">Code postal: </span>` + code_postal + `</p>
                          <p style="color: #046497; margin: 5px 0";><span style="color: #7e8da9;">Véhicule: </span>` + vehicule + `</p>
                          <p style="color: #046497; margin: 5px 0";><span style="color: #7e8da9;">Staut professionnel: </span>` + statut_pro + `</p>
                          <p style="color: #046497; margin: 5px 0";><span style="color: #7e8da9;">Capacité de transport: </span>` + capacite_transport + `</p>
                        </b>`;
                
    let reqWoozoo = {
      to: 'blnmax@yahoo.com',
      subject: 'Demande d\'inscription livreur',
      html: htmlWoozoo
    }
        
    this.emailService.send_mail(reqWoozoo);

    // Envoie d'un mail au livreur
    let contenueMessage;
    if(code_postal >= 13000 && code_postal < 14000){
      console.log('ok')
      contenueMessage = 'Notre équipe va étudier ta demande et revenir vers toi très vite!';
    }else{
      console.log('pas ok')

      contenueMessage = 'Malheureusement notre service de livraison n\'est pas encore disponible dans ta ville, nous reprendrons contact avec toi dès que Woozoo arrive près de chez toi!';
    }

    const htmlLivreur = `<b>
                          <p style="font-weight: normal; margin-bottom: 17px">Hello ` + prenom + `,</p>
                          <p style="font-weight: normal; margin: 3px 0;">Nous avons bien reçu ta demande d'inscription et nous t'en remercions. ` + contenueMessage + `</p>
                          <p style="font-weight: normal; margin: 20px 0;">L'equipe WOOZOO.</p>
                        </b>`;
    
    let reqLivreur = {
      to: email,
      subject: 'Demande d\'inscription à WoozooDelivery',
      html: htmlLivreur
    }

    this.emailService.send_mail(reqLivreur);

    toastValid.afterClosed.subscribe((e) => {
      this.toast.success('Demande d\'inscription envoyé avec succès, notre équipe vous recontacte dès que possible');
      this.initForm();
    });
  }

}
