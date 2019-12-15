const employees = [
    { emp_name: 'Thomas', salary: 2000, reports_to: 1 },
    { emp_name: 'Alexandra', salary: 2500, reports_to: 1 },
    { emp_name: 'John', salary: 3000, reports_to: 2 },
    { emp_name: 'Claude', salary: 3500, reports_to: 3 },
    { emp_name: 'Jeremy', salary: 4000, reports_to: 3 },
    { emp_name: 'Meredith', salary: 3000, reports_to: 1 },
    { emp_name: 'Duane', salary: 2000, reports_to: 4 },
    { emp_name: 'Courtney', salary: 2800, reports_to: 2 },
    { emp_name: 'Holly', salary: 4200, reports_to: 5 },
    { emp_name: 'Jerry', salary: 5000, reports_to: 3 }
];

const departments = [
    { dept_no: 1, dept_name: 'Marketing', manager: 1 },
    { dept_no: 2, dept_name: 'Finance', manager: 1 },
    { dept_no: 3, dept_name: 'Operations Managemetn', manager: 3 },
    { dept_no: 4, dept_name: 'HR', manager: 3 },
    { dept_no: 5, dept_name: 'Sales', manager: 3 },
    { dept_no: 6, dept_name: 'IT', manager: 2 },
    { dept_no: 7, dept_name: 'Testing', manager: 2 },
    { dept_no: 8, dept_name: 'Development', manager: 4 },
    { dept_no: 9, dept_name: 'Purchasing', manager: 5 },
    { dept_no: 10, dept_name: 'Production', manager: 5 },

]

const projects = [
    { proj_name: 'project-A', starting_date: '2019-03-12', ending_date: '2019-05-15' },
    { proj_name: 'project-B', starting_date: '2019-05-10', ending_date: '2019-06-21' },
    { proj_name: 'project-C', starting_date: '2019-05-01', ending_date: '2019-07-13' },
    { proj_name: 'project-D', starting_date: '2019-04-12', ending_date: '2019-08-17' },
    { proj_name: 'project-E', starting_date: '2019-07-04', ending_date: '2019-07-30' },
    { proj_name: 'project-F', starting_date: '2019-08-30', ending_date: '2019-08-10' },
    { proj_name: 'project-G', starting_date: '2019-09-10', ending_date: '2019-09-20' },
    { proj_name: 'project-H', starting_date: '2019-10-01', ending_date: '2019-10-30' },
    { proj_name: 'project-I', starting_date: '2019-11-01', ending_date: '2019-12-20' },
    { proj_name: 'project-J', starting_date: '2019-12-20', ending_date: '2020-03-12' },
];

module.exports={
    projects, employees, departments
};