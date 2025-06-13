import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

// 'my-greeting' というカスタム要素を定義
@customElement("my-greeting")
export class MyGreeting extends LitElement {
  // プロパティデコレーターで型を明示
  @property({ type: String })
  name!: string; // !を付与して「後で必ず値が入る」とTypeScriptに伝える

  static styles = css`
    p {
      color: darkgreen;
      font-size: 1.2rem;
    }
  `;

  // コンストラクタで初期値を設定
  constructor() {
    super();
    this.name = "Lit";
  }

  render() {
    return html`<p>Hello, ${this.name}!</p>`;
  }
}
