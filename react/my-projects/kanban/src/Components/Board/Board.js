import React, { useState } from "react";
import { MoreHorizontal } from "react-feather";
import "./Board.css";
import Card from "../Card/Card";
import Editable from "../Editable/Editable";
import Dropdown from "../Dropdown/Dropdown";
import { getUniqueKey } from "../../utils/uuid";

const Board = (props) => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div
      className="board "
      onDragEnter={
        props.board.cards.length === 0
          ? () => props.handleDragEnter("_", props.board.id)
          : null
      }
      // onDragEnd={() => props.handleDragEnd(0, props.board.id)}
    >
      <div className="board_top">
        <p className="board_top_title">
          {props.board?.title}
          <span>{`${props.board?.cards?.length}`}</span>
        </p>
        <div
          onClick={(eve) => {
            eve.stopPropagation();
            setShowDropdown(true);
          }}
          className="board_top_more"
        >
          <MoreHorizontal />
          {showDropdown && (
            <Dropdown
              onClose={() => {
                setShowDropdown(false);
              }}
            >
              <div className="board_dropdown">
                <p onClick={() => props.removeBoard(props.board?.id)}>
                  Delete Board
                </p>
              </div>
            </Dropdown>
          )}
        </div>
      </div>
      <div className="board_cards custom-scroll">
        {props.board?.cards?.map((item) => (
          <Card
            key={item.id}
            card={item}
            removeCard={props.removeCard}
            boardId={props.board?.id}
            handleDragEnd={props.handleDragEnd}
            handleDragEnter={props.handleDragEnter}
            updateCard={props.updateCard}
          />
        ))}
        <Editable
          displayClass="board_cards_add"
          text="Add Card"
          placeholder="Enter Card Title"
          onSubmit={(value) => props.addCard(value, props.board?.id)}
        />
      </div>
    </div>
  );
};

export default Board;
