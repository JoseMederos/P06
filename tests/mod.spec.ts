import { describe, expect, test } from "vitest";
import { ComplexNumber } from "../src/mod.ts";

const complexNumber1 = new ComplexNumber(1, 3);
const complexNumber2 = new ComplexNumber(2, 6);
const complexNumber12Add = new ComplexNumber(3, 9);
const complexNumber12Sub = new ComplexNumber(-1, -3);
const complexNumber12Mult = new ComplexNumber(-16, 0);
const complexNumber12Div = new ComplexNumber(-1, -3);


describe("add function tests", () => {

  test("add(1 + 3i, 2 + 6i) returns value 9", () => {
    expect(complexNumber1.add(complexNumber2)).toStrictEqual(complexNumber12Add);
  });
});

describe("substract function tests", () => {
  test("substract(1 + 3i, 2 + 6i) returns value 3", () => {
    expect(complexNumber1.substract(complexNumber2)).toStrictEqual(complexNumber12Sub);
  });
});

describe("miltiply function tests", () => {
  test("multiply(1 + 3i, 2 + 6i) throws an error", () => {
    expect(complexNumber1.multiply(complexNumber2)).toStrictEqual(complexNumber12Mult);
  });
});

describe("divide function tests", () => {
  test("divide(1 + 3i, 2 + 6i) throws an error", () => {
    expect(complexNumber1.substract(complexNumber2)).toStrictEqual(complexNumber12Div);
  });
});