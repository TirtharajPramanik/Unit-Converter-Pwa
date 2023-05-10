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
  unit: HTMLDivElement;
  defaultInput: number;
  defaultUnit: string;
}

export default {
  1: {
    input: document.querySelector(`#line-1>.digit`) as HTMLDivElement,
    unit: document.querySelector(`#line-1>.unit`) as HTMLDivElement,
    defaultInput: 37,
    defaultUnit: "℃",
  } as Line,
  2: {
    input: document.querySelector(`#line-2>.digit`) as HTMLDivElement,
    unit: document.querySelector(`#line-2>.unit`) as HTMLDivElement,
    defaultInput: 98.6,
    defaultUnit: "℉",
  } as Line,
};
