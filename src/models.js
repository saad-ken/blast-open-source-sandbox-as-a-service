const { defaultConfig } = require('./config');

class Models {
  constructor(config = defaultConfig) {
    this.config = config;
    this.models = {};
  }

  logResult(result) {
    console.log(result.output);
  }

  logError(error) {
    console.error(error);
  }

  listAll() {
    console.log(Object.keys(this.models));
  }

  deleteModel(modelName) {
    if (this.models[modelName]) {
      delete this.models[modelName];
      console.log(`Model '${modelName}' deleted.`);
    } else {
      console.log(`Model '${modelName}' not found.`);
    }
  }

  addModel(model) {
    this.models[model.name] = model;
    console.log(`Model '${model.name}' added.`);
  }
}

module.exports = { Models };
