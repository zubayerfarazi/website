import React from "react";
import { journalPapers } from "../data/journalPaper";
import ConferencePaperTable from "../components/ConferencePaper";
import { conferencePaper } from "../data/conferencePaper";
import JournalPapers from "../components/JournalPaper";

const Publications = () => {
  return (
    <>
      <div className="w-full bg-white dark:bg-white text-black pt-10 mb-10 border-b-4 font-serif">
        <h1 className="text-5xl font-bold text-center leading-relaxed">
          Research Publications
        </h1>

        <div className="mt-8 px-4">
          <JournalPapers papers={journalPapers}></JournalPapers>
        </div>

        <div className="mt-8 px-4">
          <ConferencePaperTable papers={conferencePaper} />
        </div>
      </div>
    </>
  );
};

export default Publications;
