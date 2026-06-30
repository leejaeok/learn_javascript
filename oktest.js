const tUserName = window.prompt("이름을 입력해주세요"); // 프롬프트 박스가 뜸
const tHtml = Number(window.prompt("HTML 점수를 입력해주세요"));
const tCss = Number(window.prompt("CSS 점수를 입력해주세요"));
const tJavaScript = Number(window.prompt("JavaScript 점수를 입력해주세요"));
const avgUserScore = Math.round((tHtml + tCss + tJavaScript) / 3, 0);
let userlevel;

if (avgUserScore >= 90) {
  userlevel = "A";
} else if (avgUserScore >= 80) {
  userlevel = "B";
} else if (avgUserScore >= 70) {
  userlevel = "C";
} else userlevel = "D";

// 백틱 `` > 사용법 `${}`
console.log(
  `${tUserName}님은 평균은 ${avgUserScore} / ${userlevel}등급입니다.`,
);

// console.log(
//   tUserName +
//     " 님은 평균은 " +
//     avgUserScore +
//     " / " +
//     userlevel +
//     "등급입니다.",
// );
