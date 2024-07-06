# Gooey Web Widget

A clean, self-hostable web widget for Gooey.AI Copilots, with streaming support with every major LLM, speech-reco, and Text-to-Speech covering 1000+ languages, photo uploads, feedback, and analytics  Fork for customized branding and functionality (or use our hosted version available under Copilot Integrations). 


## Raw Library Usage

If you're new, you should probably head over to [gooey.ai/copilot](https://gooey.ai/copilot/integrations/), create and test your integration there. This guide is for **advanced users**.

1. Copy the following code into the `<body>` section of your target HTML file where you want the widget to appear:

```html
<div id="gooey-embed"></div>
<script src="https://cdn.jsdelivr.net/gh/GooeyAI/gooey-web-widget@2/dist/lib.js"></script>
<script>
    GooeyEmbed.mount({ target: "#gooey-embed", integration_id: "<Your Integration ID>" });
</script>
```

If you use the lib.js provided from gooey.ai, the config will be automatically provided based on your settings.

```html
<script src="https://gooey.ai/chat/<Name>-<Integration ID>/lib.js"></script>
```

2. Replace `"<Your Integration ID>"` with your Integration's ID, as it appears on the Integration tab.

## Configuration Options


##### Example:

```js
const config = {
  target: "#gooey-embed",
  integration_id: "MqL",
  mode: "popup" | "inline" | "fullscreen",
  enableAudioMessage: true,
  showSources: true,
  branding: {
    name: "Farmer.CHAT",
    byLine: "By Digital Green",
    description: "An AI Assistant designed to help farmer extension agents in India.",
    conversationStarters: [
      "When should I plant chili?",
      "How can I get rid of black ants on my coffee?",
      "What is the best time to grow pepper in India?",
    ],
    fabLabel: "Help",
    photoUrl: "https://digitalgreen.org/wp-content/themes/digital-green/images/favicons/apple-touch-icon.png",
    websiteUrl: "https://digitalgreen.org/",
    showPoweredByGooey: true,
  },
  payload: {
    user_id: "123", 
  },
}
GooeyEmbed.mount(config);
```

##### `target: string` **Required**

Specifies the [CSS selector](https://www.w3schools.com/css/css_selectors.asp) of the div where the widget will be embedded.

##### `integration_id: string` **Required**

The unique identifier for your Gooey Bot Integration. (Note that this is snake_case, to match the Gooey API `payload`)

##### `mode: string (popup | inline)`

Determines how the Gooey widget is displayed on your site:

- `popup`: This mode renders a Floating Action Button that, when clicked, opens the widget in a pop-up overlay. Ideal for adding support chat without altering your page layout.

![popup](https://github.com/GooeyAI/gooey-web-widget/assets/10388784/f04df2d3-c811-4950-8cff-1a13c80b9def)

- `inline`: This mode embeds the widget directly within the page content at the location specified by the `target`. Suitable for integrating the widget as a part of your webpage like a contact form.

<img alt="inline" src="https://github.com/GooeyAI/gooey-web-widget/assets/10388784/f334ae8d-5dae-4737-85d2-6301a1e70f59">

- `fullscreen`: This mode renders the widget in fullscreen mode, covering the entire page. Ideal for creating a dedicated chat page.

<img alt="Screenshot 2024-05-25 at 11 33 17 AM" src="https://github.com/GooeyAI/gooey-web-widget/assets/10388784/826dda8d-876e-4d0a-baf6-6bca6f6af75f">


##### `enableAudioMessage: boolean`

A boolean to enable or disable recording and sending audio messages to the bot.

#####  `showSources`

A boolean that dictates whether sources of information (if any) should be shown.

##### `branding: object`

Controls visual aspects of the widget and defines the textual content and related URLs for the bot's appearance and initial interaction prompts.

- `name`: The name of the bot displayed at the top of the chat interface.
- `byLine`: A short attribution line appearing below the bot name.
- `description`: A brief description of the bot's purpose.
- `conversationStarters`: An array of strings presented as initial messages to help guide the user on how to interact with the bot.
- `fabLabel`: The label for the Floating Action Button in popup mode.
- `photoUrl`: The URL of an image used as the bot's avatar.
- `websiteUrl`: A URL to the bot's or company's homepage, which can be accessed for more information.
- `showPoweredByGooey`: A boolean to show or hide the "Powered by Gooey" attribution in the widget.

##### `payload: object`

Contains the data sent to the Gooey API.
Consult the [Gooey API documentation](https://api.gooey.ai/docs#tag/Copilot-Integrations/operation/video-bots__stream_create) for additional payload options.

## **Project Setup Guide**

### Initial Setup

1. Install Node LTS version (v18) using [nvm](https://github.com/nvm-sh/nvm):
   ```bash
   nvm install 18.12.0
   ```
2. Clone the repository:
   ```bash
   git clone https://github.com/GooeyAI/gooey-web-widget.git
   ```
3. Navigate into your cloned directory and install dependencies:
   ```bash
   cd gooey-web-widget
   npm install
   ```
4. Start the React server:
   ```bash
   npm run dev
   ```
5. Open [localhost:5173](http://localhost:5173) in your browser to view the project.

### Building and Testing

1. Build the library:
   ```bash
   npm run build
   ```
2. The output will be available in the `dist/` directory.
3. Test the widget opening `test.html` in your browser.
4. To test inside other projects, run a python web server:
   ```bash
   python -m http.server 9000
   ```
   and open [localhost:9000/test.html](http://localhost:9000/test.html) in your browser.

   (For the gooey server, set `WEB_WIDGET_LIB=http://localhost:9000/dist/lib.js` )

## Publishing

1. Build the library:
   ```bash
   npm run build
   ``` 
3. Commit your changes
4. Tag the commit with the new version number:
   ```bash
   git tag -a 2.x.x
   ```
5. Push the commit with tags:
    ```bash
    git push origin master --tags
    ```
6. Purge the [jsdelivr cache](https://www.jsdelivr.com/tools/purge)

   If you want to ensure your clients get the latest version of the lib (ahead of the cache), please specify the version in the URL like so: `https://cdn.jsdelivr.net/gh/GooeyAI/gooey-web-widget@2.x.x/dist/lib.js`

   For Gooey Server, update the `WEB_WIDGET_LIB` environment variable.
7. If you make a major version change, update this README.md and `WEB_WIDGET_LIB` in the Gooey server.


## **Notes**

- `src/widgets/*`: List of embeddable React components.
- `index.html` + `src/main.tsx`: Entry point for the development React app.
- `src/lib.tsx`: Library entry point for the widget.
- `vite.config.js`: Configuration for bundling the library.
