import React, { useState } from "react";
import "./App.css";

import Video from "./Video";
import db from "./firebase";
import { useEffect } from "react";

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    db.collection("videos").onSnapshot((snapshot) => {
      setVideos(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });

    return () => {};
  }, [videos]);

  return (
    <div className="app">
      <div className="app__videos">
        {videos?.map(
          ({
            id,
            url,
            channel,
            song,
            likes,
            description,
            shares,
            messages,
          }) => (
            <Video
              key={id}
              channel={channel}
              song={song}
              description={description}
              likes={likes}
              shares={shares}
              messages={messages}
              // url={funny}
              url={url}
            />
          )
        )}
      </div>
    </div>
  );
}

export default App;
