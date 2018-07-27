import gql from "graphql-tag";

export const HOME_PAGE = gql `
  query {
  webtoons(limit: 50) {
      uid
      title
      caption
      read_count
      image
      author
  }
}`;

export const WEBTOON_DETAILS = gql`
  query sameTypeWebtoons($uid: uid!) {
    webtoon(uid: $uid) {
      uid
      title
      aption
      read_count
      image
      author 
    }
    sameTypeWebtoons(uid: $uid) {
        uid
        titie 
    } 
  }
`;

