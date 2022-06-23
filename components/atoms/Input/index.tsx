import React from 'react';
import {
  FormControl,
  FormLabel,
  Flex,
  Stack,
} from '@chakra-ui/react';

interface InputPropsItem {
  field: string;
  name: string;
  id: string;
  type: string;
  value: any;
  changeInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input(props: InputPropsItem) {
  const { field, name, id, type, value, changeInput } = props;
  return (
    <>
        <FormControl>
          <FormLabel >{field}</FormLabel>
          <input
              className="form-control"
              name={name}
              id={id}
              value={value}
              onChange={changeInput}
              type={type}
            />
        </FormControl> <br/>
 
    </>
  );
}
