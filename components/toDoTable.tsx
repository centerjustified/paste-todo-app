import { DataGrid, DataGridBody, DataGridCell, DataGridHead, DataGridHeader, DataGridRow } from "@twilio-paste/core";
import { ToDo } from "../types/todo";

const ToDoTable = ({ toDoList }: { toDoList: ToDo[] }) => {
  return (
    <DataGrid aria-label="User information table" striped>
      <DataGridHead>
        <DataGridRow>
          <DataGridHeader>Task</DataGridHeader>
          <DataGridHeader>Location</DataGridHeader>
          <DataGridHeader>Priority</DataGridHeader>
          <DataGridHeader>Due Date</DataGridHeader>
        </DataGridRow>
      </DataGridHead>
      <DataGridBody>
        {toDoList.map((toDo) => (
          <DataGridRow key={toDo.id}>
            <DataGridCell>{toDo.toDoText}</DataGridCell>
            <DataGridCell>{toDo.location}</DataGridCell>
            <DataGridCell>{toDo.priority}</DataGridCell>
            <DataGridCell>{toDo.dueDate?.toLocaleDateString()}</DataGridCell>
          </DataGridRow>
        ))}
      </DataGridBody>
    </DataGrid>
  );
}

export { ToDoTable };
