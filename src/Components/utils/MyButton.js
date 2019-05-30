import React from "react";
import Buttton from "@material-ui/core/Button";

import TicketIcon from "../../resources/icons/ticket.png";

const MyButton = props => {
  return (
    <Buttton
      href={props.link}
      variant="contained"
      size="small"
      style={{
        background: props.bck,
        color: props.color
      }}
    >
      <img src={TicketIcon} className="iconImage" alt="icon_button" />
      {props.text}
    </Buttton>
  );
};

export default MyButton;
