const React = require("react");
const Def = require("../../layouts/default");
// views/layouts/default.jsx
function Index() {
  return (
    <Def>
      <main>
        <h1>Add a new bread</h1>
        <form action="new" method="POST">
          <div className="form-group">
            <label for="breadName">Place Name</label>
            <input
              required
              type="text"
              className="form-control"
              id="breadName"
              name="name"
              aria-describedby="breadHelp"
              placeholder="Enter Bread Name"
            />

            <label for="breadName">Place Picture</label>
            <input
              required
              type="text"
              className="form-control"
              id="breadName"
              name="picture"
              aria-describedby="breadHelp"
              placeholder="Enter Picture"
            />
            <label for="breadName">City</label>
            <input
              type="text"
              className="form-control"
              id="breadName"
              name="city"
              aria-describedby="breadHelp"
              placeholder="Enter City"
            />
            <label for="breadName">State</label>
            <input
              type="text"
              className="form-control"
              id="breadName"
              name="state"
              aria-describedby="breadHelp"
              placeholder="Enter State Name"
            />
            <label for="breadName">Cuisines</label>
            <input
              type="text"
              className="form-control"
              id="breadName"
              name="cuicines"
              aria-describedby="breadHelp"
              placeholder="Cuisines Name :-)"
            />
            <small id="breadHelp" className="form-text text-muted">
              We love bread!
            </small>
          </div>
          <div className="form-group">
            <label for="imageUrl">Image URL</label>
            <input
              type="url"
              className="form-control"
              id="imageUrl"
              name="pic"
              placeholder="https://bread.com/bestBread.jpg"
            />
          </div>
          <div className="form-group form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="hasGluten"
              name="hasGluten"
            />
            <label className="form-check-label" for="hasGluten">
              Has Gluten
            </label>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </main>
    </Def>
  );
}

module.exports = Index;
