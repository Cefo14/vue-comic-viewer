/**
 *
 * @param {*} state
 * @param {File[]} _files
 */
export const addFiles = (state, _files) => {
  const { files } = state;
  state.files = [...files, ..._files];
};

/**
 *
 * @param {*} state
 * @param {Number} fileIndex
 */
export const removeFile = (state, fileIndex) => {
  const { files } = state;
  const _files = [...files];

  _files.splice(fileIndex, 1);

  state.files = _files;
};

/**
 *
 * @param {*} state
 * @param {Number} currentFileIndex
 */
export const setCurrentFileIndex = (state, currentFileIndex) => {
  state.currentFileIndex = currentFileIndex;
};

/**
 *
 * @param {*} state
 */
export const setCurrentFileIndexToDefaultState = (state) => {
  state.currentFileIndex = -1;
};
