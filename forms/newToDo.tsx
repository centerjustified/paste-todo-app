import { Form, FormControl } from "@twilio-paste/core/form"
import { Label } from "@twilio-paste/core/label"
import { Select, Option } from "@twilio-paste/core/select"
import { DatePicker } from "@twilio-paste/core/date-picker"
import { Input } from "@twilio-paste/core/input"
import { Button } from "@twilio-paste/core/button"
import { useState } from "react";
import { Modal, ModalHeader, ModalHeading, ModalBody, ModalFooter, ModalFooterActions } from "@twilio-paste/core"


interface FormValues {
  toDoText: string;
  priority: string;
  location: string;
  dateDue: Date;
}

export const NewToDoForm = ({isOpen, handleClose}:{isOpen: boolean, handleClose: () => void}) => {

  const [formValues, setFormValues] = useState<FormValues>({
    toDoText: "",
    priority: "20",
    location: "",
    dateDue: new Date(),
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formValues);
    handleClose();
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
        <Form onSubmit={handleSubmit}>
          <FormControl>
            <Label htmlFor="to-do-text">What needs to be done?</Label>
            <Input
              type="text"
              id="to-do-text"
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
            <DatePicker id="date-due" name="dateDue" onChange={handleChange} required />
          </FormControl>
          </Form>
          <ModalFooter>
            <ModalFooterActions>
              <Button variant="primary">Submit</Button>
              <Button variant="secondary" onClick={handleClose}>Cancel</Button>
            </ModalFooterActions>
          </ModalFooter>
      </ModalBody>
    </Modal>
  );
}
