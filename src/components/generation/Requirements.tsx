import React from "react";

export const Requirements = () => {
  const cards = [
    {
      title: "매주 월요일 오후 2-5시에 진행되는 정규 세션에 참여할 수 있는 분",
    },
    {
      title:
        "매사에 주도적으로 참여하거나, 문제를 능동적으로 해결한 경험이 있는 분",
    },
    {
      title:
        "디자이너와 개발자의 동반 성장에 공감하며, 이를 실천하고자 하는 분",
    },
    {
      title: "무엇인가에 꾸준히 몰입해본 열정이 있는 분",
    },
    {
      title:
        "스터디 기간 동안 맡은 역할을 충분히 이행할 수 있는 책임감 있는 분",
    },
    {
      title:
        "좋은 결과만 추구하는 것이 아닌 모든 과정을 즐기는 태도를 가지신 분",
    },
  ];

  return (
    <div className="flex justify-center items-center ">
      <div className="w-full max-w-screen-lg ">
        <h1 className="text-3xl flex justify-center font-bold">지원 자격</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`p-6 rounded-lg shadow-2xl text-center flex flex-col justify-between h-[150px]`}
            >
              <div className="text-2xl text-amber-600 font-bold text-left">
                0{index + 1}
              </div>
              <h2 className="text-base text-left">{card.title}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
