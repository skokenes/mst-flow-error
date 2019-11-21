import { types, flow } from "mobx-state-tree";

const ModelA = types
  .model({
    foo: types.number
  })
  .actions(self => {
    const setNumber = flow(function*() {
      self.foo = yield Promise.resolve(Math.random());
    });

    return { setNumber };
  });

export { ModelA };
