import "../css/index.css";
import swapicon from "../icon/swap.svg";
import line, { units } from "./query";
import convert, { round } from "./convert";

// REGISTER SERVICE WORKER
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


// JUST AN IMAGE
(document.querySelector("img#swap") as HTMLImageElement).src = swapicon;

// INITIAL SETTINGS FOR INPUT FIELDS
[1, 2].forEach((i: 1 | 2) => {


  // ADD OPTIONS TO UNIT SELETORS
  units.forEach((unit) => {
    const opt = document.createElement("option");
    opt.value = unit;
    opt.innerText = unit;
    line[i].unit.add(opt);
  });
  line[i].unit.value = line[i].defaultUnit; // DEFAULT SELETED OPTION


  const oidx = i == 1 ? 2 : 1; // THE OTHER LINE INDEX
  line[i].unit.onchange = (_: Event) => // TRIGGER RECALCULATION ON UNIT CHANGE
    line[oidx].input.dispatchEvent(new InputEvent("input"));
  // 👆 triggering event on other field cuz, this will re-evaluate this field


  // RECALCULATE VALUES ON TYPE
  line[i].input.oninput = (ev: InputEvent) => {
    const req = { // REQUEST OBJECT
      from: line[i].unit.value, // FROM UNIT
      to: line[oidx].unit.value, // TO UNIT
      val: parseFloat((ev.currentTarget as HTMLDivElement).innerText), // CHANGED VALUE
    };
    // RECALCULATE THE OTHER FIELD
    line[oidx].input.innerText = convert(req).toString();
  };


  // ON ENTER KEY DOWN
  line[i].input.onkeydown = (ev: KeyboardEvent) => {
    if (ev.key == "Enter") {
      if ("virtualKeyboard" in navigator) // HIDE KEYBOARD ON MOBILE DEVICES
        (navigator as any).virtualKeyboard.hide();
      ev.currentTarget.dispatchEvent(new FocusEvent("blur")); // TRIGGER INPUT REVALIDATION
    }
  };


  // REVALIDATE INPUT WHEN FOCUS LOST
  line[i].input.onblur = (ev: FocusEvent) => {
    const target = ev.currentTarget as HTMLDivElement;
    const text = target.innerText.trim();
    const num = round(parseFloat(text)).toString(); // ROUND INPUT TO 7 DIGITS AFTER DECIMAL
    target.innerText = (num != "NaN") ? num
      : ((text == "")
        ? line[i].defaultInput.toString() // POPULATE FIELD WITH DEFAULT VALUE IF EMPTY
        : text);
    target.dispatchEvent(new InputEvent("input")); // TRIGGER RECALCULATION
  };
});


// INITIALIZE DEFAULT VALUES
line[1].input.innerText = line[1].defaultInput.toString();
line[1].input.dispatchEvent(new InputEvent("input"));
