<template>
  <div>
    <AppBar
      :title="currentFile ? currentFile.name : 'Comic Viewer'"
      :files="files"
      :drawerIsOpen="drawerIsOpen"
      :isLoading="isLoading"
      :currentFileIndex="currentFileIndex"
      @onClickFile="setCurrentFileIndex"
      @onDownload="downloadFile"
      @onRemove="removeFile"
    />
    <v-alert
      dense
      title
      color="red"
      class="viewer__alert-error"
      v-show="error"
    >
      {{ error }}
    </v-alert>
    <PageGalery
      :isLoading="isLoading"
      :imageURLS="urls"
    />
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters } from 'vuex';
import AppBar from '../../components/AppBar';
import PageGalery from '../../components/PageGalery';

import UncompressFactory from '../../utils/uncompress/UncompressFactory';

/**
 * @param {File[]} pages
 * @returns {File[]}
 */
const sortPagesByName = (pages) => {
  const _pages = [...pages];
  return _pages.sort((a, b) => {
    if (a.name > b.name) return 1;
    if (a.name < b.name) return -1;
    return 0;
  });
};

export default {
  name: 'Viewer',

  components: {
    AppBar,
    PageGalery,
  },

  mounted() {
    this.setCurrentFileIndex(-1);
  },

  data() {
    return {
      pages: [],
      isLoading: false,
      error: '',
      drawerIsOpen: true,
    };
  },

  computed: {
    ...mapState('files', ['files', 'currentFileIndex']),
    ...mapGetters('files', ['currentFile']),
    urls() {
      return this.pages.map((page) => URL.createObjectURL(page));
    },
  },

  watch: {
    currentFile(newCurrentFile, oldCurrentFile) {
      if (newCurrentFile !== oldCurrentFile) {
        if (this.currentFile) this.extractPages(this.currentFile);
        else this.pages = [];
      }
    },
  },

  methods: {
    ...mapMutations('files', {
      _setCurrentFileIndex: 'setCurrentFileIndex',
      _removeFile: 'removeFile',
      setCurrentFileIndexToDefaultState: 'setCurrentFileIndexToDefaultState',
    }),

    /**
     * @param {Number} index
     */
    setCurrentFileIndex(index) {
      this._setCurrentFileIndex(index);
    },

    /**
     * @param {Number} index
     */
    downloadFile(index) {
      const file = this.files[index];
      const url = URL.createObjectURL(file);
      window.open(url, '_blank');
    },

    /**
     * @param {Number} index
     */
    removeFile(index) {
      if (index === this.currentFileIndex) this.setCurrentFileIndexToDefaultState();
      else if (index < this.currentFileIndex) this.setCurrentFileIndex(this.currentFileIndex - 1);
      this._removeFile(index);
    },

    /**
     * @param {File} file
     */
    async extractPages(file) {
      this.isLoading = true;

      try {
        const uncompressFactory = new UncompressFactory();
        const uncompress = await uncompressFactory.create(file);
        const pages = await uncompress.extract();
        const sortedPages = sortPagesByName(pages);

        this.pages = sortedPages;
      }

      catch (e) {
        this.error = e.message;
      }

      finally {
        this.isLoading = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
  .viewer__alert-error {
    width: 100%;
    text-align: center;
    margin: 0;
    margin-bottom: 8px;
    text-transform: capitalize;
  }
</style>
