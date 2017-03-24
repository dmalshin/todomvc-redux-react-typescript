import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import * as React from 'react';

import {
  Search,
  Header,
  MainSection,
  model,
  addTodo,
  editTodo,
  clearCompleted,
  completeAll,
  completeTodo,
  deleteTodo
} from '../../todos';

interface AppProps {
  todos: model.Todo[];
  dispatch: Dispatch<{}>;
}
interface AppState {
  searchText: string
}

class App extends React.Component<AppProps, AppState> {
  constructor(props, context) {
    super(props, context);
    this.state = { searchText: '' };
  }

  handleSearchFilter(searchText: string): void {
    this.setState({ searchText });
  }

  searchFilterTodos(todos: model.Todo[], searchText:string): model.Todo[] {
    const searchRegExp = new RegExp(searchText, 'i');
    return todos.filter(todo => todo.text.match(searchRegExp));
  }

  render() {
    const { todos, dispatch } = this.props;
    const searchText = this.state.searchText;

    const filteredTodos = searchText ? this.searchFilterTodos(todos, searchText) : todos;

    return (
      <div className="todoapp">
        <Search
          searchText={this.state.searchText}
          serchFilter={this.handleSearchFilter.bind(this)}
        />
        <Header addTodo={(text: string) => dispatch(addTodo(text))} />
        <MainSection
            todos={filteredTodos}
            editTodo={(t,s) => dispatch(editTodo(t, s))}
            deleteTodo={(t: model.Todo) => dispatch(deleteTodo(t))}
            completeTodo={(t: model.Todo) => dispatch(completeTodo(t))}
            clearCompleted={() => dispatch(clearCompleted())}
            completeAll={() => dispatch(completeAll())}/>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  todos: state.todos
});

export default connect(mapStateToProps)(App);
