import React from "react";
import { IoArrowBack } from "react-icons/io5";
import { Link } from "react-router-dom";

const AllConferencePapersPage = ({ papers }) => {
  return (
    <>
      <div className="my-16 p-8 bg-gradient-to-r from-teal-50 to-blue-100 shadow-2xl rounded-3xl mx-auto">
        <Link
          to={`/`}
          className="flex items-center gap-2 font-semibold text-lg text-gray-800 hover:text-teal-600 mb-8"
        >
          <IoArrowBack /> Back
        </Link>

        <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-8 tracking-tight">
          Conference Papers
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse rounded-lg shadow-lg overflow-hidden">
            <thead>
              <tr className="bg-gradient-to-r from-blue-500 to-blue-700 text-white uppercase text-sm lg:text-lg font-semibold tracking-wider">
                <th className="py-3 lg:py-4 px-4 lg:px-6 rounded-tl-lg">ID</th>
                <th className="py-3 lg:py-4 px-4 lg:px-6 rounded-tl-lg">
                  Title
                </th>
                <th className="py-3 lg:py-4 px-4 lg:px-6 rounded-tl-lg">
                  Authors
                </th>
                <th className="py-3 lg:py-4 px-4 lg:px-6 rounded-tl-lg">
                  Conference
                </th>
                <th className="py-3 lg:py-4 px-4 lg:px-6 rounded-tl-lg">
                  Location
                </th>
                <th className="py-3 lg:py-4 px-4 lg:px-6 rounded-tl-lg">DOI</th>
                <th className="py-3 lg:py-4 px-4 lg:px-6 rounded-tl-lg">
                  Pages
                </th>
                <th className="py-3 lg:py-4 px-4 lg:px-6 rounded-tl-lg">
                  Publisher
                </th>
              </tr>
            </thead>
            <tbody className="text-sm lg:text-lg">
              {papers.map((paper) => (
                <tr
                  key={paper.id}
                  className={`${
                    paper.id % 2 === 0 ? "bg-white" : "bg-blue-50"
                  } hover:bg-blue-100 transition-colors`}
                >
                  <td className="py-3 lg:py-4 px-4 lg:px-6 border-b border-gray-200 text-center text-blue-600 font-medium">
                    {paper.id}
                  </td>
                  <td className="py-3 lg:py-4 px-4 lg:px-6 border-b border-gray-200">
                    <span className="font-semibold text-gray-800">
                      {paper.title}
                    </span>
                  </td>
                  <td className="py-3 lg:py-4 px-4 lg:px-6 border-b border-gray-200 text-gray-700">
                    {paper.authors.join(", ")}
                  </td>
                  <td className="py-3 lg:py-4 px-4 lg:px-6 border-b border-gray-200 text-gray-700">
                    {paper.conference}
                  </td>
                  <td className="py-3 lg:py-4 px-4 lg:px-6 border-b border-gray-200 text-gray-700">
                    {paper.location}
                  </td>
                  <td className="py-3 lg:py-4 px-4 lg:px-6 border-b border-gray-200 text-center">
                    {paper.doi ? (
                      <a
                        href={paper.doi}
                        className="text-blue-500 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Link
                      </a>
                    ) : (
                      "-"
                    )}
                  </td>
                  <td className="py-3 lg:py-4 px-4 lg:px-6 border-b border-gray-200 text-gray-700">
                    {paper.pages || "-"}
                  </td>
                  <td className="py-3 lg:py-4 px-4 lg:px-6 border-b border-gray-200 text-gray-700">
                    {paper.publisher || "-"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default AllConferencePapersPage;
