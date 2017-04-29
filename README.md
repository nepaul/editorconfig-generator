# EditorConfigGenerate

Generate a simple editor config file for usual situation. 
As follows:

```
# http://editorconfig.org
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
max_line_length = 80
indent_size = 4

# The JSON files contain newlines inconsistently
[*.json]
indent_size = 2
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
```

## Installation

```
ext install editorconfiggenerator
```

## Usage

1. launch the Command Pallete (**Ctrl + Shift + P** or **Cmd + Shift + P**) 
2. type **GenerateEditorConfig**, then it will generate a .editorconfig in your root project directory
3. if you find that .editorconfig has been generated but not worked, restart your vscode please!

[Visual Studio Code]: https://code.visualstudio.com/
[EditorConfig]: http://editorconfig.org/
