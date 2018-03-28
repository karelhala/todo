# Simple todo-cli app
Sometimes you need to write simple todo from command line. This tool will allow you to do this in couple of steps.

## Installing the command line tool
If you have NPM version 5+ you don't need to install it, and you can just run
```bash
$> npx todo-cli
```

Just install this package as global dependency
```bash
$> npm install -g @khala/todo
```

And then run it
```bash
$> todo-cli
```

## Example of new todo
![TODO example](static/todo-example.gif?raw=true "TODO example")

## Running todo-cli with options
This tool recognizes 6 options

| Option | longer | Description |
|---|---|---|
| `-a` | `--add` | Add new single TODO item |
| `-m` | `--mark` | Mark some items as done |
| `-l` | `--list` | List all tasks |
| `-f` | `--file` | Path where to store todo file |
| `-h` | `--help` | Prints help for this tool |
| `-v` | `--version` | Prints version of this tool |

### Path for todo file
If you want to store todo file somewhere else than `/${HOME}/.todos` you can use this option.

This option is trying to guess where todos will be stored on your machine, you have two options

* Full path
```bash
$> todo-cli -f /home/some/path/.todos
```
* Relative path to your home, file will be stored under your home folder, plus whatever you pass to it
```bash
$> todo-cli -f some/folder
```

