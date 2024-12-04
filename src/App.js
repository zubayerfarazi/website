import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./navigate/Index";
import { journalPapers } from "./data/journalPaper";
import AllJournalPapersPage from "./pages/AllJournalPapersPage";
import AllConferencePapersPage from "./pages/AllConferencePapersPage";
import { conferencePaper } from "./data/conferencePaper";
function App() {
  return (
    <Router>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Index></Index>}></Route>
        <Route
          path="/all-journal-papers"
          element={<AllJournalPapersPage papers={journalPapers} />}
        />
        <Route
          path="/all-conference-papers"
          element={<AllConferencePapersPage papers={conferencePaper} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
