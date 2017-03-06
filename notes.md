## Setup prettier-eslint-cli in project

Must ensure that all plugins in the .eslintrc.json file are installed either
globally or as dependencies. In the case of this project I did that through
yarn add -D eslint-plugin-html eslint-plugin-volkmann.

I then ran `yarn add -D prettier-eslint-cli`

added an npm script to format all js and jsx files through
`"format": "prettier-eslint --write \"src/**/*.js*\""`

## Integrate into your editor

### VIM
Remarkably this can be integrated into vim without the use of any plugins!
Simply add the following to your .vimrc

`autocmd FileType javascript set formatprg=prettier-eslint\ --stdin`

This will enable automatic formating with the `gq` command

you can also set up to run prettier-eslint-cli whenever you save a js or jsx
file with:

`autocmd BufWritePre *.js* :normal gggqG`


### Atom
To install run `apm install prettier-atom`

Then open settings with `cmd + ,` and go to `package ->  prettier-atom ->
Format` make sure eslint integration is checked and format on save is checked.


