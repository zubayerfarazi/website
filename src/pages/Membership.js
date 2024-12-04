import React from "react";
import { FaUserTie, FaUsers } from "react-icons/fa";

const Membership = () => {
  return (
    <div className="mb-10 font-serif border-b-4 pb-8 bg-gray-50">
      <h2 className="text-5xl font-extrabold text-center text-blue-600 my-8">
        Memberships & Fellowships
      </h2>

      <div className="flex items-center justify-center">
        <div className="max-w-lg bg-white border p-6 border-gray-200 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <ul className="space-y-6">
            {/* Membership 1 */}
            <li className="flex items-center text-lg">
              <FaUserTie className="text-blue-600 text-2xl mr-4" />
              <span className="font-bold">
                Director, Bangladesh Women in IT (BWIT).
              </span>
            </li>

            {/* Membership 2 */}
            <li className="flex items-center text-lg">
              <FaUsers className="text-blue-600 text-2xl mr-4" />
              <span className="font-bold">
                Member of IEEE, Internet Society, Computer Society.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Membership;
