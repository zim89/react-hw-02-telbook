// import PropTypes from 'prop-types';
import React, { Component } from 'react';
// import { Field, Form, Formik } from 'formik';
// import styled from 'styled-components';
// import { Label, StyledForm, StyledField } from './Styled';
// import * as yup from 'yup';

export default class TelbookForm extends Component {
  state = {
    name: '',
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefualt();
    console.log(this.state);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

// const schema = yup.object().shape({
//   name: yup.string().required(),
// });

// const initialValues = {
//   name: '123',
// };

// export default class TelbookForm extends Component {
//   // static propTypes = { second: '' };
//   state = {
//     name: '',
//   };

//   handleChange = e => {
//     const { name, value } = e.currentTarget;
//     this.setState({ [name]: value });
//   };

//   handleSubmit = e => {
//     e.preventDefault();
//     console.log(e);
//     const { name } = this.state;
//     console.log(name);
//     // this.props.onSubmit(this.state);
//     // console.log(actions);
//     // this.props.onSubmit({ ...this.state });
//     this.reset();
//   };

//   reset = () => {
//     this.setState({ name: '' });
//   };

//   render() {
//     return (
//       <Formik initialValues={initialValues} validationSchema={schema}>
//         <Form onSubmit={this.handleSubmit}>
//           <Label htmlFor="name">Name</Label>
//           <Field type="text" name="name" placeholder="Enter your name ..." />
//           <button type="submit">Submit</button>
//         </Form>
//       </Formik>
//     );
//   }
// }
