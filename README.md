# myuw-launch-button

![Screenshot showing an example of a launch button](launch-button.png "Launch Button")

A button that allows users to launch a widget. This web component is only the "Launch Full App" button in the above screenshot.

## Getting Started

Add the following import to your page's `<head>`:

```html
<script type="module" src="https://unpkg.com/@myuw-web-components/myuw-badge@^1?module"></script>
<script nomodule scr="https://unpkg.com/@myuw-web-components/myuw-badge@^1"></script>
```

**Important**: For responsiveness to many screen sizes, ensure you have included the viewport meta tag in your application:

```html
<meta name="viewport" content="width=device-width, initial-scale=1">
```

Use the component's HTML tag wherever you want:

```HTML
<myuw-launch-button
    url=""
    buttonText=""
>
</myuw-launch-button>
```

### Configurable properties via attributes

- **url:** (Required) Set the URL the launch button should link to
- **buttonText:** Set the text inside of the button. If attribute is not present "Launch full app" will appear
- **aria-label:** Set the ARIA label. If not present no aria label is set. You
  should use this to clarify what the launch button does when the buttonText
  assumes visual context. That is, in a widget named "LastPass Enterprise" the
  default buttonText of "Launch full app" might be quite appropriate as the
  visual treatment for the launch button in the context of a box with that name,
  but for say a screen reader jumping to this hyperlink the appropriate label
  might be "Launch LastPass Enterprise" so that it is clear what this link does
  when the link is considered in isolation.

## Development and contribution

To run the demo app locally and test the component, run the following commands:

```bash
$ npm install
$ npm start
```
