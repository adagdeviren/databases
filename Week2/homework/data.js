const employees = [
    {full_name: 'Elenor Stoneman', salary: 2000, address: 'amsterdam', manager: 1, dept_id: 2 },
    {full_name: "Edda Lacross", salary: 2500, address: 'the hague', manager: 2, dept_id: 1 },
    {full_name: "Kanesha Koogler", salary: 3000, address: 'rotterdam', manager: 3, dept_id: 5 },
    {full_name: "Clyde Broadhead", salary: 3500, address: 'utrecht', manager: 4, dept_id: 3 },
    {full_name: "Macie Eskridge", salary: 3200, address: 'utrecht', manager: 1, dept_id: 5 },
    {full_name: "Vicente Biello", salary: 3900, address: 'amsterdam', manager: 2, dept_id: 7 },
    {full_name: "Holly Reay", salary: 5000, address: 'amsterdam', manager: 3, dept_id: 6 },
    {full_name: "Emmie Gilstrap", salary: 4000, address: 'amsterdam', manager: 3, dept_id: 8 },
    {full_name: "Edison Rabin", salary: 4200, address: 'utrecht', manager: 2, dept_id: 9 },
    {full_name: "Galen Dewar", salary: 4000, address: 'utrecht', manager: 4, dept_id: 2 },
    {full_name: "Dorthea Strunk", salary: 3000, address: 'utrecht', manager: 1, dept_id: 1 },
    {full_name: "Vincent Ford", salary: 3200, address: 'the hague', manager: 1, dept_id: 9 },
    {full_name: "Miki Strawn", salary: 3100, address: 'the hague', manager: 2, dept_id: 9 },
    {full_name: "Jaymie Pounds", salary: 3600, address: 'the hague', manager: 4, dept_id: 9 },
    {full_name: "Dann Sampley", salary: 3000, address: 'utrecht', manager: 4, dept_id: 7 },
    {full_name: "Johnson Howse", salary: 3500, address: 'utrecht', manager: 3, dept_id: 7 },
    {full_name: "Kirstie Penning", salary: 3300, address: 'utrechtC', manager: 1, dept_id: 6 },
    {full_name: "Amal Durrant", salary: 3000, address: 'amsterdam', manager: 2, dept_id: 8 },
    {full_name: "Lonnie Cabrera", salary: 3800, address: 'amsterdam', manager: 3, dept_id: 8 },
    {full_name: "Cammie Daniel", salary: 4000, address: 'amsterdam', manager: 3, dept_id: 8 },
  ];

  const departments = [
    { dept_no: 1, title: 'Marketing', description:"marketing strategies" , address: 1 },
    { dept_no: 2, title: 'Finance', description:"money" , address: 1 },
    { dept_no: 3, title: 'Operations Management', description:"operations" , address: 3 },
    { dept_no: 4, title: 'HR', description:"personell" , address: 3 },
    { dept_no: 5, title: 'Sales', description:"sales" , address: 3 },
    { dept_no: 6, title: 'IT', description:"technical" , address: 2 },
    { dept_no: 7, title: 'Testing', description:"quality tests" , address: 2 },
    { dept_no: 8, title: 'Development',  description:"development works" ,address: 4 },
    { dept_no: 9, title: 'Purchasing', description:"purchases" , address: 5 },
    { dept_no: 10, title: 'Production', description:"production works" , address: 5 },

];

module.exports = {employees, departments};