
// Array
// export function arrAdd(nums: Array<i32>): Array<i32> {
//   const result: Array<i32> = nums.map((num: i32): i32=> num + 1)
//   return result
// }

export function sum(a: i32, b:i32): i32 {
  const result: i32 =  a + b
  console.log('result')
  return result
}

// // Object
// class ComplexObject {
//   constructor() {} // !
//   field: string | null;
// }

// export function newObject(): ComplexObject {
//   return new ComplexObject();
// }

// export function setObjectField(target: ComplexObject, field: string | null): void {
//   target.field = field;
// }

// export function getObjectField(target: ComplexObject): string | null {
//   return target.field;
// }


// // binding js function
// @external("./binding.js", "myFunction")
// declare function myFunction(): string;

// export function runMyFunction(): string {
//   return myFunction()
// }