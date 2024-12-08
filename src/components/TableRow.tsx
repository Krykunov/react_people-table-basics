import React from 'react';
import { Person } from '../types';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

type Props = {
  person: Person;
};

const TableRow: React.FC<Props> = ({ person }) => {
  return (
    <tr
      data-cy="person"
      className={classNames({
        'has-background-warning': false,
      })}
    >
      <td>
        <Link
          to={`/people/${person.slug}`}
          className={classNames({
            'has-text-danger': person.sex === 'f',
          })}
        >
          {person.name}
        </Link>
      </td>

      <td>{person.sex}</td>
      <td>{person.born}</td>
      <td>{person.died}</td>
      <td>
        {person.mother ? (
          <Link
            to={`/people/${person.mother.slug}`}
            className="has-text-danger"
          >
            {person.mother.name}
          </Link>
        ) : (
          person.motherName
        )}
      </td>

      <td>
        {person.father ? (
          <Link to={`/people/${person.father.slug}`}>{person.father.name}</Link>
        ) : (
          person.fatherName
        )}
      </td>
    </tr>
  );
};

export default TableRow;
