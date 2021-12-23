const React = require("react");
const Default = require("../../layouts/default");
const Def = require("../../layouts/default");
// views/layouts/default.jsx
function show({bread}) {
  console.log(bread.name)
    return(
      <Default>
        <h2>Show Page</h2>
      </Default>
    )
}

module.exports = show;
