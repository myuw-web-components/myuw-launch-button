/**
 * MyUWLaunchButton
 *
 * A button that displays a launch button under a widget.
 */
import tpl from './myuw-launch-button.html';
import verlagTpl from './fonts.html';

const fonts = document.createElement('template');
fonts.setAttribute('style', 'display: none;');
fonts.innerHTML = verlagTpl;
document.head.appendChild(fonts.content);

class MyUWLaunchButton extends HTMLElement {

  constructor() {
    super();

    // Create a shadowroot for this element
    this.attachShadow({mode: 'open'});

    // Append the custom HTML to the shadowroot
    this.shadowRoot.appendChild(MyUWLaunchButton.template.content.cloneNode(true));
  }

  static get observedAttributes() {
    return [
      'url',
      'buttonText',
    ];
  }

  /**
  *  Web component lifecycle hook to update changed properties
  */
  attributeChangedCallback(name, oldValue, newValue) {
    // Update the attribute internally
    this[name] = newValue;
    // Update the component
    if (this.$button) {
      this.updateComponent();
    }
  }

  /**
  *   When component is first attached to the DOM,
  *   get its defined attributes and set up listeners
  */
  connectedCallback() {
    // Get all attributes
    this['url'] = this.getAttribute('url') || '';
    this['buttonText'] = this.getAttribute('buttonText') || '';

    this.$button = this.shadowRoot.getElementById('launch-button');

    if (this.$button) {
      this.updateComponent();
    }
  }

  /**
  *   Update the component state
  */
  updateComponent() {
    this.$button.setAttribute('href', this['url']);
    this.$button.innerText = this['buttonText'] ? this['buttonText'] : 'Launch full app';
  }
}

MyUWLaunchButton.template = (function template(src) {
  const template = (document.createElement('template'));
  template.innerHTML = src;
  return template;
})(tpl);

window.customElements.define('myuw-launch-button', MyUWLaunchButton);
