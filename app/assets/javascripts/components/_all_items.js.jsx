var AllItems = React.createClass({
  handleDelete(id) {
    this.props.handleDelete(id);
  },
  handleEdit(item) {
    this.props.handleEdit(item);
  },
  render() {
    var items = this.props.items.map((item) => {
      return (
        <div key={ item.id }>
          <Item item={item}
                handleDelete={this.handleDelete.bind(this, item.id)}
                handleEdit={this.handleEdit} />
        </div>
      )
    });
    return (
      <div>
        { items }
      </div>
    )
  }
})
