/* eslint-disable class-methods-use-this */
const { normalizeSQL, analyzeSQL } = require('@appland/models');
const EventTree = require('./eventTree');

/**
 * At TRACE level, the order of labeled function calls matters, and all function class
 * and method names are retained. SQL queries are also retained in order. HTTP
 * server and client request parameters are retained.
 */
class Canonicalize extends EventTree {
  sql(event) {
    const analyzedQuery = analyzeSQL(event.sqlQuery);
    const result = {
      kind: 'sql',
      sql: {
        normalized_query: normalizeSQL(event.sqlQuery, event.sql.database_type),
      },
    };
    if (analyzedQuery && typeof analyzedQuery === 'object') {
      result.analyzed_query = analyzedQuery;
    }
    return result;
  }

  httpClientRequest(event) {
    return {
      kind: 'http_client_request',
      route: event.route,
      parameter_names: event.message ? event.message.map((m) => m.name) : null,
      status_code: event.httpClientResponse
        ? event.httpClientResponse.status_code
        : null,
    };
  }

  httpServerRequest(event) {
    return {
      kind: 'http_server_request',
      route: event.route,
      parameter_names: event.message ? event.message.map((m) => m.name) : null,
      status_code: event.httpServerResponse
        ? event.httpServerResponse.status ||
          event.httpServerResponse.status_code
        : null,
    };
  }

  functionCall(event) {
    return {
      kind: 'function',
      function: event.codeObject.id,
      labels: [...event.codeObject.labels],
    };
  }
}

module.exports = (appmap) => new Canonicalize(appmap).execute();
