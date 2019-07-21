import React from "react"
import Layout from "../components/layout"
import withLocation from "../HOC/withLocation"

const getGist = (id) => {
  fetch(`https://api.github.com/gists/${id}`)
    .then(data => data.json())
    .then(data => data)
}

const gist = ({search}) => {
  const { id } = search
  const gist = getGist(id)
  return (
    <Layout>
      <h1>{gist?.description}</h1>
    </Layout>
  )
}

export default withLocation(gist);
