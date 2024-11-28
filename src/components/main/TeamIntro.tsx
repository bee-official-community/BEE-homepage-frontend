import React from "react";
import github from "../../assets/images/github.jpg";
import blog from "../../assets/images/blog.jpg";

interface Member {
  name: string;
  designation: string;
  imageUrl: string;
  gitHubUrl: string;
  blogUrl: string;
}

interface TeamIntroProps {
  members: Member[];
}

export const TeamIntro: React.FC<TeamIntroProps> = ({ members }) => {
  return (
    <div className="text-center p-5">
      <h1 className="text-3xl font-bold mb-2">1기수 맴버</h1>
      <h3 className="text-xl text-gray-600 mb-8">Our Master Chefs</h3>
      <div className="flex justify-center flex-wrap gap-6">
        {members.map((member, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-lg p-5 w-52 text-center shadow-md hover:shadow-lg transition-shadow duration-200"
          >
            <img
              src={member.imageUrl}
              alt={member.name}
              className="w-full h-40 rounded-full object-cover mb-4"
            />
            <h4 className="text-lg font-medium">{member.name}</h4>
            <p className="text-sm text-gray-500">{member.designation}</p>
            <div className="flex justify-center mt-4 space-x-4">
              <a href={member.gitHubUrl} target="_blank" rel="noopener noreferrer">
                <img
                  src={github}
                  alt="깃허브"
                  className="w-9 h-9"
                />
              </a>
              <a href={member.blogUrl} target="_blank" rel="noopener noreferrer">
                <img
                  src={blog}
                  alt="블로그"
                  className="w-9 h-9"
                />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
