import { gql } from "@apollo/client";

const query = gql`
  query GetResources($pathbook: String!) {
    resources(pathbook: $pathbook) {
      banner
      description
      file
      grades
      id
      name
      type
      userRoles
      pathbook {
        active
        metadata {
          title
        }
        id
      }
    }
  }
`;

export default query;