import {gql} from "@apollo/client"

const query = gql`
query PathbookData($pathbookId: String!) {
 pathbook(id: $pathbookId) {
    audiobook
    active
    author {
      id
      name
    }
    classification
    grades
    genres {
      en
      es
    }
    id
    metadata {
      audio
      cover
      id
      language
      summary
      tags
      title
    }
    type
    readingLevel {
      id
      level
      en
      es
    }
    qualities {
      id
      en
      es
    }
    readingTime
    quiz
    quizLangs
    age
    academicFile {
      active
      activities {
        activity {
          active
          content {
            en
            es
          }
          ability {
            en
            es
          }
          comprehension {
            en
            es
          }
          title {
            en
            es
          } 
        }
        homework {
          active
          content {
            en
            es
          }
          title {
            en
            es
          }
          ability {
            en
            es
          }
          comprehension {
            en
            es
          }
        }
      }
      ambit {
        en
        es
      }
      socialPractices {
        en
        es
      }
      theme {
        en
        es
      }
      tag {        
        en
        es
      }
      comprehension
    }
    englishLevel
    languages
    endings
    endingsWriter
    endingsShort
    questionsBeforeReading
    contentCount {
      en {
        characters
        words
      }
      es {
        characters
        words
      }
    }
  }
}
`
export default query;