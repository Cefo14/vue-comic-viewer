<template>
  <div id="app">
    <v-app id="inspire">
      <v-container class="py-0">
        <ComicViewer />
      </v-container>
    </v-app>
  </div>
</template>

<script>
import ComicViewer from './views/ComicViewer';

export default {
  name: 'App',
  components: {
    ComicViewer,
  },
};
</script>
