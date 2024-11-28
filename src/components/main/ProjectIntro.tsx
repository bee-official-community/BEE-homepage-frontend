import React from 'react';
import Slider from 'react-slick'; // react-slick 임포트
import Winter from '../../assets/images/winter.jpg';
import Img2 from '../../assets/images/img2.jpg';
import Img3 from '../../assets/images/img3.jpg';
import Img4 from '../../assets/images/img4.jpg';
import Img5 from '../../assets/images/img5.jpg';
import Img6 from '../../assets/images/img6.jpg';
// 이미지 배열
const images = [
  { src: Winter, alt: 'Winter Scene' },
  { src: Img2, alt: 'Scene 2' },
  { src: Img3, alt: 'Scene 3' },
  { src: Img4, alt: 'Scene 4' },
  { src: Img5, alt: 'Scene 5' },
  { src: Img6, alt: 'Scene 6' },
];

// 슬라이더 설정
const settings = {
  dots: false, // 아래 점 표시
  infinite: true, // 무한 루프 (슬라이드가 끝나면 첫 번째 슬라이드로 돌아옴)
  speed: 8000, // 슬라이드 전환 속도 (1000ms로 설정)
  slidesToShow: 3, // 한 번에 보여줄 슬라이드 개수
  slidesToScroll: 1, // 한 번에 스크롤 될 슬라이드 개수
  autoplay: true, // 자동 슬라이드
  autoplaySpeed: 0, // 자동 슬라이드 간격 (간격 없이 바로 전환)
  centerMode: false, // 중앙 모드 비활성화
  variableWidth: true, // 각 슬라이드 너비를 자동으로 조정
  cssEase: 'linear', // CSS 애니메이션의 전환 속도를 일정하게
  pauseOnHover: false, // 마우스 호버 시 슬라이드 멈추지 않음
  adaptiveHeight: true, // 슬라이드 높이를 자동으로 조정
};

export const ProjectIntro = () => {
  return (
    <div className="flex justify-center py-10">
      <div className="text-2xl flex flex-col items-center">
        <h1 className="mb-6 font-bold">1TH PROJECT</h1>
        {/* react-slick 슬라이더 적용 */}
        <div className="w-[1852px]">
          <Slider {...settings}>
            {images.map((image, index) => (
              <div key={index} className="px-3">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-[212px] object-cover shadow-lg"
                />
              </div>
            ))}
          </Slider>
          <div className='flex justify-center mt-6 hover:text-green-600'>
            <a href='/project'>모든 프로젝트</a>
          </div>
        </div>
      </div>
    </div>
  );
};
