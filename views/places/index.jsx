const React = require("react");
const Default = require("../layouts/default");

function Index({ places }) {
  const placesFormatted = places.map((place) => (
    <div>
      <h2>{place.name}</h2>
      <img src={place.pic} alt={place.name} />
    </div>
  ));

  return (
    <Default>
      <h1>Places Page</h1>

      {placesFormatted}
    </Default>
  );
}

module.exports = Index;
