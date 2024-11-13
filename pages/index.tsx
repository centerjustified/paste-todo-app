import { Box } from "@twilio-paste/core/box";
import type { NextPage } from "next";
import { NewToDoForm } from "../forms/newToDo";
import { useModal } from "../hooks/useModal";
import { Button, Heading, PageHeader } from "@twilio-paste/core";
import { ToDoTable } from "../components/toDoTable";
import { useState } from "react";
import { ToDo } from "../types/todo";

const Home: NextPage = () => {
  const { isOpen, handleOpen, handleClose } = useModal();
  const [toDoList, setToDoList] = useState<ToDo[]>([]);

  const handleAddToDo = (toDo: ToDo) => {
    setToDoList([...toDoList, toDo]);
  }

  const handleCompleteToDo = (toDo: ToDo) => {
    setToDoList(toDoList.filter((t) => t.id !== toDo.id));
  }

  return (
    <Box display="flex" width="100%" justifyContent="center" paddingX="space10">
      <Box paddingTop="space130" paddingBottom="space160" width="size100" maxWidth="size100">
        <PageHeader>
          <Heading as="h1" variant={"heading10"}>To Do List</Heading>
          <Box display="flex" justifyContent="flex-end" paddingBottom="space70">
            <Button variant="primary" size="small" onClick={handleOpen}>
              Add a New Task
            </Button>
          </Box>
        </PageHeader>
        <Box display="flex" flexDirection="column" rowGap="space130">
          <ToDoTable toDoList={toDoList} handleCompleteToDo={handleCompleteToDo} />
          <NewToDoForm isOpen={isOpen} handleClose={handleClose} handleAddToDo={handleAddToDo} />
        </Box>
      </Box>
    </Box>
  );
};

export default Home;

