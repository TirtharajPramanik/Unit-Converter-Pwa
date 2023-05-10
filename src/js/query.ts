// import jq from "jquery";
//
// const elements = new Map<string, JQuery<HTMLElement>>();
//
// export default function query(selector: string): JQuery<HTMLElement> {
//   if (!elements.has(selector)) elements[selector] = jq(selector);
//   return elements[selector];
// }
//
// export function invalidate(selector: string | null) {
//   if (selector) elements.delete(selector);
//   else elements.clear();
// }
//
// export const jquery = jq;

interface Line {
  input: HTMLDivElement;
  unit: HTMLSelectElement;
  defaultInput: number;
  defaultUnit: string;
}

export const units = ["℃", "℉", "K"];

export default {
  1: {
    input: document.querySelector(`#line-1>.digit`),
    unit: document.querySelector(`#line-1>.unit`),
    defaultInput: 37,
    defaultUnit: "℃",
  } as Line,
  2: {
    input: document.querySelector(`#line-2>.digit`),
    unit: document.querySelector(`#line-2>.unit`),
    defaultInput: 98.6,
    defaultUnit: "℉",
  } as Line,
};
