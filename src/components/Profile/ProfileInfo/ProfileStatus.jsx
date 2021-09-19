import React from 'react';
import s from './ProfileInfo.module.css';

class ProfileStatus extends React.Component {

  state = {
    editMode: false,
    status: this.props.status
  }

  activateEditMode = () => {
    // Declaration of a method with an arrow function, 
    // below deactivateEditMode with passing below the context using the "bind" method
    // console.log(this.state.editMode)
    this.setState({
      editMode: true
    })
    // console.log(this.state.editMode)
  }

  deactivateEditMode() {
    this.setState({
      editMode: false
    })
    this.props.updateStatus(this.state.status)
  }
  onStatusChange = (e) => {
    this.setState({
      status: e.currentTarget.value
    })
  }

  render() {
    return (
      <div>
        {!this.state.editMode &&
          <div>
            <span onClick={this.activateEditMode} >{this.props.status || '------'}</span>
          </div>
        }
        {this.state.editMode &&
          <div>
            <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode.bind(this)}
              value={this.state.status} />
          </div>
        }
      </div>
    )
  }
}

export default ProfileStatus