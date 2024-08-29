import { gql } from "@apollo/client";

const query = gql`
  query Plans($grade: Grade!) {
    readingPlans(grade: $grade) {
      grade
      id
      name {
        de
        en
        fr
        es
        it
        nl
        pt
      }
      pathbooks {
        active
        age
        audiobook
        classification
        endings
        endingsShort
        endingsWriter
        englishLevel
        free
        gradeFilter
        grades
        id
        questionsBeforeReading
        quiz
        quizLangs
        readingTime
        type
        version
        languages
        metadata {
          title
          tags
          summary
          language
          id
          cover
          audiobookCover
          audio
        }
      }
    }
  }
`;

export default query;
