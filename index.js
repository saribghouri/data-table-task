// let firstNames = ["", "Mohsin", "sarib", "Ahmad", "ifran", "Atif"];
// let secondNames = ["", "Ghani", "Ghouri", "imran", "sheikh", "umer"];
// let phones = [
//   "",
//   "03432195645",
//   "03404001628",
//   "03172296946",
//   "03142588176",
//   "03010306020",
// ];
// let genders = ["", "Male", "Male", "Male", "Male", "Male"];
// let emails = [
//   "",
//   "mohsin.ghani777@gmail.com",
//   "sarib.ghouri92@gmail.com",
//   "ahmed.eng2709@gmail.com",
//   "irfan.sheikh54@gmail.com",
//   "Atif.umer502@gmail.com",
// ];

// document.write("<table border = '1px' cellspacing = '5'>");
// document.write(`<th> No  </th>`);
// document.write(`<th> Sr.No  </th>`);
// document.write(`<th> First names  </th>`);
// document.write(`<th> Second names  </th>`);
// document.write(`<th> Phone  </th>`);
// document.write(`<th> Genders  </th>`);
// document.write(`<th> Emails </th>`);
// for (let i = 1; i <= 5; i++) {
//   document.write("<tr>");
//   document.write(`<td>${[i]}  </td>`);
//   document.write(`<td> 0${[i]}  </td>`);
//   document.write(`<td> ${firstNames[i]}  </td>`);
//   document.write(`<td> ${secondNames[i]}  </td>`);
//   document.write(`<td> ${phones[i]}  </td>`);
//   document.write(`<td> ${genders[i]}  </td>`);
//   document.write(`<td> ${emails[i]}  </td>`);
//   document.write("</tr>");
// }
// document.write("</table>");

function tabellOp() {
  let firstNames = ["", "Mohsin", "sarib", "Ahmad", "ifran", "Atif"];
  let secondNames = ["", "Ghani", "Ghouri", "imran", "sheikh", "umer"];
  let phones = [
    "",
    "03432195645",
    "03404001628",
    "03172296946",
    "03142588176",
    "03010306020",
  ];
  let genders = ["", "Male", "Male", "Male", "Male", "Male"];
  let emails = [
    "",
    "mohsin.ghani777@gmail.com",
    "sarib.ghouri92@gmail.com",
    "ahmed.eng2709@gmail.com",
    "irfan.sheikh54@gmail.com",
    "Atif.umer502@gmail.com",
  ];

  for (var i = 0; i < firstNames.length; i++) {
    document.write("<table border = '1px' cellspacing = '5'>");
    document.write(`<th> No  </th>`);
    document.write(`<th> Sr.No  </th>`);
    document.write(`<th> First names  </th>`);
    document.write(`<th> Second names  </th>`);
    document.write(`<th> Phone  </th>`);
    document.write(`<th> Genders  </th>`);
    document.write(`<th> Emails </th>`);
    for (let i = 1; i <= 5; i++) {
      document.write("<tr>");
      document.write(`<td>${[i]}  </td>`);
      document.write(`<td> 0${[i]}  </td>`);
      document.write(`<td> ${firstNames[i]}  </td>`);
      document.write(`<td> ${secondNames[i]}  </td>`);
      document.write(`<td> ${phones[i]}  </td>`);
      document.write(`<td> ${genders[i]}  </td>`);
      document.write(`<td> ${emails[i]}  </td>`);
      document.write("</tr>");
    }
    document.write("</main>");
  }
  tabellget.innerHTML = row;
}
