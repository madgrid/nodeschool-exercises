if &compatible
	set nocompatible
endif

" Dark Powered Plugin Manager (dein.vim)
" Commands :call dein#update(), 
set runtimepath+=~/.vim/dein/repos/github.com/Shougo/dein.vim/dein.vim
call dein#begin('~/.vim/dein')
call dein#add('scrooloose/nerdtree')
call dein#add('othree/yajs.vim', { 'for': 'javascript' })
call dein#add('gavocanov/vim-js-indent')
call dein#add('mxw/vim-jsx')
call dein#add('othree/es.next.syntax.vim')
call dein#add('elzr/vim-json')
call dein#add('othree/jsdoc-syntax.vim')
call dein#add('othree/javascript-libraries-syntax.vim')
call dein#add('Shougo/neocomplete.vim')

call dein#end()

filetype plugin indent on
syntax enable

" User Settings
set number
map <F8> :NERDTreeToggle<CR>

" Remap Keys
:inoremap kj <ESC>

