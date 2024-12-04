import React from "react";
import { Link } from "react-router-dom";

const JournalPapers = ({ papers }) => {
  return (
    <section id="journal-papers" className="my-12 px-4 lg:px-8">
      <h2 className="text-4xl font-extrabold text-center text-blue-600 mb-8">
        Journal Papers
      </h2>

      {papers.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">
          No journal papers available.
        </p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse rounded-lg shadow-lg overflow-hidden">
            <thead>
              <tr className="bg-gradient-to-r from-blue-500 to-blue-700 text-white uppercase text-sm lg:text-lg font-semibold tracking-wider">
                <th className="py-3 lg:py-4 px-4 lg:px-6 rounded-tl-lg">ID</th>
                <th className="py-3 lg:py-4 px-4 lg:px-6">Paper Title</th>
                <th className="py-3 lg:py-4 px-4 lg:px-6">Authors</th>
                <th className="py-3 lg:py-4 px-4 lg:px-6">Journal</th>
                <th className="py-3 lg:py-4 px-4 lg:px-6">Year</th>
                <th className="py-3 lg:py-4 px-4 lg:px-6 rounded-tr-lg">DOI</th>
              </tr>
            </thead>
            <tbody className="text-sm lg:text-lg">
              {papers.slice(0, 5).map((paper, index) => (
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
                  <td className="py-3 lg:py-4 px-4 lg:px-6 border-b border-gray-200 text-gray-700 text-center">
                    {paper.year}
                  </td>
                  <td className="py-3 lg:py-4 px-4 lg:px-6 border-b border-gray-200 text-center">
                    {paper.doi ? (
                      <a
                        href={paper.doi}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 underline hover:text-blue-800 transition"
                      >
                        Link
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
      )}

      <div className="flex items-center justify-center mt-6">
        <Link to="/all-journal-papers">
          <button className="px-6 lg:px-8 py-2 lg:py-3 text-sm lg:text-lg bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition duration-300">
            See More
          </button>
        </Link>
      </div>
    </section>
  );
};

export default JournalPapers;
