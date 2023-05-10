import "../css/index.css";
import swapicon from "../icon/swap.svg";
import line, { units } from "./query";
import convert from "./convert";

if ("serviceWorker" in navigator) {
  onload = async () => {
    try {
      const registration = await navigator.serviceWorker.register(
        "/service-worker.js",
      );
      console.log("SW Registered", registration);
    } catch (err) {
      console.error(err);
    }
  };
}

(document.querySelector("img#swap") as HTMLImageElement).src = swapicon;

[1, 2].forEach((i) => {
  units.forEach((unit) => {
    const opt = document.createElement("option");
    opt.value = unit;
    opt.innerText = unit;
    line[i].unit.add(opt);
  });
  line[i].unit.value = line[i].defaultUnit;

  const oidx = i == 1 ? 2 : 1;
  line[i].unit.onchange = (_: Event) =>
    line[oidx].input.dispatchEvent(new InputEvent("input"));

  line[i].input.oninput = (ev: InputEvent) => {
    const req = {
      from: line[i].unit.value,
      to: line[oidx].unit.value,
      val: parseFloat((ev.currentTarget as HTMLDivElement).innerText),
    };
    line[oidx].input.innerText = convert(req).toString();
  };

  line[i].input.onkeydown = (ev: KeyboardEvent) => {
    if (ev.key == "Enter") {
      if ("virtualKeyboard" in navigator) {
        /* ts-ignore */
        (navigator as any).virtualKeyboard.hide();
      }
      ev.currentTarget.dispatchEvent(new FocusEvent("blur"));
    }
  };

  line[i].input.onblur = (ev: InputEvent) => {
    const target = ev.currentTarget as HTMLDivElement;
    const text = target.innerText.trim();
    target.innerText = (text.length == 0) ? line[i].defaultInput : text;
    target.dispatchEvent(new InputEvent("input"));
  };
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
// ----------------------------------------------------------------------
// {{{
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
// }}}
// ----------------------------------------------------------------------
