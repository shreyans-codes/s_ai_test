import { useEffect, useState } from "react";
import "./App.css";
import { Button } from "@nextui-org/react";
import axios from "axios";

function App() {
  const [buttonsList, setButtonsList] = useState([]);
  const [tilesCoord, setTilesCoord] = useState({
    start: { x: -1, y: -1 },
    end: { x: -1, y: -1 },
  });

  const [selectedTiles, setSelectedTiles] = useState([]);
  const getPath = async () => {
    const response = await axios.post("http://localhost:8080/getPath", {
      start: {
        x: tilesCoord.start.x,
        y: tilesCoord.start.y,
      },
      end: {
        x: tilesCoord.end.x,
        y: tilesCoord.end.y,
      },
    });
    console.log(response);
    console.log(response.data);

    setSelectedTiles(response.data);
  };
  useEffect(() => {
    if (buttonsList.length === 0) {
      let bList = [];
      for (let i = 0; i < 20; i++) {
        for (let j = 0; j < 20; j++) {
          bList.push({ x: i, y: j });
        }
      }
      setButtonsList(bList);
      console.log(bList);
    }
  }, []);

  useEffect(() => {
    if (tilesCoord.start.x !== -1 && tilesCoord.end.x !== -1) getPath();
  }, [tilesCoord]);

  return (
    <div className="w-max">
      <article className="prose">
        <h2>
          Grid Cell
          <Button
            size="sm"
            variant="flat"
            className="ml-10"
            onPress={() => {
              setTilesCoord({
                start: { x: -1, y: -1 },
                end: { x: -1, y: -1 },
              });
            }}
          >
            Reset
          </Button>
        </h2>
        <div>
          Start: {tilesCoord.start.x + ", " + tilesCoord.start.y}
          <br />
          End: {tilesCoord.end.x + ", " + tilesCoord.end.y}
        </div>
      </article>
      <div
        className="p-2"
        style={{
          display: "grid",
          gap: "2px",
          gridTemplateRows: "repeat(20, 1fr)",
          gridTemplateColumns: "repeat(20, 1fr)",
        }}
      >
        {buttonsList.map((curr, i) => {
          return (
            <Button
              key={i}
              onPress={() => {
                console.log("Pressed: ", curr);
                if (tilesCoord.start.x === -1) {
                  setTilesCoord({ start: curr, end: tilesCoord.end });
                } else {
                  setTilesCoord({ start: tilesCoord.start, end: curr });
                }
              }}
              color={
                selectedTiles.some(
                  (tile) => tile.x === curr.x && tile.y === curr.y
                )
                  ? "primary"
                  : "default"
              }
              variant="flat"
            >
              {curr.x + ", " + curr.y}
            </Button>
          );
        })}
      </div>
    </div>
  );
}

export default App;
