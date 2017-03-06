## Setup

Flow is a static type checker that helps you write code with fewer bugs. Check out this introduction to using static types in JavaScript if you are new to this concept.

Recent versions of Flow work with Create React App projects out of the box.

To add Flow to a Create React App project, follow these steps:

Run `npm install --save-dev flow-bin`.
Add `"flow": "flow"` to the scripts section of your package.json.
Run `npm run flow -- init` to create a .flowconfig file in the root directory.
Add `// @flow` to any files you want to type check (for example, to src/App.js).
Now you can run npm run flow to check the files for type errors. You can optionally use an IDE like Nuclide for a better integrated experience. In the future we plan to integrate it into Create React App even more closely.

To learn more about Flow, check out its documentation.

## Editor Integration

### VIM
If you are using ALE no setup required! If your not you should be!!

### Atom
run `apm install linter linter-flow`

### VS Code
install vscode-flow-ide through the vscode marketplace

### Sublime Text
Please use Package Control to install the linter plugin. This will ensure that the plugin will be updated when new versions are available. If you want to install from source so you can modify the source code, you probably know what you are doing so we won’t cover that here.

To install via Package Control, do the following:

Within Sublime Text, bring up the Command Palette and type install. Among the commands you should see Package Control: Install Package. If that command is not highlighted, use the keyboard or mouse to select it. There will be a pause of a few seconds while Package Control fetches the list of available plugins.

When the plugin list appears, type flow. Among the entries you should see SublimeLinter-flow. If that entry is not highlighted, use the keyboard or mouse to select it.
