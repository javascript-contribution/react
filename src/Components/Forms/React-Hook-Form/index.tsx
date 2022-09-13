import React from "react";
import { Button } from "@mui/material";
import Form, { Input, Select } from "./Fragments";

export default function ReactHookForm() {
  const onSubmit = (data: any) => console.log(data);

  return (
    <Form onSubmit={onSubmit}>
      <Input name="firstName" />
      <Input name="lastName" />
      <Select name="gender" options={['None',"female", "male", "other"]} />
      <Button type="submit">Submit</Button>
    </Form>
  );
}