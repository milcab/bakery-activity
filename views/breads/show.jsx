const React = require("react");
const Default = require("../layouts/default");

function Index({ bread }) {
  return (
    <Default>
      <main>
        <div className="row p-4">
          <div className="col-sm-12 col-md-6">
            <img src={bread.image} alt={bread.name} className="img-fluid" />
          </div>
          <div className="col-sm-12 col-md-6">
            <div className="row p-2">
              <form
                className="col-sm-3"
                method="POST"
                action={`/breads/${bread.id}?_method=DELETE`}
              >
                <button type="submit" className="btn btn-danger btn-block">
                  Delete
                </button>
              </form>

              <div className="col-sm-3">
                <a
                  href={`/breads/${bread.id}/edit`}
                  className="btn btn-secondary btn-block"
                >
                  Edit
                </a>
              </div>
            </div>
            <div className="p-2">
              <h1>{bread.name}</h1>
              <p>Has Glutten: {bread.hasGluten ? "YES" : "NO"}</p>
              <p>this is the best Bread description there is!</p>
            </div>
          </div>
        </div>
      </main>
    </Default>
  );
}

module.exports = Index;
