import React from 'react';
import {Routes, Route} from "react-router-dom";
import Feed from "./pages/Feed/Feed";

function App() {
  return (
    <Routes>
      <Route path="/test" element={<Feed/>} />
    </Routes>
  );
}

export default App;
