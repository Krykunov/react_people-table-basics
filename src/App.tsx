import { Loader } from './components/Loader';

import './App.scss';
import Table from './components/Table';
import { usePeople } from './hooks/usePeople';

export const App = () => {
  const { people, isPeopleLoading, isPeopleError } = usePeople();
  const isPeople = people.length > 0;
  const isPeopleShown = isPeople && !isPeopleError && !isPeopleLoading;

  const isEmptyMessageShown = !isPeople && !isPeopleError && !isPeopleLoading;

  return (
    <div data-cy="app">
      <nav
        data-cy="nav"
        className="navbar is-fixed-top has-shadow"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <a className="navbar-item" href="#/">
              Home
            </a>

            <a
              className="navbar-item has-background-grey-lighter"
              href="#/people"
            >
              People
            </a>
          </div>
        </div>
      </nav>

      <main className="section">
        <div className="container">
          <h1 className="title">Home Page</h1>
          <h1 className="title">People Page</h1>
          <h1 className="title">Page not found</h1>

          <div className="block">
            <div className="box table-container">
              {isPeopleLoading && <Loader />}

              {isPeopleError && (
                <p data-cy="peopleLoadingError" className="has-text-danger">
                  Something went wrong
                </p>
              )}

              {isEmptyMessageShown && (
                <p data-cy="noPeopleMessage">
                  There are no people on the server
                </p>
              )}

              {isPeopleShown && <Table people={people} />}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
