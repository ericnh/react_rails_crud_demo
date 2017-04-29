var Body = React.createClass({
  getInitialState() {
    return { items: [] };
  },
  componentDidMount() {
    $.getJSON('/api/v1/items.json', (response) => { this.setState({items: response}) });
  },
  handleSubmit(item){
    const newState = this.state.items.concat(item);
    this.setState({items: newState});
  },
  handleDelete(id) {
    $.ajax({
      url: 'api/v1/items/' + id,
      type: 'DELETE',
      success: () => {
        this.removeItemClient(id);
      }
    });
  },
  removeItemClient(id) {
    var newItems = this.state.items.filter((item) => {
      return item.id != id;
    });
    this.setState({items: newItems});
  },
  handleEdit(item) {
    $.ajax({
      url: `api/v1/items/${item.id}`,
      type: 'PUT',
      data: { item: item },
      success: () => {
        this.updateItems(item);
      }
    });
  },
  updateItems(updatedItem) {
    const newItems = this.state.items.map((item) => {
      return item.id === updatedItem.id ? updatedItem : item;
    });
    this.setState({items: newItems});
  },
  render() {
    const items = this.state.items;
    return (
      <div className="container">
        <AllItems items={ items } handleDelete={ this.handleDelete } handleEdit={ this.handleEdit } />
        <NewItems handleSubmit={this.handleSubmit} />
      </div>
    )
  }
})
