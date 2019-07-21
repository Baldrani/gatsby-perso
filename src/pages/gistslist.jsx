import React, {Fragment} from "react"
import Layout from "../components/layout"
import request from "request-promise";
import {Link} from "gatsby"

import styled from 'styled-components/macro';


const GistTitle = styled.h3`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;


const getGists = async () => {
  const body = await request(`https://api.github.com/users/Baldrani/gists`);
  const content = JSON.parse(body);
  return content
}

export default () => {
  const gists = getGists()
  if (gists !== undefined) { console.log(gists) }
  return (
    <Layout>
      <div>
        <p>Gists</p>
        { gists?.map( gist => {
            return(
              <Fragment key={gist.id}>
                <GistTitle><Link to={`/gist?id=${gist.id}`}>{gist.description}</Link></GistTitle>
              </Fragment>
            )
          })
        }
      </div>
    </Layout>
  )
}