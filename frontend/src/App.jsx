import { useEffect, useState } from "react";
import "./App.css";
import { Button } from "@nextui-org/react";

function App() {
  const [buttonsList, setButtonsList] = useState([]);
  const [tilesCoord, setTilesCoord] = useState({ start: -1, end: -1 });
  useEffect(() => {
    if (buttonsList.length === 0) {
      let bList = [];
      for (let i = 0; i < 400; i++) {
        bList.push(i);
      }
      setButtonsList(bList);
      console.log(buttonsList);
    }
  }, []);

  return (
    <div>
      Grid Cell:
      <div
        // className="grid grid-cols-[20] grid-rows-[20]"
        style={{
          display: "grid",
          gridTemplateRows: "repeat(20, 1fr)",
          gridTemplateColumns: "repeat(20, 1fr)",
        }}
      >
        {buttonsList.map((curr) => {
          return (
            <Button
              key={curr}
              onPress={() => {
                console.log("Pressed: ", curr);
                if (tilesCoord.start === -1) {
                  setTilesCoord({ start: curr, end: tilesCoord.end });
                } else {
                  setTilesCoord({ start: tilesCoord.start, end: curr });
                  // Call API here
                }
              }}
            >
              {curr}
            </Button>
          );
        })}
      </div>
    </div>
  );
}

export default App;
