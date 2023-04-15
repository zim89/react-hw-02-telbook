import { Component } from 'react';
import { Section, Container, Title } from './Styled';
import TelbookForm from 'components/TelbookForm/TelbookForm';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  render() {
    return (
      <>
        {/* <Section> */}
        {/* <Container> */}
        <Title>Phonebook</Title>
        <TelbookForm />
        {/* </Container> */}
        {/* </Section> */}
        {/* <Section> */}
        {/* <Container> */}
        {/* <Title>Contacts</Title> */}
        {/* </Container> */}
        {/* </Section> */}
      </>
    );
  }
}
