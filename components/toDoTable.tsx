import { DataGrid, DataGridBody, DataGridCell, DataGridHead, DataGridHeader, DataGridRow } from "@twilio-paste/core";

const ToDoTable = () => {
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
        <DataGridRow>
          <DataGridCell>Create todo application</DataGridCell>
          <DataGridCell>Home</DataGridCell>
          <DataGridCell>High</DataGridCell>
          <DataGridCell>11/13/2024</DataGridCell>
        </DataGridRow>
      </DataGridBody>
    </DataGrid>
  );
}

export { ToDoTable };
