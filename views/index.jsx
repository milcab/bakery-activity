const React = require("react");
const Default = require("./layouts/Default");

const { Breads } = require("./breads/list");

function Index({ breads, bakers, title }) {
  return (
    <Default title={title}>
      <h2>Index Page</h2>
      <h3>Bakers</h3>
      <ul>
        {bakers.map((baker) => {
          return (
            <li key={baker.id}>
              <a href={`/bakers/${baker.id}`}>{baker.name}</a>
            </li>
          );
        })}
      </ul>
      <h3>Breads</h3>
      <Breads items={breads} />
    </Default>
  );
}

module.exports = Index;
