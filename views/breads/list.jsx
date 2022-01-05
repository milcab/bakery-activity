const React = require("react");
const Default = require("../layouts/Default");

const Items = ({ items }) => {
  return (
    <div className="container">
      <div className="row">
        {items.map((items, index) => {
          return (
            <div key={index} className="col-md-4">
              <div className="card card mb-4 shadow-sm">
                <img src={items.image} className="card-img-top" />
                <div className="card-body">
                  <a href={`/breads/${index}`}>
                    <h5 className="card-title">{items.name}</h5>
                  </a>
                  <p className="card-text">Has Gluten {items.hasGluten}</p>
                  <p className="card-text">price {items.price || "free"}</p>
                  <a href="#" className="btn btn-primary">
                    add To cart
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

function Index({ title, breads = [] }) {
  return (
    <Default title={title}>
      <h2>Index Page</h2>

      <Items items={breads} />
    </Default>
  );
}

module.exports = Index;
