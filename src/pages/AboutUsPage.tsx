import aboutUsBanner from "../assets/images/about_us_banner.jpg";
import aboutUsOrientation from "../assets/images/about_us_orientation.jpg";
import aboutUsNetworkingDay from "../assets/images/about_us_networking_day.jpg";
import aboutUsUsabilityTest from "../assets/images/about_us_usability_test.jpg";
import aboutUsMidtermAnnounce from "../assets/images/about_us_midterm_announce.jpg";
import aboutUsLaunchingDay from "../assets/images/about_us_launching_day.jpg";
import aboutUsFinalAnnounce from "../assets/images/about_us_final_announce.jpg";

export const AboutUsPage = () => {
  return (
    <div className="w-full min-h-[calc(100vh-4rem)] flex flex-col gap-32">
      <section className="w-full h-72 bg-buttercream grid place-items-center">
        <div>
          <img
            src={aboutUsBanner}
            alt="소개 이미지"
            className="w-full h-72 object-contain"
          />
        </div>
      </section>
      <h1 className="text-3xl font-semibold grid place-items-center text-center">
        BEE는 디자이너와 개발자가 서비스 기획부터 <br /> 런칭까지 함께 경험하는
        성장추구형 커뮤니티입니다.
      </h1>
      <div className="py-12 grid place-items-center gap-8 bg-lightgrey">
        <h2 className="grid place-items-center text-xl font-semibold">
          OFFLINE SESSION
        </h2>
        {/* 오프라인 세션 이미지 */}
        <div className="w-[960px] grid grid-cols-3 grid-rows-2 gap-4">
          {[
            {
              image: aboutUsOrientation,
              title: "오리엔테이션",
              subtitle: "시작의 순간",
              description: "디자이너와 개발자가 처음 만나는 자리입니다.",
              titleColor: "text-amber-500",
            },
            {
              image: aboutUsNetworkingDay,
              title: "네트워킹 데이",
              subtitle: "인맥을 넓히는 시간",
              description:
                "다양한 분야의 전문가들과의 네트워킹 시간이 마련됩니다.",
              titleColor: "text-buttercream",
            },
            {
              image: aboutUsUsabilityTest,
              title: "사용성 테스트",
              subtitle: "실사용자 피드백",
              description: "실제 사용자의 피드백을 바탕으로 개선점을 찾습니다.",
              titleColor: "text-darkmint",
            },
            {
              image: aboutUsMidtermAnnounce,
              title: "중간 발표",
              subtitle: "프로젝트 진행 상황",
              description: "팀별 진행 상황을 발표하고 피드백을 받습니다.",
              titleColor: "text-buttercream",
            },
            {
              image: aboutUsLaunchingDay,
              title: "런칭 데이",
              subtitle: "서비스 런칭",
              description: "우리의 서비스를 세상에 공개하는 날입니다.",
              titleColor: "text-pastelblue",
            },
            {
              image: aboutUsFinalAnnounce,
              title: "최종 발표",
              subtitle: "최종 결과 발표",
              description: "프로젝트의 최종 결과를 발표하고 평가받습니다.",
              titleColor: "text-lightpurple",
            },
          ].map((item, index, titleColor) => (
            <article
              key={index}
              className="relative group bg-gray-200 overflow-hidden"
            >
              <img
                src={item.image}
                alt={`오프라인 세션 ${index + 1}`}
                className="w-full h-full object-cover group-hover:blur-sm"
              />
              <div className="absolute inset-0 bg-white bg-opacity-70 group-hover:bg-black group-hover:bg-opacity-80 transition duration-100"></div>
              <div className="absolute top-4 left-4 flex flex-col text-black">
                <h3 className={`text-2xl font-semibold ${item.titleColor}`}>
                  {item.title}
                </h3>
                <h4 className="text-lg font-semibold group-hover:text-white">
                  {item.subtitle}
                </h4>
              </div>
              <div className="absolute inset-0 flex flex-col justify-center items-center text-white opacity-0 group-hover:opacity-100 transition duration-200">
                <p className="absolute bottom-4 left-4 right-4 text-sm">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
      <div className="py-12 grid place-items-center gap-8 bg-lightgrey">
        <h2 className="grid place-items-center text-xl font-semibold">
          CONTACT
        </h2>
        <ul className="flex gap-16">
          <li className="flex flex-col gap-4 p-8 bg-white">
            <h3 className="text-2xl font-semibold">KAKAO CHANNEL</h3>
            <span>@bee</span>
          </li>
          <li className="flex flex-col gap-4 p-8 bg-white">
            <h3 className="text-2xl font-semibold">E-MAIL</h3>
            <span>bee@gmail.com</span>
          </li>
        </ul>
      </div>
    </div>
  );
};
