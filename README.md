# Simple todo-cli app
Sometimes you need to write simple todo from command line. This tool will allow you to do this in couple of steps.

## Installing the command line tool
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
This tool recognizes 3 options

| Option | longer | Description |
|---|---|---|
| `-a` | `--add` | Add new single TODO item |
| `-l` | `--mark` | Mark some items as done |
| `-m` | `--list` | List all tasks |
