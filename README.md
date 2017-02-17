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
