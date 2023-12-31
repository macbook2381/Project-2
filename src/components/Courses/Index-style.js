import styled from "styled-components";


export const HeadingContainer = styled.div`
`;

export const CourseSection = styled.section`
  padding: 2.5rem 0;
`;

export const FeaturesContainer = styled.div`
  display: grid;
  grid-template-rows: none;
  grid-auto-flow: row;
  place-items: center;
  column-gap: 0rem;
  row-gap: 2.5rem;
  margin: 1.5rem 0;

  @media screen and (min-width: 769px) {
    grid-template-columns: 1fr 1fr ;
    grid-template-rows: 1fr 1fr 1fr;
    column-gap: 1.5rem;
    row-gap: 3rem;
  }

  @media screen and (min-width:1025px){
     grid-template-columns: repeat(3,1fr);
     grid-template-rows: 1fr 1fr;
  }
`;
