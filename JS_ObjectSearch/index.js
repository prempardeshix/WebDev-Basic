let courses = [
  { sub: "english", no: 1, name: "abhi" },
  {
    sub: "maths",
    no: 2,
    name: "prem",
  },
];

let course = courses.find((courses) => courses.name === "prem");

console.log(course.no);