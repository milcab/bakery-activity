const React = require("react");
const Default = require("../layouts/default");

const Items = ({ items }) => {
  return (
    <div className="container">
      <div className="row">
        {items.map((items, index) => {
          return (
            <div key={index} className="col-md-4">
              <div className="card card mb-4 shadow-sm">
                <img src={items.pic} className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">{items.name}</h5>
                  <p className="card-text">{items.city}</p>
                  <p className="card-text">{items.state}</p>
                  <p className="card-text">{items.cuisines}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

function Index({ title = "places", places = [] }) {
  return (
    <Default title={title}>
      <h1>Places Page</h1>

      <Items items={places} />
    </Default>
  );
}

module.exports = Index;
