let person = {
  fName: "Prem",
  LName: "Pardeshi",
  get fullName() {
    // placeholder technique of using back-ticks
    return `${person.fName} ${person.LName}`;
  },
  set fullName(value) {
    // splitting a string into an array
    splittedNameArray = value.split(" ");
    this.fName = splittedNameArray[0];
    this.LName = splittedNameArray[1];
  },
};

person.fullName = "David Laid";
console.log(person.fullName);
