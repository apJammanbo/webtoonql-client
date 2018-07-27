import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Card = styled.div`
  border-radius: 15px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  background-image: ${props => `url(https://dn-img-page.kakao.com/download/resource?kid=${props.background})`};
  background-size: cover;
  background-position: center center;
  height: 300px;
  width: 450px;
  margin-bottom: 40px;
  position: relative;
`;

const Title = styled.span`
  background-color: white;
  width: auto;
  padding: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  position: absolute;
  bottom: 25px;
  left: 0;
  right: 0;

  margin: auto;
`;

const Webtoon = ({ uid, title, image, read_count, author}) => (
  <Link to={`/details/${uid}`}>
    <Card background={image}> 
      <Title>
        {title} /  {Math.floor(read_count / 10000)}만명 / {author}
      </Title>
    </Card>
  </Link>
);

Webtoon.propTypes = {
  uid: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  read_count: PropTypes.number.isRequired,
  author: PropTypes.string.isRequired,
};

export default Webtoon;
