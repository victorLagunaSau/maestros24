import { gql } from "@apollo/client";
const query = gql`
    query GetResources($grade: Grade!) {
        resources(grade: $grade) {
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

