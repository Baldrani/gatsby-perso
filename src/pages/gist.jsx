import React from "react"
import Layout from "../components/layout"
import withLocation from "../HOC/withLocation"

const gist = ({search}) => {
  const { id } = search
  return (
    <Layout>
      { gist ?
        () => {
         const {description} = gist
          return (
            <h1>{description}</h1>
          )
        }
        : ''
      }
    </Layout>
  )
}

export default withLocation(gist);
