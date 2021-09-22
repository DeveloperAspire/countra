import { Fragment } from "react";
import Header from "../components/Layout/Header";
import Container from "../components/Layout/Container";
import InputContainer from "../components/Forms/InputContainer";
import Countries from "../components/Countries/Countries";

const Home = () => {
  return (
    <Fragment>
      <Header />
      <Container>
      <InputContainer/>
      <Countries />
      </Container>
    </Fragment>
  );
};

export default Home;
