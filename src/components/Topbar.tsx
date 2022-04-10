import * as React from "react";

interface Props {
  onClickProject: () => void;
  onClickContact: () => void;
}

export const Topbar = ({ onClickProject, onClickContact }: Props) => {
  return (
    <div className="topBarStyles">
      <div className="topBarDivStyles">
        <nav>
          <a className="topBarTitleStyles" onClick={onClickProject}>
            Portfolio
          </a>
          <a className="topBarTitleStyles" onClick={onClickContact}>
            Contact
          </a>
        </nav>
      </div>
    </div>
  );
};
