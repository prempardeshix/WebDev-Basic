let name = "a";

function init() {
  let name = "b";
  function display() {
    let name = "c";
    {
      let name = "d";
    }
    console.log(name);
  }
  return display;
}

let ans = init();
ans();
