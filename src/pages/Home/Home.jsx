import {  HomeWrapper, Title, Item, Btn } from './Home.styled';

export default function Home() {
  return (
    <HomeWrapper>
      <Title >Go to a free life!</Title>
      <Item>And we will help you choose the right wheels </Item>
      <Btn  to={'/catalog'}>Order a car</Btn>
    </HomeWrapper>
  );
}