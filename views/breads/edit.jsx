const React = require("react");
const Def = require("../layouts/default");

function Index({ bread }) {
  return (
    <Def>
      <main>
        <h1>Edit {bread.name}</h1>
        <form action={`/breads/${bread.id}?_method=PUT`} method="POST">
          <div className="form-group">
            <label for="breadName">Bread Name</label>
            <input
              required
              type="text"
              className="form-control"
              id="breadName"
              name="name"
              value={bread.name}
              aria-describedby="breadHelp"
              placeholder="Enter Bread Name"
            />
          </div>
          <div className="form-group">
            <label for="imageUrl">Image URL</label>
            <input
              type="url"
              className="form-control"
              id="imageUrl"
              name="image"
              value={bread.image}
              placeholder="https://bread.com/bestBread.jpg"
            />
          </div>
          <label htmlFor="baker">Baker</label>
          <select name="baker" id="baker" defaultValue={bread.baker}>
            <option value="Rachel">Rachel</option>
            <option value="Monica">Monica</option>
            <option value="Joey">Joey</option>
            <option value="Chandler">Chandler</option>
            <option value="Ross">Ross</option>
            <option value="Phoebe">Phoebe</option>
          </select>
          <div className="form-group form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="hasGluten"
              checked={bread.hasGluten}
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
