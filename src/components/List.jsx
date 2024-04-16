import React, { useState } from "react";
import "./List.css";

const List = ({ data }) => {
  const [selected, setSelected] = useState(0);
  const itemsPerPage = 5;

  const startIndex = selected * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const filterData = data.slice(startIndex, endIndex);

  const handlePrev = () => {
    if(selected !== 0){
      setSelected(selected - 1);
    }
  }

  const handleNext = () => {
    if (selected !== 3){
      setSelected(selected + 1);
    }
  }

  return (
    <div className="list">
      <main>
        <header>
          <h3>Employee List</h3>
          <p>
            (Employee {startIndex} to {endIndex})
          </p>
        </header>
        <div className="card">
          {filterData.map((person) => (
            <div className="person">
              <img src={person.image} alt="" />
              <div className="desc">
                <h4>{person.name}</h4>
                <p>{person.email}</p>
                <p>{person.age} years</p>
              </div>
            </div>
          ))}
        </div>
        <div className="buttons">
          <button type="button" onClick={handlePrev}>Prev</button>
          <button type="button" onClick={handleNext}>Next</button>
        </div>
      </main>
    </div>
  );
};

export default List;
