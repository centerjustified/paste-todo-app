import { Button, DataGrid, DataGridBody, DataGridCell, DataGridHead, DataGridHeader, DataGridRow } from "@twilio-paste/core";
import { ToDo } from "../types/todo";

const ToDoTable = ({ toDoList, handleCompleteToDo }: { toDoList: ToDo[], handleCompleteToDo: (toDo: ToDo) => void }) => {
  return (
    <DataGrid aria-label="User information table" striped>
      <DataGridHead>
        <DataGridRow>
          <DataGridHeader>Task</DataGridHeader>
          <DataGridHeader>Location</DataGridHeader>
          <DataGridHeader>Priority</DataGridHeader>
          <DataGridHeader>Due Date</DataGridHeader>
          <DataGridHeader>Actions</DataGridHeader>
        </DataGridRow>
      </DataGridHead>
      <DataGridBody>
        {toDoList.map((toDo) => (
          <DataGridRow key={toDo.id}>
            <DataGridCell>{toDo.toDoText}</DataGridCell>
            <DataGridCell>{toDo.location}</DataGridCell>
            <DataGridCell>{toDo.priority}</DataGridCell>
            <DataGridCell>{new Date(toDo.dueDate).toLocaleDateString()}</DataGridCell>
            <DataGridCell>
              <Button variant="primary" size="small" onClick={() => handleCompleteToDo(toDo)}>
                Click to Complete
              </Button>
            </DataGridCell>
          </DataGridRow>
        ))}
      </DataGridBody>
    </DataGrid>
  );
}

export { ToDoTable };
