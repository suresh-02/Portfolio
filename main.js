// let st = setInterval(() => {
//   console.log("after 1000");
// }, 1000);

// // console.log("after setTimeout");
// // console.log("after setTimeout 2");
// setTimeout(() => {
//   st.unref();
// },1000);

// Debounce
let to;
function print(msg) {
  clearTimeout(to);
  to = setTimeout(() => {
    console.log(msg);
    console.log(new Date());
  }, 1000);
}

console.log(new Date());

print("1");
print("12");
print("123");
print("1234");
print("12345");
