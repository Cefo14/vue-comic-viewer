export const haveFiles = (state) => (
  state.files.length > 0
);

export const haveNoFiles = (state) => (
  state.files.length <= 0
);

export const currentFile = (state) => {
  const { files, currentFileIndex } = state;
  return files[currentFileIndex];
};
