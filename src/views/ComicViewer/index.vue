<template>
  <div>
    <UploadComic
      v-if="noFile"
      @onExtractPages="onExtractPages"
    />
    <Viewer v-else :pages="pages" />
  </div>
</template>

<script>
import UploadComic from '../UploadComic';
import Viewer from '../Viewer';

export default {
  name: 'ComicViewer',

  components: {
    UploadComic,
    Viewer,
  },

  data() {
    return {
      pages: [],
    };
  },

  computed: {
    noFile() {
      return this.pages.length <= 0;
    },
  },

  methods: {
    /**
     * @param {File[]} pages
     */
    onExtractPages(pages) {
      this.pages = pages;
    },
  },
};
</script>

<style>

</style>
