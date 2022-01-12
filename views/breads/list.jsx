const React = require("react");
const Default = require("../layouts/Default");

const Items = ({ items }) => {
  console.log({
    items: items.map((item) => item.id),
  });
  return (
    <div className="container">
      <a href="/breads/new" className="btn btn-primary">
        Add a New Bread
      </a>
      <div className="row">
        {items.map((item) => {
          return (
            <div key={item.id} className="col-md-4">
              <div className="card card mb-4 shadow-sm">
                <img src={item.image} className="card-img-top" />
                <div className="card-body">
                  <a href={`/breads/show/${item.id}`}>
                    <h5 className="card-title">{item.name}</h5>
                  </a>
                  <p className="card-text">Has Gluten {item.hasGluten}</p>
                  <p className="card-text">price {item.price || "free"}</p>
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
