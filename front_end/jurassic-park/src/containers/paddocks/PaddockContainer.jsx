import React, {Component} from 'react';
import PaddockList from '../../components/paddocks/PaddockList';


class PaddockContainer extends Component {
  render() {
    return (
      <div className="paddock-container">
      <PaddockList paddocks={this.props.paddocks}/>
      </div>
    )
  }
}

export default PaddockContainer;
