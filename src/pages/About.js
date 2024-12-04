import React from "react";
import profileImage from "../images/Prof Feraz.jpeg";

const About = () => {
  return (
    <div className="w-full bg-gradient-to-r from-blue-50 via-white to-blue-50 text-black pt-12 pb-16 border-b-4 shadow-lg">
      <div className="flex flex-col md:flex-row justify-around items-center px-6 md:px-12 space-y-6 md:space-y-0 md:space-x-12">
        {/* Profile Image Section */}
        <div>
          <img
            src={profileImage}
            alt="Profile"
            className="rounded-full w-48 md:w-64 lg:w-80 shadow-md hover:shadow-xl transition-shadow duration-300"
          />
        </div>

        {/* Text Section */}
        <div className="text-lg text-justify md:text-xl leading-8 max-w-4xl md:max-w-5xl font-serif">
          <h1 className="text-5xl font-extrabold border-b-4 pb-2 leading-relaxed text-center md:text-left">
            About Me
          </h1>
          <p className="py-6 text-gray-700">
            I am Dr. Fernaz Narin Nur , a dedicated academic with a passion for
            Computer Science. I hold a Ph.D. in Computer Science Engineering and
            have been privileged to serve as a Professor at the prestigious
            Military Institute of Science and Technology (MIST) .
          </p>
          <p className="py-4 text-gray-700">
            My research interests span a range of cutting-edge areas, including
            Directional Wireless Sensor Networks, Cloud Computing , and the
            Internet of Things . I am committed to pushing the boundaries of
            knowledge and contributing to the advancement of these fields.
          </p>
          <p className="py-4 text-gray-700">
            In addition to my research endeavors, I am passionate about teaching
            and mentoring the next generation of computer scientists. I have
            taught at renowned institutions, including Notre Dame University
            Bangladesh, Daffodil International University, State University of
            Bangladesh, World University Bangladesh , and East West University .
          </p>
          <p className="py-4 text-gray-700">
            Beyond academia, I enjoy exploring new cultures and experiences. I
            am a member of the Green Networking Research Group, IEEE, Internet
            Society , and Bangladesh Women in IT . I am excited about the future
            of technology and look forward to the challenges and opportunities
            that lie ahead.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
