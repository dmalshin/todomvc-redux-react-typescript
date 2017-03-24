import * as React from 'react';
import { Todo } from '../model';

import './Search.css';

interface SearchProps {
  searchText: string;
  serchFilter: (searchText:string) => void;
};

class Search extends React.Component<SearchProps, void> {
  constructor(props, context) {
    super(props, context);
  }

  handleChange(e) {
    const searchText: string = e.target.value.trim();
    this.props.serchFilter(e.target.value);
  }

  render() {
    return (
      <section className="search">
        <div className="search-icon"></div>
        <input
          className="new-todo"
          type="text"
          placeholder="Filter todos"
          autoFocus={true}
          onChange={this.handleChange.bind(this)}
        />
      </section>
    );
  }
}

export default Search;
