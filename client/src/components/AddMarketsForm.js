import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Button, Input, Form } from 'antd';

const { Item } = Form;
const { TextArea } = Input;

class AddMarketsForm extends Component {
  formSubmit(value) {
    console.log(value);
  }

  renderInput = ({ input }) => <Input {...input} autoComplete='off' />;

  renderTextArea = ({ input }) => <TextArea {...input} rows={6} autoComplete='off' />;

  renderInputItems() {
    const items = [
      { id: 1, name: 'title', component: this.renderInput },
      { id: 2, name: 'coordinates', component: this.renderInput },
      { id: 3, name: 'description', component: this.renderTextArea }
    ];

    return items.map(({ id, name, component }) => (
      <Item label={name} key={id}>
        <Field
          name={name}
          component={component}
        />
      </Item>
    ));
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <Form onSubmit={handleSubmit(this.formSubmit)}>
        {this.renderInputItems()}
        <Button htmlType='submit'>Create Post</Button>
      </Form>
    );
  }
}

function validate(value) {
  const errors = {};
  if (!value.title) {
    errors.title = 'Post title is required!'
  }
  if (!value.coordinates) {
    errors.coordinates = 'Coordinates are required!'
  }
  if (!value.description) {
    errors.description = 'Description is required!'
  }
  return errors;
};

export default reduxForm({ validate, form: 'value' })(AddMarketsForm);
