const React = require("react");
const Default = require("./layouts/Default");

function Index({ title }) {
  return (
    <Default title={title}>
      <h2>Home Page</h2>
    </Default>
  );
}

module.exports = Index;
