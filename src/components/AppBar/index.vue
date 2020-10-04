<template>
  <div>
    <v-app-bar>
      <v-app-bar-nav-icon
        @click="onOpenDrawer"
      />

      <v-toolbar-title>
        {{ title }}
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon @click="goToUploadPage">
        <v-icon>mdi-file-upload</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer
      class="app-bar__app-bar"
      v-model="localDrawerIsOpen"
      absolute
      temporary
    >
      <v-list nav dense>
        <v-list-item-group
          :value="currentFileIndex"
        >
          <v-list-item
            v-for="(file, index) in files"
            :key="`${file.name}-${index}`"
            @click="onClickFile(index, file)"
          >

            <v-list-item-title>
              {{ file.name }}
            </v-list-item-title>

            <v-list-item-action>
              <v-btn icon @click.stop="onDownload(index, file)">
                <v-icon color="grey lighten-1">mdi-download</v-icon>
              </v-btn>
            </v-list-item-action>

            <v-list-item-action>
              <v-btn icon @click.stop="onRemove(index, file)">
                <v-icon color="grey lighten-1">mdi-delete</v-icon>
              </v-btn>
            </v-list-item-action>
          </v-list-item>

        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-progress-linear
      value="-1"
      :active="isLoading"
      indeterminate
    />
  </div>
</template>

<script>
export default {
  name: 'AppBar',

  props: {
    title: {
      type: String,
      default: '',
    },

    drawerIsOpen: {
      type: Boolean,
      default: false,
    },

    files: {
      type: Array,
      default: () => [],
      validator(files) {
        return files
          .every((file) => file instanceof File);
      },
    },

    currentFileIndex: {
      type: Number,
      default: -1,
    },

    isLoading: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      localDrawerIsOpen: this.drawerIsOpen,
    };
  },

  watch: {
    drawerIsOpen() {
      this.localDrawerIsOpen = this.drawerIsOpen;
    },
  },

  methods: {
    onOpenDrawer() {
      this.localDrawerIsOpen = true;
      this.$emit('onOpenDrawer', true);
    },

    onClickFile(index, file) {
      this.localDrawerIsOpen = false;
      this.$emit('onClickFile', index, file);
    },

    onDownload(index, file) {
      this.$emit('onDownload', index, file);
    },

    onRemove(index, file) {
      this.$emit('onRemove', index, file);
    },

    goToUploadPage() {
      this.$router.push({ name: 'upload' });
    },
  },
};
</script>

<style lang="scss" scoped>
  .app-bar__app-bar {
    width: 100% !important;
    max-width: 350px;
    @media (max-width: 768px) {
      max-width: 275px;
    }
  }
</style>
