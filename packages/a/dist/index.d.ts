declare const ModelA: import("mobx-state-tree").IModelType<{
    foo: import("mobx-state-tree").ISimpleType<number>;
}, {
    setNumber: () => Promise<void>;
}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>;
export { ModelA };
