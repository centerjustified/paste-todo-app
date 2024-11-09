import { Heading } from "@twilio-paste/core/heading"
import { Form, FormActions, FormControl } from "@twilio-paste/core/form"
import { Label } from "@twilio-paste/core/label"
import { Select, Option } from "@twilio-paste/core/select"
import { DatePicker } from "@twilio-paste/core/date-picker"
import { Input } from "@twilio-paste/core/input"
import { Button } from "@twilio-paste/core/button"
import { useState } from "react";

interface FormValues {
  toDoText: string;
  priority: string;
  dateDue: Date;
}


export const NewToDoForm = () => {

  const [formValues, setFormValues] = useState<FormValues>({
    toDoText: "",
    priority: "20",
    dateDue: new Date(),
  });

  const [formFieldDirty, setFormFieldDirty] = useState<FormDirty>({
    toDoText: false,
    priority: false,
    dateDue: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  return (
    <Form aria-labelledby="address-heading" maxWidth="size30">
      <Heading
        as="h3"
        variant="heading30"
        id="address-heading"
        marginBottom="space0"
      >
        New To Do
      </Heading>
      <FormControl>
        <Label htmlFor="to-do-text">What needs to be done?</Label>
        <Input
          type="text"
          id="to-do-text"
          name="toDoText"
          placeholder="Add a new task to do"
          onChange={handleChange}
        />
      </FormControl>
      <FormControl>
        <Label htmlFor="priority">Priority</Label>
        <Select id="priority" name="priority" value={formValues.priority}>
          <Option value="10">High</Option>
          <Option value="20">Normal</Option>
          <Option value="30">Low</Option>
        </Select>
      </FormControl>
      <FormControl>
        <Label htmlFor="date-due">Date Due</Label>
        <DatePicker id="date-due" onChange={handleChange} />
      </FormControl>

      <FormActions>
        <Button variant="primary">Submit</Button>
        <Button variant="secondary">Cancel</Button>
      </FormActions>

    </Form>
  );
}
