const React = require("react");
const Default = require("./layouts/Default");

function Show({ baker }) {
  console.log({ breads: baker.breads });
  return (
    <Default>
      <h3>{baker.name}</h3>
      <p>
        {baker.name} has been baking with us since{" "}
        {baker.startDate.getFullYear()}
      </p>
      <p>
        About {baker.name}: {baker.bio}
      </p>
      <h3>Breads {baker.name} has baked</h3>
      <ul>
        {baker.breads.map((bread) => {
          return <li key={bread.id}>{bread.name}</li>;
        })}
      </ul>
    </Default>
  );
}

module.exports = Show;
