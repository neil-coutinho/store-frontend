// BOILERPLATE
export default function paginationField() {
  return {
    keyArgs: false,
    read: (existing = [], { args, cache }) => {
      const { skip, firs } = args;
    },

    merge() {},
  };
}
