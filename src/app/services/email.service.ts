import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private header = { headers: { "Content-Type": "application/json" } };

  constructor(private http: HttpClient) { }

  send_mail(req: any) {
    return this.http.post("http://localhost:3000/sendMail", req , this.header).subscribe((resp: any) => {
    // return this.http.post("https://limitless-earth-25794.herokuapp.com/sendMail", req , this.header).subscribe((resp: any) => {
      console.log(resp);
    });
  }

  send_mail_recaptcha(req: any) {
    return this.http.post("http://localhost:3000/sendMailRecaptcha", req , this.header).subscribe((resp: any) => {
    // return this.http.post("https://limitless-earth-25794.herokuapp.com/sendMailRecaptcha", req , this.header).subscribe((resp: any) => {
      console.log(resp);
    });
  }

}
