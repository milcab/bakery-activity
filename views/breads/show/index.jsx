const React = require("react");
const Default = require("../../layouts/default");

function Index({ bread, index }) {
  return (
    <Default>
      <div>
        <h2>{bread.name}</h2>
        <img src={bread.image} alt={bread.name} />

        <form action={`/breads/${index}?_method=DELETE`} method="POST">
          <input type="submit" value="DELETE" />
        </form>
      </div>
    </Default>
  );
}

module.exports = Index;
