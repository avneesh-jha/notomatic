import { TextCard } from "../../components/TextCard/TextCard";

export function NoteBrowse() {
  return (
    <div>
      <TextCard
        title="Super Note"
        subtitle="14/04/2023"
        content="the best content in the market"
        onClick={() => {
          alert("on click event");
        }}
        onClickTrash={() => alert("on ClickTrash event")}
      />
    </div>
  );
}
