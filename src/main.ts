import "@/my-greeting";
import "@/my-button";

import "@/my-counter";

const mycounter = document.querySelector<HTMLDivElement>("#mycounter")!;
mycounter.innerHTML = `
  <h1>Lit Web Component: カスタムカウンター</h1>
  <my-counter min="1" max="5" value="2"></my-counter>
  <div id="output"></div>
`;

const counter = document.querySelector("my-counter")!;
const output = document.querySelector("#output")!;

// イベント型の明示
counter.addEventListener("change", (e: Event) => {
  const customEvent = e as CustomEvent<number>;
  output.textContent = `現在値: ${customEvent.detail}`;
});
