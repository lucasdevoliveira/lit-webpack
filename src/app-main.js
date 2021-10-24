import { LitElement, html, customElement } from "lit-element";
import styles from './app-main.styles'

@customElement('app-main')
export class AppMain extends LitElement {
    static styles = styles
    render() {
        return html`
            <h1>Lit-Element</h1>
        `
    }
}