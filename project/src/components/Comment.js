import React from 'react';

class Comment extends React.Component {
  render() {
    return (
      <p>{ this.props.text }</p>
    );
  }
}

export default Comment;
