import createApp from "./App.js";

function initialize() {

    const app = document.getElementById("app");

    const ui = createApp();

    app.append(ui.root);

}

export { initialize };