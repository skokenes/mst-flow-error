"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mobx_state_tree_1 = require("mobx-state-tree");
const ModelA = mobx_state_tree_1.types
    .model({
    foo: mobx_state_tree_1.types.number
})
    .actions(self => {
    const setNumber = mobx_state_tree_1.flow(function* () {
        self.foo = yield Promise.resolve(Math.random());
    });
    return { setNumber };
});
exports.ModelA = ModelA;
//# sourceMappingURL=index.js.map