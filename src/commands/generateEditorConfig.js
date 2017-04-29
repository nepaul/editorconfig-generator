'use strict';

var fs = require('fs');
var path = require('path');

var vscode = require('vscode');

var TEMPLATE = `# http://editorconfig.org
root = true

[*]
indent_style = space
indent_size = 2
end_of_line = lf
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true

# Use 4 spaces for the Python files
[*.py]
indent_size = 4
max_line_length = 80

# The JSON files contain newlines inconsistently
[*.json]
insert_final_newline = ignore

# Minified JavaScript files shouldn't be changed
[**.min.js]
indent_style = ignore
insert_final_newline = ignore

# Makefiles always use tabs for indentation
[Makefile]
indent_style = tab

# Batch files use tabs for indentation
[*.bat]
indent_style = tab

[*.md]
trim_trailing_whitespace = false

`;


function generateEditorConfig() {
    if (!vscode.workspace.rootPath) {
        vscode.window.showInformationMessage(
            'Please open a folder before generating an .editorconfig file'
        );
        return;
    }

    var editorConfigFile = path.join(vscode.workspace.rootPath, '.editorconfig');
    fs.stat(editorConfigFile, function (err, stats) {
        if (err) {
            if (err.code === 'ENOENT') {
                fs.writeFile(editorConfigFile, TEMPLATE, function (err) {
                    if (err) {
                        vscode.window.showErrorMessage(err.message);
                        return;
                    }
                })
            } else {
              vscode.window.showErrorMessage(err.message);
            }
          return;
        }

        if (stats.isFile()) {
          vscode.window.showErrorMessage(
            'A .editorconfig file already exists in your workspace.'
          );
        }
    });
}

module.exports = {
    generateEditorConfig: generateEditorConfig,
}
