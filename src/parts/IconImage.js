import React from "react";
import Button from "../elements/Button";
import Icon from "../assets/icon/pnm.png";

export default function IconImage() {
  return (
    <Button className="brand-text-icon" href="#" type="link">
      <img src={Icon} style={{ height: 10 }} />
    </Button>
  );
}
