<template>
  <v-container class="upload-comic__v-container">
    <div class="upload-comic__container">
      <h1 class="upload-comic__title">
          Comic Viewer
      </h1>
      <v-card
        class="upload-comic__card"
        :loading="isLoading"
        :disabled="isLoading"
      >
        <DropZone
          :accept="accept"
          @onDrop="addFiles"
          multiple
        >
          <h2 class="upload-comic__drop-zone_message">
            {{ dropZoneMessage }}
          </h2>
        </DropZone>
      </v-card>
    </div>
  </v-container>
</template>

<script>
import { mapMutations } from 'vuex';
import DropZone from '../../components/DropZone';

export default {
  name: 'UploadComic',

  components: {
    DropZone,
  },

  data() {
    return {
      isLoading: false,
      accept: ['.cbz', '.cbr', '.pdf'],
    };
  },

  methods: {
    ...mapMutations('files', { _addFiles: 'addFiles' }),

    /**
     * @param {File[]} files
     */
    addFiles(files) {
      this._addFiles(files);
      this.$router.push({
        name: 'viewer',
      });
    },
  },

  computed: {
    dropZoneMessage() {
      return `Drop or Click To Upload File ( ${this.accept.join(', ')} )`;
    },
  },
};
</script>

<style lang="scss" scoped>
  .upload-comic__v-container {
    padding-top: 0;
    padding-bottom: 0;
  }

  .upload-comic__container {
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    justify-items: center;
    flex-direction: column;
    width: 100%;
    height: 100vh;
  }

  .upload-comic__title {
    flex: 0;
    margin-bottom: 24px;
    font-size: 6rem;

    @media (max-width: 768px) {
      font-size: 4rem;
    }
  }

  .upload-comic__card {
    width: 100%;
    height: 25vh;
  }

  .upload-comic__drop-zone_message {
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    height: 100%;
    font-size: 3rem;
    text-align: center;
    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }
</style>
