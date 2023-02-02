import { GraphQLClient, gql } from "graphql-request";
import {
  About,
  Work,
  Skills,
  Experiences,
  WorkExperience,
  Testimonial,
  Brand,
} from "types/types";

export const graphqlClient = new GraphQLClient(
  "https://graphql.contentful.com/content/v1/spaces/gvho3ukx3jhe/environments/master",
  {
    headers: {
      Authorization: `Bearer XNPE-YhemEyTmp1zv2bUO92vVN1WFudefQdLcZJkGvY`,
    }
  }
);

export function fetchAllCollection() {
  return graphqlClient.request<{
    aboutCollection: {
      items: About[];
    };
    workCollection: {
      items: Work[];
    };
    skillsCollection: {
      items: Skills[];
    };
    experiencesCollection: {
      items: Experiences[];
    };
    workExperienceCollection: {
      items: WorkExperience[];
    };
    testimonialCollection: {
      items: Testimonial[];
    };
    brandCollection: {
      items: Brand[];
    };
  }>(gql`
    query fetchAllCollection {
      aboutCollection {
        items {
          title
          description
          image {
            url
          }
        }
      }

      workCollection {
        items {
          title
          description
          projectLink
          codeLink
          image {
            url
          }
          tags
        }
      }
      skillsCollection {
        items {
          name
          bgColor
          icon {
            url
          }
        }
      }
      experiencesCollection {
        items {
          year
        }
      }
      workExperienceCollection {
        items {
          name
          company
          description
        }
      }
      testimonialCollection {
        items {
          name
          company
          image {
            url
          }
          feedback
        }
      }
      brandCollection {
        items {
          name
          image {
            url
          }
        }
      }
      
    }
  `);
}


