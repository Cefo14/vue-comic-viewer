<template>
  <div class="upload-comic__container">
    <h1 class="upload-comic__title">
        Comic Reader
    </h1>
    <v-alert
      dense
      title
      color="red"
      class="upload-comic__alert-error"
      v-show="error"
    >
      {{ error }}
    </v-alert>
    <v-card
      class="upload-comic__card"
      :loading="isLoading"
      :disabled="isLoading"
    >
      <DropZone
        :accept="accept"
        @onDrop="extractPages"
      >
        <h2 class="upload-comic__drop-zone_message">
          {{ dropZoneMessage }}
        </h2>
      </DropZone>
    </v-card>
  </div>
</template>

<script>
import DropZone from '../../components/DropZone';
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
  name: 'UploadComic',

  components: {
    DropZone,
  },

  data() {
    return {
      isLoading: false,
      accept: ['.cbz', '.cbr', '.pdf'],
      error: '',
    };
  },

  methods: {
    /**
     * @param {File[]} files
     */
    async extractPages(files) {
      this.isLoading = true;
      const [file] = files;

      try {
        const uncompressFactory = new UncompressFactory();
        const uncompress = await uncompressFactory.create(file);
        const pages = await uncompress.extract();
        const sortedPages = sortPagesByName(pages);
        this.$emit('onExtractPages', sortedPages);
      }

      catch (e) {
        this.error = e.message;
      }

      finally {
        this.isLoading = false;
      }
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
  @import url('https://fonts.googleapis.com/css2?family=Bangers&display=swap');

  .upload-comic__container {
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    justify-items: center;
    flex-direction: column;
    width: 100%;
    height: 100vh;

    & .upload-comic__title,
    & .upload-comic__drop-zone_message {
      font-family: 'Bangers', cursive;
    }
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

  .upload-comic__alert-error {
    width: 100%;
    text-align: center;
    margin: 0;
    margin-bottom: 8px;
    text-transform: capitalize;
  }
</style>
