define({ "api": [
  {
    "type": "get",
    "url": "countries/:code",
    "title": "Get",
    "group": "Countries",
    "version": "2.13.0",
    "name": "get",
    "description": "<p>Get one country/state information.</p> ",
    "permission": [
      {
        "name": "everyone",
        "title": "Everyone access",
        "description": "<p>Authenticated and Unauthenticated users can access / perform this operation</p> "
      }
    ],
    "parameter": {
      "fields": {
        "Url Parameter": [
          {
            "group": "Url Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "code",
            "description": "<p>Code of the country. <em>All capitals case-sensitive</em></p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success": [
          {
            "group": "Success",
            "type": "<p>String</p> ",
            "allowedValues": [
              "\"ISO 3166-1 alpha-2\""
            ],
            "optional": false,
            "field": "code",
            "description": "<p>Country code.</p> "
          },
          {
            "group": "Success",
            "type": "<p>Lstring</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>Country name in all available langueges.</p> "
          },
          {
            "group": "Success",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "treaties",
            "description": "<p>SCBD managed treaties status</p> "
          },
          {
            "group": "Success",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "treaties.XXVII8",
            "description": "<p>CBD treaty status, refer https://api.cbd.int/api/v2015/treaties for treaty mapping</p> "
          },
          {
            "group": "Success",
            "type": "<p>Date</p> ",
            "optional": true,
            "field": "treaties.XXVII8.party",
            "description": "<p>CBD party entry into for date</p> "
          },
          {
            "group": "Success",
            "type": "<p>String</p> ",
            "allowedValues": [
              "\"ratification\""
            ],
            "optional": false,
            "field": "treaties.XXVII8.instrument",
            "description": "<p>CBD party entry into for date</p> "
          },
          {
            "group": "Success",
            "type": "<p>TODO</p> ",
            "optional": false,
            "field": "TODO",
            "description": "<p><em>TO BE COMPLETED</em></p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n\n{\n    \"code\": \"CA\",\n    \"treaties\": {\n        \"XXVII8c\": {\n            \"party\": null,\n            \"instrument\": null,\n            \"deposit\": null,\n            \"signature\": null\n        },\n        \"XXVII8b\": {\n            \"party\": null,\n            \"instrument\": null,\n            \"deposit\": null,\n            \"signature\": null\n        },\n        \"XXVII8a\": {\n            \"party\": null,\n            \"instrument\": null,\n            \"deposit\": null,\n            \"signature\": \"2001-04-19\"\n        },\n        \"XXVII8\": {\n            \"party\": \"1993-12-29\",\n            \"instrument\": \"ratification\",\n            \"deposit\": \"1992-12-04\",\n            \"signature\": \"1992-06-11\"\n        }\n    },\n    \"name\": {\n        \"zh\": \"加拿大\",\n        \"ru\": \"Канада\",\n        \"fr\": \"Canada\",\n        \"es\": \"Canadá\",\n        \"en\": \"Canada\",\n        \"ar\": \"كندا\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/2.13/countries.js",
    "groupTitle": "Countries",
    "error": {
      "fields": {
        "Error": [
          {
            "group": "Error",
            "optional": false,
            "field": "notFound",
            "description": "<p>Record not found</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Not Found",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"statusCode\" : 404,\n  \"code\"       : \"notFound\",\n  \"message\"    : \"Document not found\" // Optional\n}",
          "type": "Json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "countries",
    "title": "List",
    "group": "Countries",
    "version": "2.13.0",
    "name": "list",
    "description": "<p>Load List of CBD countries and states.</p> ",
    "permission": [
      {
        "name": "everyone",
        "title": "Everyone access",
        "description": "<p>Authenticated and Unauthenticated users can access / perform this operation</p> "
      }
    ],
    "success": {
      "fields": {
        "Success": [
          {
            "group": "Success",
            "type": "<p>Object[]</p> ",
            "optional": false,
            "field": "BODY",
            "description": "<p>List of all countries.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "    HTTP/1.1 200 OK\n\n    [{\n       \"code\": \"AD\",\n       \"treaties\": {\n           \"XXVII8c\": {\n               \"party\": null,\n               \"instrument\": null,\n               \"deposit\": null,\n               \"signature\": null\n           },\n           \"XXVII8b\": {\n               \"party\": null,\n               \"instrument\": null,\n               \"deposit\": null,\n               \"signature\": null\n           },\n           \"XXVII8a\": {\n               \"party\": null,\n               \"instrument\": null,\n               \"deposit\": null,\n               \"signature\": null\n           },\n           \"XXVII8\": {\n               \"party\": \"2015-05-05\",\n               \"instrument\": \"accession\",\n               \"deposit\": \"2015-02-04\",\n               \"signature\": null\n           }\n       },\n       \"name\": {\n           \"zh\": \"安道尔 \",\n           \"ru\": \"Андорра\",\n           \"fr\": \"Andorre\",\n           \"es\": \"Andorra\",\n           \"en\": \"Andorra\",\n           \"ar\": \"أندورا\"\n       },\n   },\n   {\n       \"code\": \"AE\",\n       \"treaties\": {\n           \"XXVII8c\": {\n               \"party\": null,\n               \"instrument\": \"accession\",\n               \"deposit\": \"2014-09-12\",\n               \"signature\": null\n           },\n           \"XXVII8b\": {\n               \"party\": \"2014-12-11\",\n               \"instrument\": \"accession\",\n               \"deposit\": \"2014-09-12\",\n               \"signature\": null\n           },\n           \"XXVII8a\": {\n               \"party\": \"2014-12-11\",\n               \"instrument\": \"accession\",\n               \"deposit\": null,\n               \"signature\": null\n           },\n           \"XXVII8\": {\n               \"party\": \"2000-05-10\",\n               \"instrument\": \"ratification\",\n               \"deposit\": \"2000-02-10\",\n               \"signature\": \"1992-06-11\"\n           }\n       },\n       \"name\": {\n           \"zh\": \"阿拉伯联合酋长国\",\n           \"ru\": \"Объединённые Арабские Эмираты\",\n           \"fr\": \"Emirats arabes unis\",\n           \"es\": \"Emiratos Arabes Unidos\",\n           \"en\": \"United Arab Emirates\",\n           \"ar\": \"الإمارات العربية المتحدة\"\n       }\n   },\n\t  ...\n   ]",
          "type": "json"
        }
      ]
    },
    "filename": "routes/2.13/countries.js",
    "groupTitle": "Countries"
  },
  {
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "routes/mongolab-syntax.js",
    "group": "_Users_blaisefonseca_Projects_gaia_routes_mongolab_syntax_js",
    "groupTitle": "_Users_blaisefonseca_Projects_gaia_routes_mongolab_syntax_js",
    "name": "",
    "parameter": {
      "fields": {
        "Query String": [
          {
            "group": "Query String",
            "type": "<p>Json</p> ",
            "optional": true,
            "field": "q",
            "description": "<p>Query - restrict results by the specified JSON query</p> "
          },
          {
            "group": "Query String",
            "type": "<p>Boolean</p> ",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": true,
            "field": "c",
            "defaultValue": "0",
            "description": "<p>Count - return the result count for this query</p> "
          },
          {
            "group": "Query String",
            "type": "<p>Json</p> ",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": true,
            "field": "f",
            "description": "<p>Fields set - specify the set of fields to include or exclude in each document (1 - include; 0 - exclude)</p> "
          },
          {
            "group": "Query String",
            "type": "<p>Boolean</p> ",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": true,
            "field": "fo",
            "defaultValue": "0",
            "description": "<p>Single Document - return a single document from the result set (return first object {} in the array [])</p> "
          },
          {
            "group": "Query String",
            "type": "<p>Json</p> ",
            "allowedValues": [
              "1",
              "-1"
            ],
            "optional": true,
            "field": "s",
            "description": "<p>Sort Order - specify the order in which to sort each specified field (1- ascending; -1 - descending)</p> "
          },
          {
            "group": "Query String",
            "type": "<p>Number</p> ",
            "allowedValues": [
              "0+"
            ],
            "optional": true,
            "field": "sk",
            "defaultValue": "0",
            "description": "<p>Results to skip - specify the number of results to skip in the result set; useful for paging</p> "
          },
          {
            "group": "Query String",
            "type": "<p>Number</p> ",
            "allowedValues": [
              "0",
              "1+"
            ],
            "optional": true,
            "field": "l",
            "defaultValue": "0",
            "description": "<p>Limit - specify the limit for the number of results. <code>0</code> is unlimited</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Query",
          "content": "GET /api/v2015/users?q={ \"firstName\" : \"john\", \"lastName\" : \"smith\" }\n\nHTTP/1.1 200 OK\n[\n  { \"id\" : \"012345abcd\", ... },\n  { \"id\" : \"012345abce\", ... },\n  ...\n]",
          "type": "http"
        },
        {
          "title": "Count",
          "content": "GET /api/v2015/users?c=1&q={ \"firstName\" : \"john\", \"lastName\" : \"smith\" }\n\nHTTP/1.1 200 OK\n{\n   \"count\" : 27\n}",
          "type": "http"
        },
        {
          "title": "Fields set",
          "content": "GET /api/v2015/users?q={ \"lastName\" : \"smith\" }&f={ \"email\" : 1,\"firstName\" : 1,\"lastName\" : 1}\n\nHTTP/1.1 200 OK\n[\n  { \"id\" : \"012345abcd\", \"email\" : \"fake1.smith@cbd.int\", \"firstName\" : \"fake1\", \"lastName\" : \"simth\" },\n  { \"id\" : \"012345abce\", \"email\" : \"fake2.smith@cbd.int\", \"firstName\" : \"fake2\", \"lastName\" : \"simth\" },\n  ...\n]",
          "type": "http"
        },
        {
          "title": "Find One",
          "content": "GET /api/v2015/users?q={ \"lastName\" : \"smith\" }&fo=1\nHTTP/1.1 200 OK\n{\n  \"id\"        : \"012345abce\",\n  \"prefix\"    : \"Mr.\"\n  \"firstName\" : \"fake1\",\n  \"lastName\"  : \"simth\",\n  \"email\"     : \"fake1.smith@cbd.int\",\n  ...\n}",
          "type": "http"
        },
        {
          "title": "Sort",
          "content": "GET /api/v2015/users?q={ \"lastName\" : \"smith\" }&s={ \"id\" : -1 }&sk=100&l=100\n\nHTTP/1.1 200 OK\n[\n  { \"id\" : \"012345abce\", ... },\n  { \"id\" : \"012345abcd\", ... },\n  ...\n]",
          "type": "http"
        },
        {
          "title": "Skip",
          "content": "GET /api/v2015/users?sk=50&l=50&q={ \"lastName\" : \"smith\" }",
          "type": "http"
        },
        {
          "title": "Limit",
          "content": "GET /api/v2015/users?l=25&q={ \"lastName\" : \"smith\" }",
          "type": "http"
        }
      ]
    }
  }
] });
