import { FC } from 'react';
import TableRow from './TableRow';
import { Person, PersonFields } from '../types';

type Props = {
  people: Person[];
};

const Table: FC<Props> = ({ people }) => {
  return (
    <table
      data-cy="peopleTable"
      className="table is-striped is-hoverable is-narrow is-fullwidth"
    >
      <thead>
        <tr>
          {Object.values(PersonFields).map(field => (
            <th key={field}>{field}</th>
          ))}
        </tr>
      </thead>

      <tbody>
        {people.map(person => (
          <TableRow key={person.slug} person={person} />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
