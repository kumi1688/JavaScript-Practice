const defaultEmployee = {
  name: {
    first: "",
    last: "",
  },
  years: 0,
};

// const employee = Object.assign({}, defaultEmployee);
// employee.name.first = "Joe";

// console.log(employee);
// console.log(defaultEmployee);
// Object.assign 은 얕은 복사이므로 객체가 중첩된 경우 값을 복사하는 것이 아니라 객체를 참조한다
// 따라서 Object.assign으로 생성된 객체의 속성을 조작하는 경우 참조된 객체의 값 역시 변경된다

const employee2 = Object.assign({}, defaultEmployee, {
  name: Object.assign({}, defaultEmployee.name),
});

// 객체 펼침 연산자로 해결
const employee3 = {
  ...defaultEmployee,
  name: {
    ...defaultEmployee.name,
  },
};

employee2.name.first = "kang";
console.log(employee2);
console.log(employee3);
console.log(defaultEmployee);
