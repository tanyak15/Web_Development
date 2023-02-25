import React, { useState } from "react";
import { Clock, CheckSquare, MoreHorizontal } from "react-feather";
import { getUniqueKey } from "../../utils/uuid";
import Chip from "../Chip/Chip";
import Dropdown from "../Dropdown/Dropdown";

import "./Card.css";
import CardInfo from "./CardInfo/CardInfo";

const Card = (props) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showModal, setShowModal] = useState(false);
  // ***************************************** //
  return (
    <>
      {showModal && (
        <CardInfo
          card={props.card}
          updateCard={props.updateCard}
          boardId={props.boardId}
          onClose={() => {
            setShowModal(false);
          }}
        />
      )}
      <div
        className="card"
        draggable
        onDragEnd={() => props.handleDragEnd(props.card?.id, props.boardId)}
        onDragEnter={() => props.handleDragEnter(props.card?.id, props.boardId)}
        onClick={() => setShowModal(true)}
      >
        <div className="card_top">
          <div className="card_top_lables">
            {props.card?.labels?.map((label) => {
              return (
                <Chip
                  key={getUniqueKey("Chip")}
                  text={label.text}
                  color={label.color}
                />
              );
            })}
          </div>

          <div
            className="card_top_more"
            onClick={(eve) => {
              eve.stopPropagation();
              setShowDropdown(true);
            }}
          >
            <MoreHorizontal />
            {showDropdown && (
              <Dropdown onClose={() => setShowDropdown(false)}>
                <div className="card_dropdown">
                  <p
                    onClick={() => {
                      props.removeCard(props.card?.id, props.boardId);
                    }}
                  >
                    Delete Card
                  </p>
                </div>
              </Dropdown>
            )}
          </div>
        </div>
        <div className="card_title">{props.card?.title}</div>
        <div className="card_footer">
          <p>
            <Clock />
            {props.card?.date}
          </p>
          {props.card?.tasks?.length > 0 && (
            <p>
              <CheckSquare />
              {props.card?.tasks?.filter((item) => item.completed).length}/
              {props.card?.tasks?.length}
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default Card;
