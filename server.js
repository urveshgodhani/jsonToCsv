const createCsvWriter = require("csv-writer").createObjectCsvWriter;

const header = [
  { id: "name", title: "Name" },
  { id: "surname", title: "Surname" },
  { id: "age", title: "Age" },
  { id: "email", title: "Email" },
];

const csvWriter = createCsvWriter({
  path: "./file.csv",
  header: header,
});

const data = [
  { name: "John", surname: "Doe", age: 25, email: "john@doe.com" },
  { name: "Jane", surname: "Doe", age: 28, email: "jane@doe.com" },
];

csvWriter.writeRecords(data).then(() => {
  console.log("The CSV file was written successfully");
});
