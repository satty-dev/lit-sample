import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("my-button")
export class MyButton extends LitElement {
  static styles = css`
    button {
      padding: 0.5rem 1rem;
      font-size: 1rem;
      color: white;
      background-color: cornflowerblue;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
  `;

  private handleClick() {
    this.dispatchEvent(
      new CustomEvent("my-click", {
        detail: { message: "ボタンがクリックされました！" },
        bubbles: true,
        composed: true,
      })
    );
  }

  render() {
    return html`<button @click=${this.handleClick}>クリック！</button>`;
  }
}
