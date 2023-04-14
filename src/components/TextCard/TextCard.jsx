import { useState } from "react";
import { Trash } from "react-bootstrap-icons";

export function TextCard({ title, subtitle, content, onClick, onClickTrash }) {
  const [isCardHovered, setIsCardHovered] = useState(false);
  const [isTrashHovered, setIsTrashHovered] = useState(false);

  return (
    <div
      class="card"
      style={{ borderColor: isCardHovered ? "blue" : "transparent" }}
      onMouseEnter={() => setIsCardHovered(true)}
      onMouseLeave={() => setIsCardHovered(false)}
    >
      <div class="card-body">
        <div>
          <h5 class="card-title">{title}</h5>
          <Trash
            size={20}
            style={{ color: isTrashHovered ? "red" : "blue" }}
            onMouseEnter={() => setIsTrashHovered(true)}
            onMouseLeave={() => setIsTrashHovered(false)}
          />
        </div>

        <h6 class="card-subtitle mb-2 text-body-secondary">{subtitle}</h6>
        <p class="card-text">{content}</p>
      </div>
    </div>
  );
}
