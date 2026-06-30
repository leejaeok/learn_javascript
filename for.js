let i;
for (i = 0; i < 10; i++) {
  console.log(`${i}번째 실행중`);
}

for (i = 10; i > 0; i--) {
  console.log(`${i}번째 실행중`);
}

const animals = ["dog", "cat", "puppy", "pig"];

for (i = 0; i < animals.length; i++) {
  console.log(`${animals[i]}😍`);
}

animals.forEach((animal) => {
  console.log(`${animal}👌`);
});

animals.forEach((value, index) => {
  console.log(`${index}번째 : ${value}`);
});

// map :기존 배열을 조작하여 새로운 배열 리턴
// filter : 배열안의 요소들 중 조건을 만족하는 요소들로 새로운 배열 리턴
//         조건을 만족하지않으면 빈배열 리턴
// find : 요소 또는 undefinded 리턴
//        배열안의 요소들 중 조건을 만족하는 요소 하나를 리턴
//        만족하는 요소가 없으면 undefinded 리턴
// some/every : 배열안의 요소들 중 조건을 만족하는지에 대한 boolean 리턴
// some :  하나라도 만족하면  true
// every :  모두 만족해야 true

// 특정문자열 선택 후 ctrl+d를 누르고 변경하면 그 뒤에 있느 ㄴ동일 문자열이 같이 바뀐다

const names = ["alice", "bob", "david", "kelly", "chutzrit"];

//대문자로 변환된 배열
const upperNames = names.map((value) => value.toUpperCase());
console.log("🚀 ~ upperNames:", upperNames);

const emogiNames = names.map((value) => value.toUpperCase() + "🙌");
console.log("🚀 ~ emogiNames:", emogiNames);

const emogiNames2 = names.map((name) => `${name.toUpperCase()}🙌`);
console.log("🚀 ~ emogiNames2:", emogiNames2);

//  글자수가 5자 이상인 요소들만 모은 배열
const filterNames = names.filter((name) => name.length >= 5);
console.log("🚀 ~ filterNames:", filterNames);

const findNames = names.find((name) => name.length >= 5);
console.log("🚀 ~ findNames:", findNames);

const findNamesBob = names.find((name) => name.includes("b"));
console.log("🚀 ~ findNamesBob:", findNamesBob);

const someNames = names.some((name) => name.length >= 5);
console.log("🚀 ~ someNames:", someNames);

const everyNames = names.every((name) => name.length >= 5);
console.log("🚀 ~ everyNames:", everyNames);
