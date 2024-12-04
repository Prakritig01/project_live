import React from "react";
import ImageHolder from "./Component/ImageHolder/ImageHolder";
import './App.css';

const App = () => {
  return (
    <div className="box">
      
      
      <ImageHolder
        name="Gallery"
        count={4}
        images={[
          {
            url: "https://images.unsplash.com/photo-1659898152331-d2e32218f7bc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGpwZWd8ZW58MHx8MHx8fDA%3D",
            ready: true,
            error: false,
          },
          {
            url: "https://images.unsplash.com/photo-1625215081436-85323ed5042c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGpwZWd8ZW58MHx8MHx8fDA%3D",
            ready: true,
            error: false,
          },
          {
            url: "https://plus.unsplash.com/premium_photo-1670591909028-1ea631e317d7?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            ready: true,
            error: false,
          },
          {
            url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            ready: false,
            error: true,
          },
        ]}
      />
      <div className="explorin-text">
        <h2>Exporin Academy</h2>
        <p>3+ offline centers</p>
      </div>

      
    </div>

  );
};

export default App;
