import { LitElement, html, customElement } from "lit-element";

@customElement('app-main')
export class AppMain extends LitElement {
    render() {
        return html`
            <h1>Hello word</h1>
        `
    }
}