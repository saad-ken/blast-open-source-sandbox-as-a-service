const { createApp } = Vue;
const { defaultConfig } = require('./config');
const { Sandbox } = require('./sandbox');
const { Commands } = require('./commands');
const { Models } = require('./models');
const { Views } = require('./views');

const app = createApp({
  data() {
    return {
      config: defaultConfig,
      sandbox: new Sandbox(this.config),
      commands: new Commands(this.config, this.sandbox),
      models: new Models(this.config),
      views: new Views(this.config, this.sandbox, this.commands, this.models),
    };
  },
  methods: {
    start() {
      this.views.render();
    },
  },
  mounted() {
    this.start();
  },
});

app.mount('#app');
