<template>
  <QuickstartLayout>
    <section class="qs-step">
      <div class="qs-step__head">
        <h1 class="qs-title">Record AppMaps</h1>
      </div>
      <div class="qs-step__block">
        <div>
          <p class="mb20 qs-step__margin">
            The two primary methods for creating AppMaps are recording test
            cases or remote recording -- recording what is happening on your
            application server as it runs.
          </p>
          <p class="mb20">Record AppMaps for your language:</p>
          <p class="mb20" v-if="editor === 'vscode'">
            <a
              href="https://appland.com/docs/quickstart/vscode/java-step-3.html"
              >Java</a
            >&nbsp;&nbsp;|&nbsp;&nbsp;<a
              href="https://appland.com/docs/quickstart/vscode/javascript-step-3.html"
              >JavaScript</a
            >&nbsp;&nbsp;|&nbsp;&nbsp;<a
              href="https://appland.com/docs/quickstart/vscode/python-step-3.html"
              >Python</a
            >&nbsp;&nbsp;|&nbsp;&nbsp;<a
              href="https://appland.com/docs/quickstart/vscode/ruby-step-3.html"
              >Ruby</a
            >
          </p>
          <p class="mb20" v-if="editor === 'jetbrains'">
            <a href="https://appland.com/docs/quickstart/intellij/step-3"
              >Java</a
            >&nbsp;&nbsp;|&nbsp;&nbsp;<a
              href="https://appland.com/docs/quickstart/webstorm/step-3"
              >JavaScript</a
            >&nbsp;&nbsp;|&nbsp;&nbsp;<a
              href="https://appland.com/docs/quickstart/pycharm/step-3"
              >Python</a
            >&nbsp;&nbsp;|&nbsp;&nbsp;<a
              href="https://appland.com/docs/quickstart/rubymine/step-3"
              >Ruby</a
            >
          </p>
        </div>

        <p>
          After you have recorded AppMaps proceed to
          <a href="#" @click="goToOpenAppmaps"><b>Open AppMaps</b></a>
        </p>
      </div>
    </section>
  </QuickstartLayout>
</template>

<script>
import QuickstartLayout from '@/components/quickstart/QuickstartLayout.vue';

export default {
  name: 'QuickstartDocsRecordAppMaps',

  components: {
    QuickstartLayout,
  },

  props: {
    editor: {
      type: String,
      required: true,
      default: 'vscode',
      validator: (value) => ['vscode', 'jetbrains'].indexOf(value) !== -1,
    },
  },

  methods: {
    goToOpenAppmaps(event) {
      event.preventDefault();
      event.stopImmediatePropagation();
      this.$root.$emit('transition', 'OPEN_APPMAPS');
    },
  },
};
</script>
