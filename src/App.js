import React from 'react';
import Header from './components/Header'
import Tasks from './containers/Task'
import NewTask from './containers/NewTask'
import EditTask from './containers/EditTask'
import Employees from './containers/Employees'
import { Provider } from 'react-redux';
import store from './store';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <React.Fragment>
            <Header/>
            <div className="container">
              <Switch>
                <Route exact path="/" component={Tasks}/>
                <Route exact path="/tasks/new" component={NewTask}/>
                <Route exact path="/tasks/edit/:_id" component={EditTask}/>
                <Route exact path="/employees" component={Employees}/>
              </Switch>
            </div>
        </React.Fragment>
      </Router>
    </Provider>
  );
}

export default App;