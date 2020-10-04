<template>
  <v-card
    :disabled="isLoading"
    class="page-galery__card"
  >
    <Photoswipe class="page-galery__image-container">
      <v-row>
        <v-col
          cols="6"
          lg="4"
          md="4"
          v-for="url in imageURLS"
          :key="url"
        >
          <img
            :src="url"
            v-pswp="url"
          />
        </v-col>
      </v-row>
    </Photoswipe>
  </v-card>
</template>

<script>
export default {
  name: 'PageGalery',

  props: {
    isLoading: {
      type: Boolean,
      default: false,
    },

    imageURLS: {
      type: Array,
      default: () => [],
      validator(imageURLS) {
        return imageURLS
          .every((url) => typeof url === 'string');
      },
    },
  },
};
</script>

<style lang="scss" scoped>
  .page-galery__card {
    padding: 0px 16px;
  }

  .page-galery__image-container {
    & img {
      width: 100%;
      max-height: 100vh;
      object-fit: contain
    }
  }
</style>
