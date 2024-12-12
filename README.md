# TypeScript Type Error Bug

This repository demonstrates a common type error in TypeScript that can occur when adding a string and a number.  The function `add` is defined to accept two numbers as input and return their sum. However, when calling the function with a string and a number, a type error is thrown because TypeScript's type system prevents this operation.

## Bug
The bug occurs in `bug.ts` file where the function `add` is called with an invalid parameter type.   This demonstrates how type errors can unexpectedly arise if input types are not carefully validated.

## Solution
The `bugSolution.ts` file demonstrates a solution that addresses the type error using a type guard. This ensures that only numbers are passed to the `add` function, thus preventing errors and improving code robustness.