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
  signupFormSend: boolean = false;
  numberRegEx = new RegExp('^[0-9]+$');
  vehicules: Array<{value: string, viewValue: string}> = [
    {value: 'velo', viewValue: 'Vélo'},
    {value: 'scooter', viewValue: 'Scooter'},
    {value: 'scooter-electrique', viewValue: 'Scooter éléctrique'},
    {value: 'voiture', viewValue: 'Voiture'},
    {value: 'utilitaire', viewValue: 'Utilitaire'},
  ];
  statuts: Array<{value: string, viewValue: string}> = [
    {value: 'auto-entrepreneur', viewValue: 'Auto-entrepreneur'},
    {value: 'micro-entreprise', viewValue: 'Micro-entreprise(SASU,EURL)'},
    {value: 'sarl', viewValue: 'SARL, SAS, SA'},
    {value: 'autre', viewValue: 'Autre'},
  ];

  constructor(private emailService: EmailService,private toast: HotToastService) {
    this.afficherPopup = false;
  }

  ngOnInit(): void {
      this.initForm();
  }

  initForm(){
    this.signupForm =  new FormGroup({
      nom: new FormControl("", Validators.required),
      prenom: new FormControl("", Validators.required),
      email: new FormControl("", [Validators.required, Validators.email]),
      phone: new FormControl("", [Validators.required, Validators.pattern(this.numberRegEx), Validators.minLength(9), Validators.maxLength(10)]),
      ville: new FormControl("", Validators.required),
      code_postal: new FormControl("", [Validators.required, Validators.pattern(this.numberRegEx), Validators.minLength(5), Validators.maxLength(5)]),
      vehicule: new FormControl("", Validators.required),
      statut_pro: new FormControl("", Validators.required),
      capacite_transport: new FormControl("", Validators.required),
      conditions: new FormControl("", Validators.required),
    });
  }

  // getter for mat-error
  get nom() {
    return this.signupForm.get('nom');
  }
  get prenom() {
    return this.signupForm.get('prenom');
  }
  get email() {
    return this.signupForm.get('email');
  }
  get phone() {
    return this.signupForm.get('phone');
  }
  get ville() {
    return this.signupForm.get('ville');
  }
  get code_postal() {
    return this.signupForm.get('code_postal');
  }
  get vehicule() {
    return this.signupForm.get('vehicule');
  }
  get statut_pro() {
    return this.signupForm.get('statut_pro');
  }
  get capacite_transport() {
    return this.signupForm.get('capacite_transport');
  }

  activerPopup(){
    this.toast.close();
    this.afficherPopup = true;
    this.toast.info("Remplis ce formulaire d'inscription pour faire partie de l'équipe Woozoo", {position: 'bottom-center'});
  }

  submit(){
    this.toast.close();
    this.signupFormSend = true

    if (!this.signupForm.valid) {
      if(this.signupForm.get('conditions').value == false){
        this.toast.info('Vous devez accepter les conditions générales')
      }
      this.toast.error('Formulaire incomplet')
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
      to: 'contact@woozoo.io',
      subject: 'Demande d\'inscription livreur',
      html: htmlWoozoo
    }
        
    this.emailService.send_mail(reqWoozoo);

    // Envoie d'un mail au livreur
    let contenueMessage;
    if(code_postal >= 13000 && code_postal < 14000){
      contenueMessage = 'Notre équipe va étudier ta demande et revenir vers toi très vite!';
    }else{
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
      this.signupFormSend = false;
      this.toast.success('Demande d\'inscription envoyé avec succès, notre équipe vous recontacte dès que possible');
      this.initForm();
    });
  }

}
