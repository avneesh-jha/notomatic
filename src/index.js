import "./index.css";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store";
import { App } from "./App";
import { StrictMode } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Note } from "./pages/Note/Note";
import { NoteBrowse } from "./pages/NoteBrowse/NoteBrowse";
import { NoteCreate } from "./pages/NoteCreate/NoteCreate";
import { PageNotFound } from "./pages/PageNotFound/PageNotFound";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="/" element={<NoteBrowse />} />
            <Route path="/note/:id" element={<Note />} />
            <Route path="/note/new" element={<NoteCreate />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
