import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Nav from "./Nav";
import Employees from "./Employees";
import GroupedTeamMembers from "./GroupedTeamMembers";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NotFound from "./NotFound";

export default function App() {
  const [emps, setEmps] = useState(
    JSON.parse(localStorage.getItem("empslist")) || [
      {
        id: 1,
        fullName: "Bob Jones",
        designation: "JavaScript Developer",
        gender: "male",
        teamName: "TeamA",
      },
      {
        id: 2,
        fullName: "Jill Bailey",
        designation: "Node Developer",
        gender: "female",
        teamName: "TeamA",
      },
      {
        id: 3,
        fullName: "Gail Shepherd",
        designation: "Java Developer",
        gender: "female",
        teamName: "TeamA",
      },
      {
        id: 4,
        fullName: "Sam Reynolds",
        designation: "React Developer",
        gender: "male",
        teamName: "TeamB",
      },
      {
        id: 5,
        fullName: "David Henry",
        designation: "DotNet Developer",
        gender: "male",
        teamName: "TeamB",
      },
      {
        id: 6,
        fullName: "Sarah Blake",
        designation: "SQL Server DBA",
        gender: "female",
        teamName: "TeamB",
      },
      {
        id: 7,
        fullName: "James Bennet",
        designation: "Angular Developer",
        gender: "male",
        teamName: "TeamC",
      },
      {
        id: 8,
        fullName: "Jessica Faye",
        designation: "API Developer",
        gender: "female",
        teamName: "TeamC",
      },
      {
        id: 9,
        fullName: "Lita Stone",
        designation: "C++ Developer",
        gender: "female",
        teamName: "TeamC",
      },
      {
        id: 10,
        fullName: "Daniel Young",
        designation: "Python Developer",
        gender: "male",
        teamName: "TeamD",
      },
      {
        id: 11,
        fullName: "Adrian Jacobs",
        designation: "Vue Developer",
        gender: "male",
        teamName: "TeamD",
      },
      {
        id: 12,
        fullName: "Devin Monroe",
        designation: "Graphic Designer",
        gender: "male",
        teamName: "TeamD",
      },
    ]
  );
  const [selectedTeam, setTeam] = useState(
    localStorage.getItem("selectedTeam") || "TeamA"
  );

  useEffect(() => {
    localStorage.setItem("empslist", JSON.stringify(emps));
  }, [emps]);
  useEffect(() => {
    localStorage.setItem("selectedTeam", JSON.stringify(selectedTeam));
  }, [emps]);

  function handleTeamSelect(event) {
    setTeam(event.target.value);
  }
  function handleCardClick(event) {
    const TransformedEmplist = emps.map((emp) =>
      emp.id === parseInt(event.currentTarget.id)
        ? emp.teamName === selectedTeam
          ? { ...emp, teamName: "" }
          : { ...emp, teamName: selectedTeam }
        : emp
    );
    setEmps(TransformedEmplist);
  }

  return (
    <Router>
      <Nav />
      <Header
        teamMembercount={
          emps.filter((emp) => emp.teamName === selectedTeam).length
        }
        selectedTeam={selectedTeam}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Employees
              emps={emps}
              selectedTeam={selectedTeam}
              handleCardClick={handleCardClick}
              handleTeamSelect={handleTeamSelect}
            />
          }
        ></Route>
        <Route
          path="/GroupedTeamMembers"
          element={
            <GroupedTeamMembers
              emps={emps}
              selectedTeam={selectedTeam}
              setTeam={setTeam}
            />
          }
        ></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>

      <Footer />
    </Router>
  );
}
