interface Unit {
  name: string;
  short: string;
  fromStd: (std: number) => number;
  toStd: (val: number) => number;
}
const temperatureUnits: Unit[] = [
  { name: "celcius", short: "℃", fromStd: (std) => std, toStd: (val) => val },
  {
    name: "kelvin",
    short: "K",
    fromStd: (std) => std + 273.15,
    toStd: (val) => 273.15 - val,
  },
  {
    name: "fahrenheit",
    short: "℉",
    fromStd: (std) => std * 9 / 5 + 32,
    toStd: (val) => (val - 32) * 5 / 9,
  },
];

interface Request {
  from: string;
  to: string;
  val: number;
}

export default function convert(req: Request) {
  if (req.from == req.to) return req.val;
  const std = temperatureUnits.find((val) => val.short == req.from).toStd(
    req.val,
  );
  return temperatureUnits.find((val) => val.short == req.to).fromStd(std);
}
