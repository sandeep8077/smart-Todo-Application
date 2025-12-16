
export const taskSelector = (state) => state.tasks.tasks;

export const completedTaskSelector = (state) =>
  state.tasks.tasks.filter((task) => task.completed);

export const pendingTaskSelector = (state) =>
  state.task.tasks.filter((task) => !task.completed);