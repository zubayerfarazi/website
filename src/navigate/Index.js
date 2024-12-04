import React from "react";
import Home from "../pages/Home";
import About from "../pages/About";
import Publications from "../pages/Publications";
import Books from "../pages/Books";
import BookChapter from "../pages/BookChapter";
import Membership from "../pages/Membership";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <>
      <Home></Home>
      <About></About>
      <Publications></Publications>
      <Books></Books>
      <BookChapter></BookChapter>
      <Membership></Membership>
      <Footer></Footer>
    </>
  );
};

export default Index;
