import React from "react";
import { IoArrowBack } from "react-icons/io5";
import { Link } from "react-router-dom";

const AllJournalPapersPage = ({ papers }) => {
  return (
    <div className="my-16 p-8 bg-gradient-to-r from-teal-50 to-blue-100 shadow-2xl rounded-3xl mx-auto">
      <Link
        to={`/`}
        className="flex items-center gap-2 font-semibold text-lg text-gray-800 hover:text-teal-600 mb-8"
      >
        <IoArrowBack /> Back
      </Link>
      <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-8 tracking-tight">
        Journal Papers
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse rounded-lg shadow-lg overflow-hidden">
          <thead>
            <tr className="bg-gradient-to-r from-blue-500 to-blue-700 text-white uppercase text-sm lg:text-lg font-semibold tracking-wider">
              <th className="py-3 lg:py-4 px-4 lg:px-6 rounded-tl-lg">ID</th>
              <th className="py-3 lg:py-4 px-4 lg:px-6 rounded-tl-lg">
                Paper Title
              </th>
              <th className="py-3 lg:py-4 px-4 lg:px-6 rounded-tl-lg">
                Authors
              </th>
              <th className="py-3 lg:py-4 px-4 lg:px-6 rounded-tl-lg">
                Journal
              </th>
              <th className="py-3 lg:py-4 px-4 lg:px-6 rounded-tl-lg">Year</th>
              <th className="py-3 lg:py-4 px-4 lg:px-6 rounded-tl-lg">DOI</th>
            </tr>
          </thead>
          <tbody className="text-sm lg:text-lg">
            {papers.map((paper, index) => (
              <tr
                key={index}
                className={`${
                  index % 2 === 0 ? "bg-white" : "bg-blue-50"
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
                  {paper.authors}
                </td>
                <td className="py-3 lg:py-4 px-4 lg:px-6 border-b border-gray-200 text-gray-700">
                  {paper.journal}
                </td>
                <td className="py-3 lg:py-4 px-4 lg:px-6 border-b border-gray-200 text-gray-700">
                  {paper.year}
                </td>
                <td className="py-3 lg:py-4 px-4 lg:px-6 border-b border-gray-200 text-center">
                  {paper.doi ? (
                    <a
                      href={`https://doi.org/${paper.doi}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:text-teal-800 transition duration-200"
                    >
                      {paper.doi}
                    </a>
                  ) : (
                    <span className="text-gray-500">N/A</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllJournalPapersPage;
