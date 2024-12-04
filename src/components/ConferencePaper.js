import React from "react";
import { Link } from "react-router-dom";

const ConferencePaperTable = ({ papers }) => {
  return (
    <section id="conference-papers" className="my-12 px-4 lg:px-8">
      <h2 className="text-4xl font-extrabold text-center text-blue-600 mb-8">
        Conference Papers
      </h2>

      {papers.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">
          No conference papers available.
        </p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse rounded-lg shadow-lg overflow-hidden">
            <thead className="bg-gradient-to-r from-blue-500 to-blue-700 text-white">
              <tr className="uppercase text-sm lg:text-lg font-semibold">
                <th className="px-4 lg:px-6 py-3 lg:py-4 text-left rounded-tl-lg">
                  ID
                </th>
                <th className="px-4 lg:px-6 py-3 lg:py-4 text-left">Title</th>
                <th className="px-4 lg:px-6 py-3 lg:py-4 text-left">Authors</th>
                <th className="px-4 lg:px-6 py-3 lg:py-4 text-left">
                  Conference
                </th>
                <th className="px-4 lg:px-6 py-3 lg:py-4 text-left">
                  Location
                </th>
                <th className="px-4 lg:px-6 py-3 lg:py-4 text-center rounded-tr-lg">
                  DOI
                </th>
              </tr>
            </thead>
            <tbody className="text-sm lg:text-lg">
              {papers.slice(0, 5).map((paper, index) => (
                <tr
                  key={paper.id}
                  className={`${
                    index % 2 === 0 ? "bg-white" : "bg-blue-50"
                  } hover:bg-blue-100 transition-colors`}
                >
                  <td className="px-4 lg:px-6 py-3 lg:py-4 text-blue-600 border-b text-center font-medium">
                    {paper.id}
                  </td>
                  <td className="px-4 lg:px-6 py-3 lg:py-4 border-b text-gray-800">
                    {paper.title}
                  </td>
                  <td className="px-4 lg:px-6 py-3 lg:py-4 border-b text-gray-700">
                    {paper.authors.join(", ")}
                  </td>
                  <td className="px-4 lg:px-6 py-3 lg:py-4 border-b text-gray-700">
                    {paper.conference}
                  </td>
                  <td className="px-4 lg:px-6 py-3 lg:py-4 border-b text-gray-700">
                    {paper.location}
                  </td>
                  <td className="px-4 lg:px-6 py-3 lg:py-4 border-b text-center">
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
        <Link to="/all-conference-papers">
          <button className="px-6 lg:px-8 py-2 lg:py-3 text-sm lg:text-lg bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition duration-300">
            See More
          </button>
        </Link>
      </div>
    </section>
  );
};

export default ConferencePaperTable;
