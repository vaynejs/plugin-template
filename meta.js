const path = require('path');
const fs = require('fs');

function sortObject(object) {
  // Based on https://github.com/yarnpkg/yarn/blob/v1.3.2/src/config.js#L79-L85
  const sortedObject = {};
  Object.keys(object).sort().forEach(item => {
    sortedObject[item] = object[item];
  });
  return sortedObject;
}

module.exports = {
  "helpers": {
    "if_or": function (v1, v2, options) {
      if (v1 || v2) {
        return options.fn(this);
      }

      return options.inverse(this);
    }
  },
  "prompts": {
    "name": {
      "type": "string",
      "required": true,
      "message": "Project name"
    },
    "description": {
      "type": "string",
      "required": false,
      "message": "Project description",
      "default": "A Vue.js project"
    },
    "author": {
      "type": "string",
      "message": "Author"
    }
  },
  "filters": {
    ".eslintrc.js": "lint",
    ".eslintignore": "lint"
  },
  "complete": function (data) {
    const packageJsonFile = path.join(
      data.inPlace ? "" : data.destDirName,
      "package.json"
    );
    const packageJson = JSON.parse(fs.readFileSync(packageJsonFile));
    packageJson.devDependencies = sortObject(packageJson.devDependencies);
    packageJson.dependencies = sortObject(packageJson.dependencies);
    fs.writeFileSync(
      packageJsonFile,
      JSON.stringify(packageJson, null, 2) + "\n"
    );

    const message = `To get started:\n\n  ${data.inPlace ? '' : `cd ${data.destDirName}\n  `}yarn install\n  \n\nDocumentation can be found at https://vaynejs.github.io/docs/create-a-plugin.html`;
    console.log("\n" + message.split(/\r?\n/g).map(line => "   " + line).join("\n"));
  }
};