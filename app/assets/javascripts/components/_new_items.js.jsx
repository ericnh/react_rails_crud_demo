var NewItems = React.createClass({
  handleSubmit(e) {
    e.preventDefault();
    var name = this.name.value;
    var description = this.description.value;
    console.log("Name: " + name + " Description: " + description);
    $.ajax({
      url: '/api/v1/items',
      type: 'POST',
      data: { item: { name: name, description: description } },
      success: (response) => {
        this.props.handleSubmit(response);
      }
    });
  },
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h3>Create New Item</h3>
        <input ref={(input) => { this.name = input }} placeholder="Enter the name of the item"></input>
        <input ref={(input) => { this.description = input }} placeholder="Enter a description"></input>
        <button type="submit">Submit</button>
      </form>
    )
  }
})
