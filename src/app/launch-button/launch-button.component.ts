import {
  Component,
  ViewEncapsulation,
  Input,
  Inject
} from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'angular-launch-button',
  templateUrl: './launch-button.component.html',
  styleUrls: ['./launch-button.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class LaunchButtonComponent {
  MAINTENANCE_LIFECYCLE = "MAINTENANCE"
  @Input() buttonText: string; // Button text
  @Input() url: string; // Button url

  constructor(
    @Inject(DOCUMENT) private document: any
  ) {}

  handleButtonClick() {
    var reg = new RegExp('^http(s)?');
    if(reg.test(this.url)) {
      window.open(this.url, "_blank");
    } else {
      this.document.location.href = this.url;
    }
  }
}
