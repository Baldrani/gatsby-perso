import React, {Fragment} from "react"
import Layout from "../components/layout"
import {Link, graphql} from "gatsby"

import styled from 'styled-components/macro';


const GistTitle = styled.h3`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

export default (props) => {

  const gists = props.data.allGist.edges;


  return (
    <Layout>
      <div>
        <p>Gists</p>
        { gists.map( gist => {
            const {id, description} = gist.node
            return(
              <Fragment key={id}>
                <GistTitle><Link to={`/gist?id=${id}`}>{description}</Link></GistTitle>
              </Fragment>
            )
          })
        }
      </div>
    </Layout>
  )
}

export const query = graphql`
    query GistssQuery {
        allGist {
            edges {
                node {
                    id
                    description
                }
            }
        }
    }
`;