import { useState } from "react";
import { Trash } from "react-bootstrap-icons";

export function TextCard({ title, subtitle, content, onClick, onClickTrash }) {
  const [isCardHovered, setIsCardHovered] = useState(false);
  const [isTrashHovered, setIsTrashHovered] = useState(false);
  function onClickTrash_(e) {
    onClickTrash();
    e.stopPropagation();
  }

  return (
    <div
      onClick={onClick}
      className="card"
      style={{ borderColor: isCardHovered ? "blue" : "transparent" }}
      onMouseEnter={() => setIsCardHovered(true)}
      onMouseLeave={() => setIsCardHovered(false)}
    >
      <div className="card-body">
        <div>
          <h5 className="card-title">{title}</h5>
          <Trash
            onClick={onClickTrash_}
            size={20}
            style={{ color: isTrashHovered ? "red" : "blue" }}
            onMouseEnter={() => setIsTrashHovered(true)}
            onMouseLeave={() => setIsTrashHovered(false)}
          />
        </div>

        <h6 className="card-subtitle mb-2 text-body-secondary">{subtitle}</h6>
        <p className="card-text">{content}</p>
      </div>
    </div>
  );
}
