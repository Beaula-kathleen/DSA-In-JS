let val = [" Hello"];
if (typeof val == "object") {
  Array.isArray(val) ? console.log("Array") : console.log("Object");
} else console.log(typeof val);
