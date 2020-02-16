import React from 'react';
import DynamicForm from '@eux86/dynamic-forms';
import { IDynamicFormSchema, ValidationType } from '@eux86/dynamic-forms';

export default {
  title: 'DynamicForm',
  component: DynamicForm,
};

const demoSchema: IDynamicFormSchema = {
  fields: [
    {
      id: 'name',
      label: 'First Name',
      type: 'text',
      validations: [
        {
          type: ValidationType.minLength,
          data: '5',
          errorMessage: 'The string should have at least 5 characters',
        },
      ],
    },
    {
      id: 'lastname',
      label: 'Last Name',
      type: 'text',
      validations: [
        {
          type: ValidationType.required,
          errorMessage: 'The field is required',
        },
      ],
    },
    {
      id: 'phone',
      label: 'Telephone',
      type: 'tel',
    },
    {
      id: 'age',
      label: 'age',
      type: 'number',
    },
    {
      id: 'title',
      label: 'Title',
      type: 'options',
      options: {
        type: 'single-selection',
        items: [
          {
            id: 'mr',
            label: 'Mr.',
            value: 'mr',
          },
          {
            id: 'mrsmss',
            label: 'Mrs./Mss.',
            value: 'mrsmss',
          },
        ],
      },
    },
    {
      id: 'pets',
      label: 'Owned Pets',
      type: 'options',
      options: {
        type: 'multiple-selection',
        items: [
          {
            id: 'cat',
            label: 'Cat',
            value: 'cat',
          },
          {
            id: 'dog',
            label: 'Dog',
            value: 'dog',
          },
          {
            id: 'ferret',
            label: 'Ferret',
            value: 'ferret',
          },
        ],
      },
    },
  ],
};

export const Default = () => {
  const [data, setData] = React.useState({});
  const [errors, setErrors] = React.useState({});
  const onChange = React.useCallback((newData: any, validationErrors: any) => { setData(newData); setErrors(validationErrors); }, []);
  return (
    <>
      <DynamicForm schema={demoSchema} onChange={onChange} />
      <textarea style={{ width: '250px', height: '200px' }} value={JSON.stringify(data, null, 2)} />
      <textarea style={{ width: '250px', height: '200px' }} value={JSON.stringify(errors, null, 2)} />
    </>
  );
};
