const { Models } = require('./models');

class Utils {
  static getModelByName(models, modelName) {
    return models.models[modelName] || null;
  }
}

module.exports = { Utils };
