import Image from "next/image";
import React from "react";
import laptopImg from "../../../Images/laptopImg.jpg";
import worlCloud from "../../../Images/wordCloud.jpg";
import students from "../../../Images/students.jpg";
import students2 from "../../../Images/students2.jpg";
import SirZiaImg from "../../../Images/SirZiaImg.jpg";

function CourseDetail() {
  return (
    <div className="md:m-20 m-5 py-5 space-y-10">
      {/* Heading */}
      <h1 className="text-[#044E83] font-bold md:text-3xl text-xl text-center">
        Certified Cloud Applied Generative AI Engineer (GenEng) and Solopreneur
      </h1>

      {/* Cards Container */}
      <div className="space-y-10">
        {/* First Row: 2 Cards */}
        <div className="flex flex-col md:flex-row justify-between items-center md:space-x-5 space-y-5 md:space-y-0">
          {/* Card 1 */}
          <div className="bg-white rounded-xl shadow-2xl p-5 w-full md:w-[48%] flex flex-col items-center">
            <Image
              src={laptopImg}
              alt="Laptop displaying generative AI tools"
              className="rounded-xl"
            />
            <h2 className="text-[#044E83] font-bold text-xl mt-5">
              Generative AI Tools
            </h2>
            <p className="text-gray-600 text-sm text-center mt-3">
              Explore the latest tools and techniques in generative AI,
              revolutionizing industries and automation.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-xl shadow-2xl p-5 w-full md:w-[48%] flex flex-col items-center">
            <Image
              src={worlCloud}
              alt="Word cloud of AI-related terms"
              className="rounded-xl"
            />
            <h2 className="text-[#044E83] font-bold text-xl mt-5">
              AI Ecosystem
            </h2>
            <p className="text-gray-600 text-sm text-center mt-3">
              Dive into the ecosystem of AI, understanding its foundational
              models and distribution networks.
            </p>
          </div>
        </div>

        {/* Second Row: 3 Cards */}
        <div className="flex flex-col md:flex-row justify-between items-center md:space-x-5 space-y-5 md:space-y-0">
          {/* Card 1 */}
          <div className="bg-white rounded-xl shadow-2xl p-5 w-full md:w-[30%] flex flex-col items-center">
            <Image
              src={students}
              alt="Students working on cloud AI projects"
              className="rounded-xl"
            />
            <h2 className="text-[#044E83] font-bold text-xl mt-5">
              Cloud AI Projects
            </h2>
            <p className="text-gray-600 text-sm text-center mt-3">
              Learn to create and deploy cloud AI solutions for real-world
              applications.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-xl shadow-2xl p-5 w-full md:w-[30%] flex flex-col items-center">
            <Image
              src={students2}
              alt="Group of students learning AI concepts"
              className="rounded-xl"
            />
            <h2 className="text-[#044E83] font-bold text-xl mt-5">
              AI Training
            </h2>
            <p className="text-gray-600 text-sm text-center mt-3">
              Get trained on cutting-edge AI concepts by industry experts.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-xl shadow-2xl p-5 w-full md:w-[30%] flex flex-col items-center">
            <Image
              src={SirZiaImg}
              alt="Sir Ziauddin explaining generative AI"
              className="rounded-xl"
            />
            <h2 className="text-[#044E83] font-bold text-xl mt-5">
              Expert Guidance
            </h2>
            <p className="text-gray-600 text-sm text-center mt-3">
              Learn directly from pioneers like Sir Ziauddin, focusing on
              generative AI advancements.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseDetail;
