const Footer = () => {
  var today = new Date();
  return (
    <footer className="conttainer">
      <div className="row justify-content-center mt-3 mb-4">
        <div className="col-8">
          <h5>Team member Allocation app - {today.getFullYear()}</h5>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
