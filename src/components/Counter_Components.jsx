import React, { Component } from "react";
class Counter extends Component {
  state = {
    count: this.props.value,
    // tags: ["tag1", "tag2", "tag3"],
  };

  renderTags() {
    if (this.state.length === 0) return <p>There Are No Tags</p>;
  };  
  handleIncrement = product => {
    // to use the this.state we need to do this
    console.log(product)
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <React.Fragment>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={ () => this.handleIncrement(this.product)}
          className="btn btn-secondary btn-sm">
          Increment
        </button>
        <button onClick={() => this.props.onDelete(this.props.id)} className="btn btn-danger btn-sm m-2">Delete</button>


        {/* <ul>
          {this.state.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul> */}
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count == 0 ? "Zero" : count;
  }
}

export default Counter;
