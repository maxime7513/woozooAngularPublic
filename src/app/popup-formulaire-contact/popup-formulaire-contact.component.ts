import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { faPhoneSquareAlt, faPaperPlane} from '@fortawesome/free-solid-svg-icons';
import { HotToastService } from '@ngneat/hot-toast';
import { EmailService } from '../services/email.service';


@Component({
  selector: 'app-popup-formulaire-contact',
  templateUrl: './popup-formulaire-contact.component.html',
  styleUrls: ['./popup-formulaire-contact.component.scss']
})
export class PopupFormulaireContactComponent implements OnInit {
  phoneIcon = faPhoneSquareAlt;
  paperPlaneIcon = faPaperPlane;
  contactForm: FormGroup;

  constructor(private emailService: EmailService, private toast: HotToastService, public dialogRef: MatDialogRef<PopupFormulaireContactComponent>) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.contactForm = new FormGroup(
      {
        nom: new FormControl('', Validators.required),
        raisonSociale: new FormControl(''),
        phone: new FormControl(''),
        email: new FormControl("", [Validators.required, Validators.email]),
        message: new FormControl("", Validators.required),
      }
    );
  }

  // getter for error
  get nom() {
    return this.contactForm.get('nom');
  }
  get email() {
    return this.contactForm.get('email');
  }
  get message() {
    return this.contactForm.get('message');
  }

  submit(){
    this.toast.close();

    if(this.nom?.hasError('required')){
      this.toast.error('Veuillez renseigner votre nom')
    }else if(this.email?.hasError('required')){
      this.toast.error('Veuillez renseigner votre email')
    }else if(this.email?.hasError('email')){
      this.toast.error('Veuillez renseigner un email valide')
    }else if(this.message?.hasError('required')){
      this.toast.error('Veuillez saisir un message')
    }

    if (!this.contactForm.valid) {
      return;
    }

    const toastValid = this.toast.loading('envoie en cours...',{duration: 2500});

    const {nom, raisonSociale, phone, email, message} = this.contactForm.value;
    const html = `<b>
                    <p style="color: #046497"; margin: 5px 0;><span style="color: #7e8da9;">Nom: </span>`+ nom +`</p>
                    <p style="color: #046497"; margin: 5px 0;><span style="color: #7e8da9;">Raison sociale: </span>` + raisonSociale + `</p>
                    <p style="color: #046497"; margin: 5px 0;><span style="color: #7e8da9;">Telephone: </span>` + phone + `</p>
                    <p style="color: #046497"; margin: 5px 0;><span style="color: #7e8da9;">Email: </span>` + email + `</p>
                    <p style="color: #046497"; margin: 5px 0;><span style="color: #7e8da9;">Message: </span><br>` + message + `</p>
                  </b>`;
    
    let req = {
      to: 'blnmax@yahoo.com',
      subject: 'Message provenant du site vitrine',
      html: html
    }

    this.emailService.send_mail(req);

    toastValid.afterClosed.subscribe((e) => {
      this.dialogRef.close();
      this.toast.success('Formulaire envoyé avec succès');
    });
  }

}
