import "../css/index.css";
import swapicon from "../icon/swap.svg";
import line from "./query";
import convert from "./convert";

(document.querySelector("img#swap") as HTMLImageElement).src = swapicon;

[1, 2].forEach((i) => {
  let oidx = i == 1 ? 2 : 1;
  line[i].input.oninput = (ev: InputEvent) => {
    line[oidx].input.innerText = `${
      convert({
        from: line[i].unit.innerText,
        to: line[oidx].unit.innerText,
        val: parseFloat((ev.currentTarget as HTMLDivElement).innerText),
      })
    }`;
  };

  line[i].input.onblur = (ev: InputEvent) => {
    let target = ev.currentTarget as HTMLDivElement;
    if (target.innerText.trim().length == 0) {
      target.innerText = line[i].defaultInput;
    }
    target.dispatchEvent(new InputEvent("input"));
  };

  line[i].unit.innerText = line[i].defaultUnit;
  line[i].unit.contentEditable = false;
});

line[1].input.innerText = line[1].defaultInput.toString();
line[1].input.dispatchEvent(new InputEvent("input"));

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// ----------------------------------------------------------------------------------------------------------------------------------------

// (document.querySelector("img#swap") as HTMLImageElement).src = swapicon;
//
// $("img#swap").attr("src", swapicon);
//
//
// const input = (line: number) => `#line - ${ line }>.digit`;
// const unit = (line: number) => `#line - ${ line }>.unit`;
//
// [1, 2].forEach((line) => $(unit(line)).attr("contentEditable", "false"));
// $(unit(1)).text("℃");
// $(unit(2)).text("℉");
//
// $(input(1)).on(
//   "input",
//   (_) =>
//     $(input(2)).text(
//       convert({
//         from: $(unit(1)).text(),
//         to: $(unit(2)).text(),
//         val: parseFloat($(input(1)).text()),
//       }),
//     ),
// );

// $(input2).on(
//   "input",
//   (_) => $(input1).text((parseFloat($(input2).text()) - 32) * 5 / 9),
// );
//
// $(input(1)).text(37);
// $(input(1)).trigger("input");

//
// const unit2: HTMLElement = document.querySelector("#line-2>.unit");
// unit2.contentEditable = "false";
//
// const input1: HTMLDivElement = document.querySelector("#line-1>.digit");
// input1.inputMode = "numeric";
// // // input1.innerText = `${ 37 } `;
// input1.oninput = (_) => {
//   input2.innerText = `${ parseFloat(input1.innerText) * 9 / 5 + 32 } `;
// };
// input1.onblur = (_) => {
//   if (input1.innerText.trim().length == 0) input1.innerText = "37";
//   input1.dispatchEvent(new InputEvent("input"));
// };
// //
// const unit1: HTMLElement = document.querySelector("#line-1>.unit");
// unit1.inputMode = "text";
// // unit1.innerText = `℃`;
// unit1.contentEditable = "false";
//
// ----------------------------------------------------------------------

// interface Unit {
//   name: string;
//   short: string;
// }
//
// // interface UnitCollection {
// //   findByShort(short: string): Unit;
// //   findByName(name: string): Unit;
// // }
//
// class UnitMap implements MapConstructor {
// }
//
// // {{{
// const metricPrefixes = [
//   { name: "quetta", short: "Q" },
//   { name: "ronna", short: "R" },
//   { name: "zetta", short: "Z" },
//   { name: "yotta", short: "Y" },
//   { name: "exa", short: "E" },
//   { name: "peta", short: "P" },
//   { name: "tera", short: "T" },
//   { name: "giga", short: "G" },
//   { name: "mega", short: "M" },
//   { name: "kilo", short: "k" },
//   { name: "hecto", short: "h" },
//   { name: "deca", short: "da" },
//   { name: "", short: "" },
//   { name: "deci", short: "d" },
//   { name: "centi", short: "c" },
//   { name: "milli", short: "m" },
//   { name: "micro", short: "µ" },
//   { name: "nano", short: "n" },
//   { name: "pico", short: "p" },
//   { name: "femto", short: "f" },
//   { name: "atto", short: "a" },
//   { name: "zepto", short: "z" },
//   { name: "yocto", short: "y" },
//   { name: "ronto", short: "r" },
//   { name: "quecto", short: "q" },
// ];
// // }}}
//
// class MetricUnit implements Units {
//   unit: Unit;
//   constructor(unit: Unit) {
//     this.unit = unit;
//   }
// }
//
// class Category {
//   constructor(units: Units) {}
// }
//
// const categories = new Map<string, Category>();
//
// const temparatureUnits = [
//   { name: "celcius", short: "℃" },
//   { name: "fahrenheit", short: "℉" },
//   { name: "kelvin", short: "K" },
// ];
// categories["temparature"] = new Category(temparatureUnits);
//
// const lengthUnits = MetricUnit({ name: "meter", short: "m" });
// categories["length"] = new Category(lengthUnits);

// ----------------------------------------------------------------------
