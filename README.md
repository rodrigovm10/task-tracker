# Task Tracker List

Task Tracker List is a command-line tool for managing tasks, written in TypeScript. It allows users
to easily create, list, update, and delete tasks.

Project Url: [Task Tracker Cli](https://roadmap.sh/projects/task-tracker)

## Features

- Add, Update, and Delete tasks
- Mark a task as in progress or done
- List all tasks
- List all tasks that are done
- List all tasks that are not done
- List all tasks that are in progress
- Stores tasks in a JSON file (tasks.json)

## Installation

1. Clone the repository

```bash
https://github.com/rodrigovm10/task-tracker.git
cd task-tracker
```

2. Install node_modules

```bash
npm i
```

3. Link the package

```bash
npm link
```

## Usage

**List all tasks.**

```
task-cli list
```

This command will return all stored tasks. If you want to filter the tasks by status, you can use
one of the following optional filters: _done_, _todo_, _in-progress_.

```
task-cli list {filter}
```

**Example:**

- To list all the pending tasks (todo).

```
task-cli list todo
```

- To list all the in progress tasks (in-progress).

```
task-cli list in-progress
```

- To list all completed tasks (done).

```
task-cli list done
```

- Update task

```
task-cli update 1
```

- Delete task

```
task-cli delete 1
```

- List task by done status

```
task-cli delete 1
```
