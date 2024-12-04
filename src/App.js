import React from "react";
import ImageHolder from "./Component/ImageHolder/ImageHolder";

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
            ready: false,
            error: true,
          },
          {
            url: "https://images.unsplash.com/photo-1688063881406-8336ed8bd484?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8anBlZyUyMG5hdHVyZSUyMGxhbmRzY2FwZXxlbnwwfHwwfHx8MA%3D%3D",
            ready: true,
            error: false,
          },
          {
            url: "https://images.unsplash.com/photo-1658546388188-64dd0916df87?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGpwZWd8ZW58MHx8MHx8fDA%3D",
            ready: false,
            error: false,
          },
        ]}
      />
      <div className="explorin-text">Explorin Academy</div>
    </div>

  );
};

export default App;
