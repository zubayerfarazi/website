import React from "react";
import { Link } from "react-router-dom";
import book from "../images/book1.jpg";

const Books = () => {
  return (
    <div className="font-serif border-b-4 pb-10 bg-gray-50">
      <h1 className="text-5xl text-center font-extrabold text-blue-600 mb-8">
        Books
      </h1>

      <div className="flex items-center justify-center">
        <div className="max-w-md bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
          {/* Book Image */}
          <div className="flex items-center justify-center overflow-hidden rounded-t-lg">
            <img
              src={book}
              alt="Book cover"
              className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Book Content */}
          <div className="p-6 text-center">
            <p className="mb-4 text-2xl font-semibold text-gray-800">
              <em>Size Independent Bangla Character Recognition System</em>
            </p>

            <p className="mb-6 text-lg text-gray-700">
              <span className="font-medium">Publisher:</span> LAP LAMBERT
              Academic Publishing, GmbH & Co. KG, Germany, January 2013. <br />
              <span className="font-medium">ISBN:</span> 978-3 8473-4165-9.
            </p>

            <p className="font-bold text-gray-800 mb-4">Available on</p>
            <Link
              to="https://www.amazon.com/Independent-Bangla-Character-Recognition-System/dp/3847341650"
              className="inline-block px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300"
            >
              Amazon
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Books;
