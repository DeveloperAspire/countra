import { Fragment } from "react";
import Container from "../components/Layout/Container";
import InputContainer from "../components/Forms/InputContainer";
import Countries from "../components/Countries/Countries";

const Home = () => {
  return (
    <Fragment>
      <Container>
      <InputContainer/>
      <Countries />
      </Container>
    </Fragment>
  );
};

export default Home;
