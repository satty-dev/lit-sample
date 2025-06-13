// ネイティブWebコンポーネントとして動作するクラスNativeHelloを定義
class NativeHello extends HTMLElement {
    constructor() {
        // 親クラス(HTMLElement)のコンストラクタを呼び出す
        super();

        // シャドウDOMを作成（モードはopenなので外部からアクセス可能）
        const shadow = this.attachShadow({ mode: 'open' });

        // div要素を作成
        const wrapper = document.createElement('div');

        // div内にテキストを挿入
        wrapper.innerHTML = '<p>Hello from native Web Component!</p>';

        // div要素をシャドウDOMに追加
        shadow.appendChild(wrapper)
    }
}

// カスタム要素として' native-hello'を定義し、NativeHelloクラスと紐付ける
customElements.define('native-hello', NativeHello);