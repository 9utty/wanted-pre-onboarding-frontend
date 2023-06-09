import instance from "../utils/axiosInterceptor";

export const getTodo = () => {
  const API = "https://www.pre-onboarding-selection-task.shop/todos";

  return instance.get(API);
};

export const postTodo = (content) => {
  const API = "https://www.pre-onboarding-selection-task.shop/todos";

  return instance.post(API, {
    todo: content,
  });
};
export const updateTodo = (todoId, content, isCompleted) => {
  const API = `https://www.pre-onboarding-selection-task.shop/todos/${todoId}`;

  return instance.put(API, {
    todo: content,
    isCompleted: isCompleted,
  });
};

export const deleteTodo = (todoId) => {
  const API = `https://www.pre-onboarding-selection-task.shop/todos/${todoId}`;

  return instance.delete(API);
};
