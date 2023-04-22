import React from "react";
import { useState } from "react";

const GroupedTeamMembers = ({ emps, selectedTeam, setTeam }) => {
  const [groupedEmps, setGroups] = useState(groupTeamMembers());
  // console.log(selectedTeam === "TeamA");
  function groupTeamMembers() {
    var teams = [];
    var teamAMems = emps.filter((emp) => emp.teamName === "TeamA");
    var teamA = {
      team: "TeamA",
      members: teamAMems,
      collapsed: selectedTeam === "TeamA" ? false : true,
    };
    teams.push(teamA);
    var teamBMems = emps.filter((emp) => emp.teamName === "TeamB");
    var teamB = {
      team: "TeamB",
      members: teamBMems,
      collapsed: selectedTeam === "TeamB" ? false : true,
    };
    teams.push(teamB);
    var teamCMems = emps.filter((emp) => emp.teamName === "TeamC");
    var teamC = {
      team: "TeamC",
      members: teamCMems,
      collapsed: selectedTeam === "TeamC" ? false : true,
    };
    teams.push(teamC);
    var teamDMems = emps.filter((emp) => emp.teamName === "TeamD");
    var teamD = {
      team: "TeamD",
      members: teamDMems,
      collapsed: selectedTeam === "TeamD" ? false : true,
    };
    teams.push(teamD);
    return teams;
  }

  function handleTeamClick(event) {
    var groupedData = groupedEmps.map((empteam) =>
      empteam.team === event.currentTarget.id
        ? { ...empteam, collapsed: !empteam.collapsed }
        : empteam
    );
    setGroups(groupedData);
    setTeam(event.currentTarget.id);
  }

  return (
    <div className="container">
      {groupedEmps.map((item) => {
        return (
          <div
            key={item.team}
            className="card mt-2"
            style={{ cursor: "pointer" }}
          >
            <h4
              id={item.team}
              className="card-header text-secondary bg-white"
              onClick={handleTeamClick}
            >
              Team Name : {item.team}
            </h4>
            <div
              id={"collapse_" + item.team}
              className={item.collapsed === true ? "collapse" : ""}
            >
              <hr />
              {item.members.map((member) => {
                return (
                  <div className="mt-2">
                    <h5 className="card-title mt-2">
                      <span className="text-dark">
                        Full Name: {member.fullName}
                      </span>
                    </h5>
                    <p>Designation: {member.designation}</p>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default GroupedTeamMembers;
