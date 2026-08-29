const { Models } = require('./models');
const { Sandbox } = require('./sandbox');

class Commands {
  constructor(config, sandbox) {
    this.config = config;
    this.sandbox = sandbox;
    this.models = new Models(config);
  }

  // Command to execute a script
  async executeScript(script) {
    try {
      const result = await this.sandbox.execute(script);
      this.models.logResult(result);
    } catch (error) {
      this.models.logError(error);
    }
  }

  // Command to list all models
  listModels() {
    this.models.listAll();
  }

  // Command to delete a model
  deleteModel(modelName) {
    this.models.deleteModel(modelName);
  }

  // Command to add a model
  addModel(model) {
    this.models.addModel(model);
  }
}

module.exports = { Commands };
