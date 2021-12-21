const React = require("react");

function Default(html) {
  return (
    <html>
      <head>
        <title>{html.title || "default"}</title>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossorigin="anonymous"
        />
      </head>
      <body>
        <div className="container">{html.children}</div>
      </body>
    </html>
  );
}

module.exports = Default;
