// @ts-ignore
import { Event } from '@appland/models';
import Assertion from '../assertion';

export default function (forbiddenLabel = 'mvc.view') {
  return Assertion.assert(
    'sql_query',
    (e: Event) =>
      e
        .ancestors()
        .every((e: Event) => !e.codeObject.labels.has(forbiddenLabel)),
    (assertion: Assertion): void => {
      assertion.description = `SQL query from ${forbiddenLabel}`;
    }
  );
}
