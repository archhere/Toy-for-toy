import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class ToyIndex extends React.Component {
  componentDidMount(){
    this.props.fetchToys();
  }

  render(){
    let toyPage = this.props.toys.reverse();
    return (
      <div className="prodidxouter">
        <Link to="/" className="add-product">+ Add Toy</Link>

        <div className="product-index-container">
          {toyPage.map(toy =>
            <div className = "prodidxouterli">
              <Link to={`/`} className="toy-link">
                {toy.description}
              </Link>
              <Link to={`/`} className="products-link">
                <img className = "prodidximg" src={toy.img_url} alt="Italian Trulli" />
              </Link>
            </div>
          )}
        </div>

      </div>
    );
  }
}

export default ToyIndex;
