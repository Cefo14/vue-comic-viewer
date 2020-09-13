<template>
  <div>
    <Photoswipe
      class="viewer__image-container"
    >
    <v-row>
      <v-col
        cols="6"
        v-for="url in urls"
        :key="url"
      >
        <img
            :src="url"
            v-pswp="url"
        />
      </v-col>
    </v-row>
    </Photoswipe>
  </div>
</template>

<script>
export default {
  name: 'Viewer',

  props: {
    pages: {
      type: Array,
      default: () => [],
      validator: (pages) => pages.every((page) => page instanceof File),
    },
  },

  computed: {
    urls() {
      return this.pages.map((page) => URL.createObjectURL(page));
    },
  },
};
</script>

<style lang="scss" scoped>
  .viewer__image-container {
    & img {
      width: 100%;
      max-height: 100vh;
      object-fit: contain
    }
  }
</style>
