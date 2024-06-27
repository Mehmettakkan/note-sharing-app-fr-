import React, { useState } from "react";
import { Grid } from "semantic-ui-react";
import { Route, Routes, useLocation } from "react-router-dom";
import Categories from "./Categories";
import SharerList from "../pages/SharerList";
import SharerDetail from "../pages/SharerDetail";
import FavoriteNote from "../pages/FavoriteNote";
import NoteList from "../pages/NoteList";
import NoteDetail from "../pages/NoteDetail";
import Register from "../pages/Register";
import Login from "../pages/Login";
import { ToastContainer } from "react-toastify";
import Contact from "../pages/Contact";
import About from "../pages/About";
import UpdateNote from "../pages/UpdateNote";

export default function Dashboard({ handleSignIn }) {
  const [searchTerm, setSearchTerm] = useState("");
  const location = useLocation();

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  // Exclude paths like "/notes/:id"
  const showCategories =
    location.pathname === "/" ||
    (location.pathname.startsWith("/notes") &&
      !/^\/notes\/\d+$/.test(location.pathname)) ||
    location.pathname.startsWith("/courses");

  return (
    <div>
      <ToastContainer position="bottom-right" />
      <Grid>
        <Grid.Row>
          {showCategories && (
            <Grid.Column width={4}>
              <Categories onSearch={handleSearch} />
            </Grid.Column>
          )}
          <Grid.Column width={showCategories ? 12 : 16}>
            <Routes>
              <Route path="/" element={<NoteList searchTerm={searchTerm} />} />
              <Route
                path="/notes"
                element={<NoteList searchTerm={searchTerm} />}
              />
              <Route path="/notes/:id" element={<NoteDetail />} />
              <Route path="/courses/:courseId" element={<NoteList />} />
              <Route path="/sharers" element={<SharerList />} />
              <Route path="/sharers/:id" element={<SharerDetail />} />
              <Route path="/favorites" element={<FavoriteNote />} />
              <Route path="/register" element={<Register />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />
              <Route path="/update-note" element={<UpdateNote />} />
              <Route
                path="/login"
                element={<Login onSignIn={handleSignIn} />}
              />
            </Routes>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
