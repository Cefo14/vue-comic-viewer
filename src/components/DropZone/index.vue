<template>
  <div
    class="drop-zone__container"
    @click.stop="openInputFile"
  >
    <drop
      @drop="handleDrop"
      class="drop-zone__drop"
    >
      <slot>
        <div class="drop-zone__message">
          {{ this.message }}
        </div>
      </slot>
    </drop>
    <input
      type="file"
      class="drop-zone__input-file"
      :multiple="multiple"
      ref="inputFile"
      @change.stop="handleChange"
      :accept="acceptToString"
    />
  </div>
</template>

<script>
import { Drop } from 'vue-drag-drop';

/**
 * @param {File} file
 * @param {Array} accepted
 * @returns {Boolean}
 */
const fileIsValid = (file, accepted) => {
  const _fileExt = file.name.split('.').pop() || '';
  const fileExt = `.${_fileExt}`;

  const isAccepted = accepted.some((type) => {
    const regex = new RegExp(type, 'ig');
    return regex.test(fileExt);
  });

  return isAccepted;
};

/**
 * @param {File[]} files
 * @param {Array} accepted
 * @returns {Boolean}
 */
const filesAreValid = (files, accepted) => (
  files.every((file) => fileIsValid(file, accepted))
);

export default {
  name: 'DropZone',

  components: {
    Drop,
  },

  props: {
    accept: {
      type: Array,
      default: () => [],
    },

    multiple: {
      type: Boolean,
      default: false,
    },

    onDrop: {
      type: Function,
      default: () => {},
    },

    message: {
      type: String,
      default: 'Upload File',
    },
  },

  methods: {
    /**
     * @param {File[]} files
     */
    emitOnDrop(files) {
      const _files = this.multiple ? [...files] : [files[0]];
      const _filesAreValid = filesAreValid(_files, this.accept);

      if (_filesAreValid) this.$emit('onDrop', _files);
    },

    handleDrop(data, event) {
      const { files } = event.dataTransfer;
      this.emitOnDrop(files);
    },

    handleChange(event) {
      const { files } = event.target;
      this.emitOnDrop(files);
    },

    openInputFile() {
      this.$refs.inputFile.click();
    },
  },

  computed: {
    acceptToString() {
      return this.accept.join(',');
    },
  },
};
</script>

<style lang="scss" scoped>
  .drop-zone__container {
    cursor: pointer;
    border: dashed 2px #ffffff;
    width: 100%;
    height: 100%;
  }

  .drop-zone__drop {
    cursor: pointer;
    border: dashed 2px #ffffff;
    width: inherit;
    height: inherit;
  }

  .drop-zone__message {
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    height: 100%;
    font-size: 2rem;
  }

  .drop-zone__input-file {
    display: none;
  }
</style>
