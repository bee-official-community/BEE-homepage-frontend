import React from 'react'
import { AboutUs } from '../components/main/AboutUs'
import { JoinUs } from '../components/main/JoinUs'
import { ProjectIntro } from '../components/main/ProjectIntro'
import { TeamIntro } from '../components/main/TeamIntro'
import Img7 from '../../assets/images/img7.jpg';
import Img8 from '../../assets/images/img8.jpg';

export const MainPage = () => {
  const members = [
    {
      name: "송하영",
      designation: "메인 보컬",
      imageUrl: "data:image/jpeg;base64,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",
      gitHubUrl: "https://github.com/johndoe",
      blogUrl: "https://johndoe.blog",
    },
    {
      name: "박지원",
      designation: "메인 보컬",
      imageUrl: "data:image/jpeg;base64,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",
      gitHubUrl: "https://github.com/janesmith",
      blogUrl: "https://janesmith.blog",
    },
  ];

  return (
    <div>
    <AboutUs/>
    <JoinUs/>
    <ProjectIntro/>
    <TeamIntro members={members}/>
    </div>
  )
}
