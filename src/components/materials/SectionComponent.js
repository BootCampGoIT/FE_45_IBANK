import React from "react";
import List from "./List";

const SectionComponent = ({
  section,
  setVisibility,
  addItem,
  visibility,
  items,
}) => {
  return (
    <section>
      <button type='button' onClick={setVisibility} name={section}>
        {section[0].toUpperCase() + section.slice(1)}
      </button>
      {visibility && (
        <>
          <List arr={items} />
          <button type='button' onClick={addItem} name={section}>
            {"Add new" + " " + section.slice(0, section.length - 1)}
          </button>
        </>
      )}
    </section>
  );
};

export default SectionComponent;
