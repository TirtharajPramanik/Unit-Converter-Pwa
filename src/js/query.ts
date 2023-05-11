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
} as { 1: Line, 2: Line; };
