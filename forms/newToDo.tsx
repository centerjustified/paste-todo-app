import { Form, FormActions, FormControl } from "@twilio-paste/core/form"
import { Label } from "@twilio-paste/core/label"
import { Select, Option } from "@twilio-paste/core/select"
import { DatePicker } from "@twilio-paste/core/date-picker"
import { Input } from "@twilio-paste/core/input"
import { Button } from "@twilio-paste/core/button"
import { useState } from "react";
import { Modal, ModalHeader, ModalHeading, ModalBody, ModalFooter} from "@twilio-paste/core"
import { Priority, ToDo } from "../types/todo";

const defaultFormValues: ToDo = {
  id: "",
  toDoText: "",
  priority: Priority.Normal,
  location: "",
  dueDate: new Date(),
};

export const NewToDoForm = ({isOpen, handleClose, handleAddToDo}:{isOpen: boolean, handleClose: () => void, handleAddToDo: (toDo: ToDo) => void}) => {

  const [formValues, setFormValues] = useState<ToDo>(defaultFormValues);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleReset = () => {
    setFormValues(defaultFormValues);
    handleClose();
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleAddToDo({...formValues, id: crypto.randomUUID()});
    handleReset();
  };

  const modalHeadingID = "new-to-do-form";

  return (
    <Modal ariaLabelledby={modalHeadingID} isOpen={isOpen} onDismiss={handleClose} size="default">
        <ModalHeader>
        <ModalHeading as="h3" id={modalHeadingID}>
          Add a new task
        </ModalHeading>
      </ModalHeader>
      <ModalBody>
      <Form onSubmit={handleSubmit} >
          <FormControl>
            <Label htmlFor="task-text">What needs to be done?</Label>
            <Input
              type="text"
              id="task-text"
              name="toDoText"
              placeholder="Add a new task to do"
              onChange={handleChange}
              value={formValues.toDoText}
              required
            />
          </FormControl>
          <FormControl>
            <Label htmlFor="task-text">Location</Label>
            <Input
              type="text"
              id="task-text"
              name="location"
              placeholder="Where is this task have to be done?"
              onChange={handleChange}
              value={formValues.location}
              required
            />
          </FormControl>
          <FormControl>
            <Label htmlFor="priority">Priority</Label>
            <Select id="priority" name="priority" value={formValues.priority} onChange={handleChange} required>
              <Option value="10">High</Option>
              <Option value="20">Normal</Option>
              <Option value="30">Low</Option>
            </Select>
          </FormControl>
          <FormControl>
            <Label htmlFor="date-due">Due date</Label>
            <DatePicker id="date-due" name="dueDate" onChange={handleChange} required />
          </FormControl>
          <FormActions>
              <Button variant="primary" type="submit">Submit</Button>
              <Button variant="secondary" onClick={handleReset}>Cancel</Button>
            </FormActions>
          </Form>
      </ModalBody>
      <ModalFooter>
        All fields are required
      </ModalFooter>
      </Modal>
  );
}
