import React, { useEffect, useState } from "react";
import "./App.css";
import Board from "./Components/Board/Board";
import Editable from "./Components/Editable/Editable";
import { getUniqueKey } from "./utils/uuid";

const App = () => {
  const [boards, setBoards] = useState(
    JSON.parse(localStorage.getItem("kanban")) || []
  );
  /////////////////////////////////////////////
  const [target, setTarget] = useState({
    cid: "",
    bid: "",
  });
  /////////////////////////////////////////////

  //   to add a new card
  const addCard = (title, bid) => {
    const card = {
      id: getUniqueKey("Card"),
      title,
      labels: [],
      tasks: [],
      date: "",
      desc: "",
    };

    const index = boards.findIndex((item) => item.id === bid);
    if (index < 0) return;

    const tempBoards = JSON.parse(JSON.stringify(boards));
    tempBoards[index].cards.push(card);
    setBoards(tempBoards);
  };
  /////////////////////////////////////////////

  const removeCard = (cid, bid) => {
    const bIndex = boards.findIndex((item) => item.id === bid);
    if (bIndex < 0) return;
    const cIndex = boards[bIndex].cards.findIndex((item) => item.id === cid);
    if (cIndex < 0) return;

    const tempBoards = JSON.parse(JSON.stringify(boards));
    tempBoards[bIndex].cards.splice(cIndex, 1);
    setBoards(tempBoards);
  };
  /////////////////////////////////////////////

  const addBoard = (title) => {
    const tempBoards = JSON.parse(JSON.stringify(boards));
    setBoards([
      ...tempBoards,
      {
        id: getUniqueKey("Board"),
        title,
        cards: [],
      },
    ]);
  };
  /////////////////////////////////////////////

  const removeBoard = (bid) => {
    const tempBoards = boards.filter((item) => item.id !== bid);

    setBoards(tempBoards);
  };
  /////////////////////////////////////////////

  const handleDragEnd = (cid, bid) => {
    let s_bIndex, s_cIndex, t_bIndex, t_cIndex;

    s_bIndex = boards.findIndex((board) => board.id === bid);
    if (s_bIndex < 0) return;

    s_cIndex = boards[s_bIndex].cards.findIndex((card) => card.id === cid);
    if (s_cIndex < 0) return;

    t_bIndex = boards.findIndex((board) => board.id === target.bid);
    if (t_bIndex < 0) return;

    if (target.cid === "_") {
      t_cIndex = 0;
    } else {
      t_cIndex = boards[t_bIndex].cards.findIndex(
        (card) => card.id === target.cid
      );
    }
    if (t_cIndex < 0) return;

    // ************************************ //
    const tempBoards = JSON.parse(JSON.stringify(boards));

    tempBoards[t_bIndex].cards.splice(
      t_cIndex,
      0,
      tempBoards[s_bIndex].cards.splice(s_cIndex, 1)[0]
    );

    setBoards(tempBoards);
  };

  const handleDragEnter = (cid, bid) => {
    setTarget({
      cid,
      bid,
    });
  };

  const updateCard = (cid, bid, card) => {
    const bIndex = boards.findIndex((item) => item.id === bid);
    if (bIndex < 0) return;

    const cIndex = boards[bIndex].cards.findIndex((item) => item.id === cid);
    if (cIndex < 0) return;

    const tempBoards = JSON.parse(JSON.stringify(boards));
    tempBoards[bIndex].cards[cIndex] = card;
    setBoards(tempBoards);
  };

  // ***********************************//

  useEffect(() => {
    localStorage.setItem("kanban", JSON.stringify(boards));
  }, [boards]);
  // ***********************************//

  return (
    <div className="app">
      <div className="app_navbar">
        <h1>Kanban Board</h1>
      </div>

      <div className="app_outer">
        <div className="app_boards ">
          {boards.map((item) => {
            return (
              <Board
                key={item.id}
                board={item}
                removeBoard={removeBoard}
                addCard={addCard}
                removeCard={removeCard}
                handleDragEnd={handleDragEnd}
                handleDragEnter={handleDragEnter}
                updateCard={updateCard}
              />
            );
          })}

          <div className="app_boards_board">
            <Editable
              displayClass="app_boards_board_add"
              text="Add board"
              placeholder="Enter board title"
              onSubmit={(value) => addBoard(value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
