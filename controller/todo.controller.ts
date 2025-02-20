import { Request, Response } from "express";

interface Todo {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

let todos: Todo[] = [];

const getAllTodos = (req: Request, res: Response): void => {
  res.json(todos);
};

const getTodoById = (req: Request, res: Response): void => {
  const todo = todos.find((todo) => todo.id === parseInt(req.params.id));
  if (!todo) {
    res.status(404).json({ message: "Todo not found" });
    return;
  }
  res.json(todo);
};

const createTodo = (req: Request, res: Response): void => {
  const { title, description }: { title: string; description: string } =
    req.body;
  const newTodo: Todo = {
    id: todos.length + 1,
    title,
    description,
    completed: false,
  };
  todos.push(newTodo);
  res.status(201).json(newTodo);
};

const updateTodo = (req: Request, res: Response): void => {
  const todo = todos.find((todo) => todo.id === parseInt(req.params.id));
  if (!todo) {
    res.status(404).json({ message: "Todo not found" });
    return;
  }
  const {
    title,
    description,
    completed,
  }: { title?: string; description?: string; completed?: boolean } = req.body;
  todo.title = title || todo.title;
  todo.description = description || todo.description;
  todo.completed = completed !== undefined ? completed : todo.completed;
  res.json(todo);
};

const deleteTodo = (req: Request, res: Response): void => {
  const todoIndex = todos.findIndex(
    (todo) => todo.id === parseInt(req.params.id)
  );
  if (todoIndex === -1) {
    res.status(404).json({ message: "Todo not found" });
    return;
  }
  todos.splice(todoIndex, 1);
  res.status(200).send({
    message: `Todo with id ${req.params.id} deleted.`,
  });
};

export { getAllTodos, getTodoById, createTodo, updateTodo, deleteTodo };
