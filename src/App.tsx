import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/scroll-to-top/scroll-to-top";
import Posts from "./pages/posts/posts";
import Post from "./pages/post/post";
import AboutMe from "./pages/about-me/about-me";
import NavbarComponent from "./UI/navbar/navbar";

type Props = {};

const App = (props: Props) => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<NavbarComponent />}>
          <Route index element={<Posts />} />
          <Route path="/:id" element={<Post />} />
          <Route path="/about-me" element={<AboutMe />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
