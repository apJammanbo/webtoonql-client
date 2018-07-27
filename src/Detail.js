import React from "react";
import { Query } from "react-apollo";
import { WEBTOON_DETAILS } from "./queries";
import Webtoon from "./Webtoon";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  margin-bottom: 50px;
`;

const Card = styled.div`
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  background-color: white;
  border-radius: 7px;
`;

const Image = Card.withComponent("img");

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 10px;
`;

const Paragraph = styled.span`
  margin-bottom: 10px;
  display: block;
  font-weight: ${props => (props.bold ? "500" : "400")};
`;

const MovieContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 0.7fr);
  flex-wrap: wrap;
  justify-items: center;
  margin-top: 50px;
`;

const Detail = ({
  match: {
    params: { uid }
  }
}) => (
  <Query query={WEBTOON_DETAILS} variables={{ uid }}>
    {({ loading, error, data }) => {
      if (loading) return "loading";
      if (error) return "error";
      return (
        <React.Fragment>
          <Container>
            <Image src={data.webtoon.image} />
            <span>
              <Title>{data.webtoon.title}</Title>
              <Paragraph bold>Rating: {data.webtoon.read_count}</Paragraph>
              <Paragraph>{data.webtoon.caption}</Paragraph>
            </span>
          </Container>
          <Title>Suggested</Title>
          <MovieContainer>
            {data.sameTypeWebtoons.map(webtoon => (
                <Webtoon
                uid={webtoon.uid}
                key={webtoon.uid}
                title={webtoon.title}
                image={webtoon.image}
                read_count={webtoon.read_count}
                author={webtoon.author}
              />
            ))}
          </MovieContainer>
        </React.Fragment>
      );
    }}
  </Query>
);

export default Detail;
