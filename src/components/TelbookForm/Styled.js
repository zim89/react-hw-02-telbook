import styled from 'styled-components';
import { Form, Field } from 'formik';

const StyledForm = styled(Form)`
  margin-top: 20px;
  border: 1px solid #455a64;
  border-radius: 8px;
  padding: 40px 20px;
`;

const Label = styled.label`
  margin-right: 10px;
  font-size: 18px;
  font-weight: 500;
  color: #5c6bc0;
`;

const StyledField = styled(Field)`
  padding: 10px 10px;
  border: 1px solid #263238;
  border-radius: 4px;
`;

export { Label, StyledForm, StyledField };
