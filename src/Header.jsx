const Header = ({ selectedTeam, teamMembercount }) => {
  return (
    <header className="conttainer">
      <div className="row justify-content-center mt-3 mb-4">
        <div className="col-8">
          <h1>Team member Allocation</h1>
          <h3>
            {selectedTeam} has {teamMembercount}{" "}
            {teamMembercount === 1 ? "Member" : "Members"}
          </h3>
        </div>
      </div>
    </header>
  );
};
export default Header;
