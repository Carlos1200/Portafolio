import * as React from "react";

interface Props {
  onClickProject: any;
}

export const Topbar = ({ onClickProject }: Props) => {
  return (
    <div className="topBarStyles">
      <div className="topBarDivStyles">
        <nav>
          <a className="topBarTitleStyles" onClick={onClickProject}>
            Portfolio
          </a>
          <a className="topBarTitleStyles" href="">
            Contact
          </a>
        </nav>
      </div>
    </div>
  );
};
