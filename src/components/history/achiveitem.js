import React from 'react';
import If from '../if/if.js';

class ArchiveItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: '',
      method: '',
      body: '',
      visible: true,
    };
  } 

  display = (event) => {
    event.preventDefault();
    this.setState({ visible: !this.state.visible });
  }

  render() {
    return (
     <div>
    
     </div> 
    )
  }

}

export default ArchiveItem;