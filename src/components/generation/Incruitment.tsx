import React from "react";

// 데이터 배열 정의
const cards = [
  {
    title: "PRODUCT DESIGNER",
    skills: "리서치 · UX · 디자인시스템",
    status: "모집 예정",
    bgColor: "bg-blue-400",
  },
  {
    title: "ANDROID DEVELOPER",
    skills: "Android · Kotlin · Git",
    status: "모집 예정",
    bgColor: "bg-teal-400",
  },
  {
    title: "iOS DEVELOPER",
    skills: "iOS · Swift · Git",
    status: "모집 예정",
    bgColor: "bg-pink-300",
  },
  {
    title: "SERVER DEVELOPER",
    skills: "Backend · Infra · Git",
    status: "모집 예정",
    bgColor: "bg-purple-400",
  },
  {
    title: "WEB DEVELOPER",
    skills: "Frontend · SPA · 프레임워크 · Git",
    status: "모집 예정",
    bgColor: "bg-yellow-300",
  },
];

export const Incruitment = () => {
  // 각 행을 3개씩 나누고, 2개 이하일 경우 중앙 정렬하는 함수
  const rows = [];
  for (let i = 0; i < cards.length; i += 3) {
    rows.push(cards.slice(i, i + 3));
  }

  return (
    <div className="flex justify-center items-center py-10 bg-white">
      <div className="w-full max-w-screen-lg ">
        {rows.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className={`flex justify-${
              row.length <= 2 ? "center" : "start"
            } gap-6 mb-6`}
          >
            {row.map((card, index) => (
              <div
                key={index}
                className={`p-8 rounded-lg shadow-lg ${card.bgColor} text-black text-center flex flex-col justify-between w-[calc(33.33%-1.5rem)] min-h-[200px]`} // 카드 크기 동일하게 설정
              >
                <div>
                  <h2 className="text-2xl font-bold">{card.title}</h2>
                  <p className="mt-2 text-sm ">{card.skills}</p>
                </div>
                <p className="mt-4 text-lg font-semibold">{card.status}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
