import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class ToyIndex extends React.Component {
  componentDidMount(){
    this.props.fetchToys();
  }

  // render(){
  //   let toyPage = this.props.toys.reverse();
  //   return (
  //     <div className="prodidxouter">
  //
  //         {toyPage.map(toy =>
  //           <div className = "prodidxouterli">
  //             <Link to={`/`} className="toy-link">
  //               {toy.description}
  //             </Link>
  //             <Link to={`/`} className="products-link">
  //               <img className = "prodidximg" src={toy.img_url} alt="Italian Trulli" />
  //             </Link>
  //           </div>
  //         )}
  //     </div>
  //   );
  // }

  render(){
    return(


    <div className="regions-container">
       <h2 id="regions-title">Explore toys on rent</h2>
       <h3 id="regions-subtitle">Find a toy for any budget</h3>
       <ul className="regions group">
         {this.props.toys.map((toy) =>
           <button
            className="region-element"
            key={toy._id}>
            <img className="region-pic" src={toy.img_url}/>
            <span className="region-name">{toy.description}</span>
          </button>
        )}
      </ul>
    </div>
    );
  }


}

export default ToyIndex;
