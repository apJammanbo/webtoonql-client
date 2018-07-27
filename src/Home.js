import React from "react";
import styled from "styled-components";
import { Query } from "react-apollo";
import { HOME_PAGE } from './queries';
import Webtoon from './Webtoon';

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 0.7fr);
  flex-wrap: wrap;
  justify-items: center;
`;

const Home = () => (
  <Container>
  <Query query={HOME_PAGE}>
    {( {loading, data, error} ) => {
      if(loading) {
        return "Loading";
      } else if(error) {
        return "Error";
      }
      console.log(data);
      return data.webtoons.map(webtoon => 
        <Webtoon
            uid={webtoon.uid}
            key={webtoon.uid}
            title={webtoon.title}
            image={webtoon.image}
            read_count={webtoon.read_count}
            author={webtoon.author}
          />
      );
    }}
  </Query>
  </Container>
);

export default Home;
