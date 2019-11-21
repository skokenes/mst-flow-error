# MST Flow Test

This repo contains two packages under `/packages`:

- **a**: creates and exports a MST model
- **test**: a sample React app with TypeScript

The **test** app tries to import the model from **a** and extend it with a new action that contains a flow.
The flow triggers the following error when the action is called:
`[mobx-state-tree] a mst flow must always have a parent context`

To see this in action:
```
cd packages/test
npm run start
```

And check the browser console for the error.

The store is set up and the flow is called in `packages/test/src/App.tsx`