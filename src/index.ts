import { Application } from 'probot' // eslint-disable-line no-unused-vars


let labels = [
  { name: "Priority: Low", color: "DAF7A6", description: "A Issue With Low Priority" },
  { name: "Priority: Medium", color: "FFC300", description: "A Issue With Medium Priority" },
  { name: "Priority: High", color: "FF5733", description: "A Issue With High Priority" },
  { name: "Priority: Critical", color: "C70039", description: "A Issue With Critical Priority" }
]


const addLabel = `
  mutation label($id: ID!, $name: String!, $color: String!, $description: String!) {
    createLabel(input: {repositoryId: $id, name: $name, color: $color, description: $description}) {
      clientMutationId
    }
  }
`

export = (app: Application) => {
  app.on('repository.created', async (context) => {
    for (let label of labels) {
      context.github.graphql(addLabel, {
        id: context.payload.repository.node_id,
        name: label.name,
        color: label.color,
        description: label.description,
        headers: {
          accept: 'application/vnd.github.bane-preview+json'
        }
      });
    }
  });
}
