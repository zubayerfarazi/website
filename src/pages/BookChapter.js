import React from "react";
import { Link } from "react-router-dom";

const BookChapter = () => {
  return (
    <div className="font-serif border-b-4 pt-6 pb-8">
      <h2 className="text-4xl text-center font-extrabold text-blue-600 mb-10">
        Book Chapters
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 lg:px-12">
        {/* Book 1 */}
        <div className="bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <div className="p-6 text-center">
            <h3 className="font-semibold text-2xl text-gray-800 mb-4">
              A Priority-Based Process Scheduling Algorithm in Cloud Computing
            </h3>
            <p className="italic text-lg text-gray-600 mb-4">
              Misbahul Haque, Rakibul Islam, Md Rubayeth Kabir, Fernaz Narin
              Nur, and Nazmun Nessa Moon.
            </p>
            <p className="text-gray-700 mb-6">
              In{" "}
              <span className="font-semibold">
                Emerging Technologies in Data Mining and Information Security
              </span>
              , pp. 239-248. Springer, Singapore, 2019.
            </p>
            <p className="font-bold text-gray-800 mb-2">Available on</p>
            <Link
              to="https://rd.springer.com/chapter/10.1007/978-981-13-1951-8_22"
              className="text-blue-500 hover:text-blue-700 transition-colors"
            >
              Springer
            </Link>
          </div>
        </div>

        {/* Book 2 */}
        <div className="bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <div className="p-6 text-center">
            <h3 className="font-semibold text-2xl text-gray-800 mb-4">
              Enjoy and Learn with Educational Game: Likhte Likhte Shikhi Apps
              for Child Education
            </h3>
            <p className="italic text-lg text-gray-600 mb-4">
              Aunkon, Md Walid Bin Khalid, Md Hasanuzzaman Dipu, Nazmun Nessa
              Moon, Mohd Saifuzzaman, and Fernaz Narin Nur.
            </p>
            <p className="text-gray-700 mb-6">
              In{" "}
              <span className="font-semibold">
                Emerging Technologies in Data Mining and Information Security
              </span>
              , pp. 409-417. Springer, Singapore, 2019.
            </p>
            <p className="font-bold text-gray-800 mb-2">Available on</p>
            <Link
              to="https://rd.springer.com/chapter/10.1007/978-981-13-1951-8_22"
              className="text-blue-500 hover:text-blue-700 transition-colors"
            >
              Springer
            </Link>
          </div>
        </div>

        {/* Book 3 */}
        <div className="bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <div className="p-6 text-center">
            <h3 className="font-semibold text-2xl text-gray-800 mb-4">
              Music Playing and Wallpaper Changing System Based on Emotion from
              Facial Expression
            </h3>
            <p className="italic text-lg text-gray-600 mb-4">
              Hosen, Protik, Nuruzzaman Himel, Md Asaduzzaman Adil, Ms Nazmun
              Nessa Moon, and Fernaz Narin Nur.
            </p>
            <p className="text-gray-700 mb-6">
              In{" "}
              <span className="font-semibold">
                Emerging Technologies in Data Mining and Information Security
              </span>
              , pp. 79-87. Springer, Singapore, 2019.
            </p>
            <p className="font-bold text-gray-800 mb-2">Available on</p>
            <Link
              to="https://rd.springer.com/chapter/10.1007/978-981-13-1951-8_22"
              className="text-blue-500 hover:text-blue-700 transition-colors"
            >
              Springer
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookChapter;
