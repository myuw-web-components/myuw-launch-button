import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';

import { LaunchButtonComponent } from './launch-button/launch-button.component';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [LaunchButtonComponent],
  entryComponents: [LaunchButtonComponent]
})
export class AppModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const el = createCustomElement(LaunchButtonComponent, {
      injector: this.injector
    });
    // Custom element name
    customElements.define('myuw-launch-button', el);
  }
}
