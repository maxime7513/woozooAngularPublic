import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { faPhoneSquareAlt, faPaperPlane} from '@fortawesome/free-solid-svg-icons';
import { HotToastService } from '@ngneat/hot-toast';
import { ReCaptchaV3Service } from 'ng-recaptcha';
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
  formSend: boolean = false;

  constructor(private emailService: EmailService, private recaptchaV3Service: ReCaptchaV3Service, private toast: HotToastService, public dialogRef: MatDialogRef<PopupFormulaireContactComponent>) { }

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

  get recaptchaToken$(){
    return new Promise(resolve => {
      this.recaptchaV3Service.execute('importantAction')
      .subscribe((token: string) => {
        resolve(token)
      });
    });
  }

  async submit(){
    this.toast.close();
    this.formSend = true;

    if (!this.contactForm.valid) {
      this.toast.error('Formulaire invalide');
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
    const tokenRecaptcha = await this.recaptchaToken$;
    let req = {
      from: email,
      to: 'contact@woozoo.io',
      subject: 'Message provenant du site vitrine',
      html: html,
      tokenRecaptcha: tokenRecaptcha,
    }

    this.emailService.send_mail_recaptcha(req);

    toastValid.afterClosed.subscribe((e) => {
      this.dialogRef.close();
      this.toast.success('Message envoyé avec succès');
    });
  }

}
