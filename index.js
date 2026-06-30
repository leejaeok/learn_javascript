const userName = "옥";
// console.log("🚀 ~ userName:", userName); // 변수 선택 후 ctrl + alt + L
// console.log(userName);
// console.log("userName", userName);

const userAge = 43;
const userMBTI = "ISFJ";
const isLoggedin = false;

// console.log("🚀 ~ isLoggedin:", isLoggedin);
// console.log("Type isLoggedin", typeof isLoggedin);
// greeting();
function greeting() {
  const inputUserName = window.prompt("이름을 입력해주세요"); // 프롬프트 박스가 뜸

  // const result = inputUserName + "님 반가워요!";
  const result = `${inputUserName}님 반가워요!`;
  console.log("🚀 ~ greeting ~ inputUserName:", inputUserName);
  console.log(result);
}

const greeting_new = () => {
  const inputUserName = window.prompt("이름을 입력해주세요"); // 프롬프트 박스가 뜸

  // const result = inputUserName + "님 반가워요!";
  const result = `${inputUserName}님 반가워요!`;
  console.log("🚀 ~ greeting ~ inputUserName:", inputUserName);
  console.log(result);
};

const greetingInput = (userNameInput) => {
  console.log("🚀 ~ greeting ~ inputUserName:", userNameInput);
};

// greetingInput("test");

const add = (num1, num2) => {
  console.log("🚀 ~ add ~ num2:", num2);
  console.log("🚀 ~ add ~ num1:", num1);

  return num1 + num2;
};

// console.log(add(1, 2));

const upperResult = (name) => {
  return name.toUpperCase();
};

// console.log(upperResult("test"));
