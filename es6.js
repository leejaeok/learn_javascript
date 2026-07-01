//Logical Operator : 논리적인 true, false를 판단하여 반환
//and, or, not

/**
 * 자바스크립트에서 false로 처리되는 것
 * 1. null
 * 2. undefined
 * 3. "" <- 빈문자열
 * 4. 0
 */

const user = {
  isLoggedIn: true,
  role: "admin",
};

//관리자 페이지 접근 여부 확인
/**
 * 조건1 : 로그인 된 상태일 것
 * 조건2 : role이 관리자일 것
 */
if (user.isLoggedIn && user.role === "admin") {
  //관리자페이지 접근가능
  console.log("✅ 관리자페이지 접근가능");
} else {
  console.log("❌ 관리자페이지 접근불가능");
}

// not 연산자 : 반전

// 미션 : 아래 조건에 모두 부합하는 경우 콘텐츠 배포
// 조건1 : 티스토리 블로그에 로그인 세션이 있는 경우
// 조건2 : AI가 작성한 글의 품질 게이트 점수가 95점 이상인 경우

// Object Destructyrin 구조분해할당
// 배열, 객체에서 각각의 값이나 속성을 분해하여 손쉽게 별도의 변수에 담아주는것

const colors = ["red", "orange", "blue"];

const firstColor = colors[0];
console.log("🚀 ~ firstColor:", firstColor);
const secondColor = colors[1];
console.log("🚀 ~ secondColor:", secondColor);
const thirdColor = colors[2];

// 구조분해할당
// 배열은 순서대로
const [first, second] = ["red", "orange", "blue"];
// const [first, second] = colors;
console.log("🚀 ~ first:", first);
console.log("🚀 ~ second:", second);

const guest = {
  userName: "옥",
  id: "ljok",
  age: 11,
};

// const userName = guest.userName;

// 객체는 키값으로
const { id, userName, age: userAge } = guest;
console.log("🚀 ~ userAge:", userAge);
console.log("🚀 ~ userName:", userName);
console.log("🚀 ~ id:", id);

// Spread Syntax : 배열이나 객체를 개별요소로 분해하거나 결합할떄 사용
const newColors = [...colors]; // ... > 원본에 대하 복사하는 문법
const newColorsAdd = ["brown", ...colors, "purple"]; // ... > 원본에 대하 복사하는 문법, 추가도 가능
console.log("🚀 ~ newColorsAdd:", newColorsAdd);
console.log("🚀 ~ newColors:", newColors);

//[...colors] => ["red", "orange", "blue"] 그대로 복사
//[colors] => [["red", "orange", "blue"]] 배열안에 배열로 들어감

const newGuest = { ...guest, mbti: "ISFJ", userName: "이미 있는값도 변경가능" };
console.log("🚀 ~ newGuest:", newGuest);

// 미션 : 오늘의 할일 추가
// todoItem에 오늘 할일 데이터 추가, isComplete의 값을 true로 변경하는 새로운 객체 만들기
// 조건 :  spread syntax 문법으로 만들것
const todoItem = { id: 1, isComplete: false };
const addTodoItem = { ...todoItem, isComplete: true };
console.log("🚀 ~ addTodoItem:", addTodoItem);

const todoItemArr = [{ id: 1, isComplete: false }];
const addTodoItemArr = [...todoItemArr, { id: 2, isComplete: true }];
console.log("🚀 ~ addTodoItemArr:", addTodoItemArr);
