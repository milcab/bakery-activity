const React = require('react')
const breadsRouter = require('../controllers/breads_controller')
const Default = require('./layouts/Default')

function Index ({breads}) {
    return (
      <Default>
        <h2>Index Page</h2>
        {/*<p>I have {breads[0].name}bread!</p>*/}
        <ul>{
            breads.map((breads, index) => {
                return(<li key={index}>
                    <a href = {`/breads/${index}`}>
                    {breads.name}
                    </a>
                </li>)
            })
            
            }</ul>
      </Default>
    )
}

module.exports = Index