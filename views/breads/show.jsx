const React = require("react");
const Default = require("../layouts/default");

function Index({ bread, index }) {
  return (
    <Default>
      <main>
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <img src={bread.image} alt={bread.name} className="img-fluid" />
          </div>
          <div className="col-sm-12 col-md-6">
            <form method="POST" action={`/breads/${index}?_method=DELETE`}>
              <button type="submit" className="btn btn-danger">
                Delete
              </button>
            </form>
            <h1>{bread.name}</h1>
            <p>Has Glutten: {bread.hasGluten ? "YESSS" : "NO"}</p>
            <p>this is the best Bread description there is!</p>
          </div>
        </div>
      </main>
    </Default>
  );
}

module.exports = Index;
