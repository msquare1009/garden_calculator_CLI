# Garden Calculator CLI

A simple and scalable Node.js CLI tool to calculate how much mulch your garden needs based on area and desired mulch depth.

Provide your garden dimensions, and get the result in cubic meters and number of 50L bags.

---

## Quick Example

```bash
$ garden-calc mulch 15 10 4

You need:
  6 cubic meters (m^3) of mulch for your area,
  or equivalent of 120 bags of 50 liters
```

---

## Installation

```bash
npm install -g garden-calculator-cli
```

---

## Development

```bash
git clone https://github.com/msquare1009/garden_calculator_CLI.git
cd garden_calculator_CLI
npm install
```

## Usage

```bash
mulch <length_m> <width_m> <depth_cm>
```

* `length` → meters
* `width` → meters
* `depth` → **centimeters**

---

## Options

| Flag                | Description            |
| ------------------- | ---------------------- |
| -o, --output <file> | Save results to a file |

---

## Example

```bash
garden-calc mulch 15 10 4 --output result.txt
```

---

## How it works

Volume is calculated as:

```
length × width × (depth / 100)
```

Then converted:

* 1 m^3 = 1000 liters
* 1 bag = 50 liters

---

## Why?

I got tired of guessing every time how many bags of mulch I need to buy.

---

## Future plans

Designed to be nice and scalable, future plans are:

- soil calculations
- fertilizer estimates

---

## License

MIT
