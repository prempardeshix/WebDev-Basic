let person = {
  fName: "Prem",
  lName: "Pardeshi",
  get fullName() {
    return `${person.fName} ${person.lName}`;
  },
  set fullName(value) {
    if (typeof value !== String) {
      throw new Error("Input is not a String.");
    }
    let splittedName = value.split(" ");
    this.fName = splittedName[0];
    this.lName = splittedName[1];
  },
};

try {
  person.fullName = true;
  console.log(person.fullName);
} catch (e) {
  alert(e);
}
