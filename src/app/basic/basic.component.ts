import { Component } from '@angular/core';
import { GmailService } from '../gmail.service';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss']
})
export class BasicComponent {
  result = '';
  topic: string;
  message: string;
  restrict: boolean;

  constructor(private gmail: GmailService) { }

  log(str) {
    this.result = `${str}\n${this.result}`;
  }

  logJSON(desc, json) {
    this.log(`${desc}: ${JSON.stringify(json, null, '  ')}`);
  }

  setAutoresponder() {
    this.gmail.addon.setAutoresponder(this.message, this.topic, this.restrict)
      .then(res => this.logJSON('Set Autoresponder', res));
  }

  resetAutoresponder() {
    this.gmail.addon.resetAutoresponder()
      .then(res => this.logJSON('Reset Autoresponder', res));
  }

}
