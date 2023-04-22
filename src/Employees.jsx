import React from "react";

import female from "./img/female_icon.png";
import male from "./img/male_icon.png";
const Employees = ({
  emps,
  selectedTeam,
  handleCardClick,
  handleTeamSelect,
}) => {
  return (
    <main className="container">
      <div className="row justify-content-center mt-3 mb-3">
        <div className="col-8">
          <select
            className="form-select form-select-lg"
            value={selectedTeam}
            onChange={handleTeamSelect}
          >
            <option value="TeamA">TeamA</option>
            <option value="TeamB">TeamB</option>
            <option value="TeamC">TeamC</option>
            <option value="TeamD">TeamD</option>
          </select>
        </div>
      </div>
      <div className="row justify-content-center mt-3 mb-3">
        <div className="col-8">
          <div className="card-collection">
            {emps.map((e) => {
              return (
                <div
                  key={e.id}
                  id={e.id}
                  className={
                    e.teamName === selectedTeam
                      ? "card m-2 standout"
                      : "card m-2"
                  }
                  style={{ cursor: "pointer" }}
                  onClick={handleCardClick}
                >
                  {e.gender === "male" ? (
                    <img src={male} alt="emp icon" className="card-img-top" />
                  ) : (
                    <img src={female} alt="emp icon" className="card-img-top" />
                  )}

                  <div className="card-body">
                    <h5 className="card-title">
                      <b>Name:</b> {e.fullName}
                    </h5>
                    <p className="card-text">
                      <b>Designation:</b> {e.designation}{" "}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Employees;
