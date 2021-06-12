const { writeFileSync } = require("fs");
const Semver = require("semver");
const { validate } = require("../lib/main.js");
const { getVersionMapping } = require("../lib/version.js");

for (let version of getVersionMapping().keys()) {
  if (version.endsWith(".0")) {
    version = version.substring(0, version.length - 2);
  }
  const data = {
    version,
    metadata: {
      client: {
        name: "appmap-validate",
        url: "https://github.com/applandinc/appmap-validate",
      },
      recorder: {
        name: "appmap-validate",
      },
    },
    classMap: [
      {
        type: "package",
        name: "directory",
        children: [
          {
            type: "package",
            name: "filename.js",
            children: [
              {
                type: "class",
                name: "C",
                children: [
                  {
                    type: "function",
                    name: "f",
                    location: "directory/filename.js:123",
                    static: true,
                    source: "function f () {}",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
    events: [
      // function //
      {
        event: "call",
        id: 1,
        thread_id: 456,
        path: "directory/filename.js",
        lineno: 123,
        static: true,
        method_id: "f",
        defined_class: "C",
        receiver: {
          name: "this",
          object_id: 789,
          class: "string",
          value: "foo",
        },
        parameters: [
          {
            name: "x",
            object_id: 789,
            class: "string",
            value: "foo",
          },
        ],
      },
      {
        event: "return",
        id: 2,
        thread_id: 456,
        parent_id: 1,
        return_value: null,
      },
      // sql //
      {
        event: "call",
        id: 3,
        thread_id: 456,
        sql_query: {
          database_type: "sqlite3",
          sql: "SELECT 123 as SOLUTION;",
        },
      },
      {
        event: "return",
        id: 4,
        thread_id: 456,
        parent_id: 3,
      },
      // http-server //
      {
        event: "call",
        id: 5,
        thread_id: 456,
        http_server_request: {
          request_method: "GET",
          path_info: "/foo",
        },
        message: [],
      },
      {
        event: "return",
        id: 6,
        thread_id: 456,
        parent_id: 5,
        http_server_response: {
          status_code: 200,
        },
      },
      // http-client //
      ...(Semver.satisfies(version, ">= 1.5.0")
        ? [
            {
              event: "call",
              id: 7,
              thread_id: 456,
              http_client_request: {
                request_method: "GET",
                url: "/foo",
              },
              message: [],
            },
            {
              event: "return",
              id: 8,
              thread_id: 456,
              parent_id: 7,
              http_client_response: {
                status_code: 200,
              },
            },
          ]
        : []),
    ],
  };
  const path = `${__dirname}/../tmp/test@${version.replace(/\./u, "-")}.appmap.json`;
  writeFileSync(path, JSON.stringify(data, null, 2), "utf8");
  validate({ path });
}
