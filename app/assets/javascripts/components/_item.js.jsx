var Item = React.createClass({
  getInitialState() {
    return { editable: false };
  },
  handleEdit() {
    if (this.state.editable) {
      let id = this.props.item.id;
      let name = this.name.value;
      let description = this.description.value;
      let item = {id: id, name: name, description: description};
      this.props.handleEdit(item);
    }
    this.setState({ editable: !this.state.editable });
  },
  render() {
    if (this.state.editable) {
      return (
        <form>
          <div className="form-group">
            <label htmlFor="nameAttribute">Title</label>
            <input type="text" className="form-control" id="nameAttribute" ref={(input) => { this.name = input }} defaultValue={this.props.item.name}></input>
          </div>
          <div className="form-group">
            <label htmlFor="bodyAttribute">Body</label>
            <textarea className="form-control" id="descriptionAttribute" ref={(input) => { this.description = input }} defaultValue={this.props.item.description}></textarea>
          </div>
          <button onClick={this.props.handleDelete}>Delete</button>
          <button onClick={this.handleEdit}>Save</button>
        </form>
      )
    } else {
      return (
        <div>
          <h3>{ this.props.item.name }</h3>
          <p>{ this.props.item.description }</p>
          <button onClick={this.props.handleDelete}>Delete</button>
          <button onClick={this.handleEdit}>Edit</button>
        </div>
      )
    }
  }
})
