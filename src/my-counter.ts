import { LitElement, html, css, PropertyValues } from "lit";
import { property, customElement } from "lit/decorators.js";

@customElement("my-counter")
export class MyCounter extends LitElement {
  static styles = css`
    :host {
      display: inline-block;
    }
    .counter {
      display: flex;
      align-items: center;
      gap: 1em;
      font-size: var(--my-counter-font-size, 1.5em);
    }
    button {
      font-size: 1em;
      width: 2em;
      height: 2em;
      background: var(--my-counter-btn-bg, #eee);
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }
    button:disabled {
      opacity: 0.4;
      cursor: not-allowed;
    }
  `;

  @property({ type: Number, reflect: true }) min = 0;
  @property({ type: Number, reflect: true }) max = 10;

  // valueは外部からも変更できるようプロパティ化
  @property({ type: Number, reflect: true })
  value = 0;

  // 初期値をminに合わせる
  protected willUpdate(changed: PropertyValues<this>) {
    if (changed.has("min") && this.value < this.min) {
      this.value = this.min;
    }
    if (changed.has("max") && this.value > this.max) {
      this.value = this.max;
    }
  }

  private inc = () => {
    if (this.value < this.max) {
      this.value += 1;
      this.emitChange();
    }
  };

  private dec = () => {
    if (this.value > this.min) {
      this.value -= 1;
      this.emitChange();
    }
  };

  // 型付きのカスタムイベントを発火
  private emitChange() {
    this.dispatchEvent(
      new CustomEvent<number>("change", {
        detail: this.value,
        bubbles: true,
        composed: true,
      })
    );
  }

  render() {
    return html`
      <div class="counter">
        <button @click=${this.dec} ?disabled=${this.value <= this.min}>
          -
        </button>
        <span>${this.value}</span>
        <button @click=${this.inc} ?disabled=${this.value >= this.max}>
          +
        </button>
      </div>
    `;
  }
}
