import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as solid } from "@fortawesome/free-solid-svg-icons";
import { faHeart as regular } from "@fortawesome/free-regular-svg-icons";
class Like extends Component {
  state = {};
  render() {
    let heart = 0;
    if (!this.props.liked) {
      heart = <FontAwesomeIcon icon={regular} />;
    } else {
      heart = <FontAwesomeIcon icon={solid} />;
    }
    return (
      <i style={{ cursor: "pointer" }} onClick={this.props.onClickforLike}>
        {heart}
      </i>
    );
  }
}

export default Like;
