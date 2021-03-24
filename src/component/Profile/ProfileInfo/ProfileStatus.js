import React, {Component} from 'react';

class ProfileStatus extends Component {
  state = {
    editMode: false,
    status: this.props.status
  }

  activeteMode = () => {
    this.setState({
      editMode: true
    })
  };

  deactiveteMode = () => {
    this.setState({
      editMode: false
    });
    this.props.updateStatus(this.state.status)
  };

  onStatusChange = (e) => {
    this.setState({
      status: e.currentTarget.value
    });
  }
componentDidUpdate(prevProps, prevState, snapshot) {
  if (prevProps.status !== this.props.status){
    this.setState({
      status: this.props.status
    })
  }
  }

  render() {
    return (
      <div>
        {!this.state.editMode &&
          <div>
            <span onDoubleClick={this.activeteMode}>
              {this.props.status || "----"}
            </span>
          </div>
        }
         {this.state.editMode &&
          <div>
            <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactiveteMode} value={this.state.status}/>
          </div>
        }
      </div>
    );
  }
}

  export default ProfileStatus;
