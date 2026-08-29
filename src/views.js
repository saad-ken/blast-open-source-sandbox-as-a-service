const { defaultConfig } = require('./config');
const { Commands } = require('./commands');
const { Models } = require('./models');

class Views {
  constructor(config, sandbox, commands, models) {
    this.config = config;
    this.sandbox = sandbox;
    this.commands = commands;
    this.models = models;
  }

  render() {
    // Clear the current content of the view
    const viewContainer = document.getElementById('view-container');
    viewContainer.innerHTML = '';

    // Render a basic user interface for the application
    const interfaceDiv = document.createElement('div');
    interfaceDiv.className = 'interface';

    // Add a button to execute a script
    const executeButton = document.createElement('button');
    executeButton.textContent = 'Execute Script';
    executeButton.addEventListener('click', async () => {
      const script = prompt('Enter a script to execute:');
      if (script) {
        await this.commands.executeScript(script);
      }
    });
    interfaceDiv.appendChild(executeButton);

    // Add a button to list all models
    const listModelsButton = document.createElement('button');
    listModelsButton.textContent = 'List Models';
    listModelsButton.addEventListener('click', () => {
      this.commands.listModels();
    });
    interfaceDiv.appendChild(listModelsButton);

    // Add a button to delete a model
    const deleteModelButton = document.createElement('button');
    deleteModelButton.textContent = 'Delete Model';
    deleteModelButton.addEventListener('click', () => {
      const modelName = prompt('Enter the model name to delete:');
      if (modelName) {
        this.commands.deleteModel(modelName);
      }
    });
    interfaceDiv.appendChild(deleteModelButton);

    // Add a button to add a model
    const addModelButton = document.createElement('button');
    addModelButton.textContent = 'Add Model';
    addModelButton.addEventListener('click', () => {
      const modelName = prompt('Enter the model name:');
      const model = prompt('Enter the model details:');
      if (modelName && model) {
        this.commands.addModel({ name: modelName, details: model });
      }
    });
    interfaceDiv.appendChild(addModelButton);

    // Append the interface to the view container
    viewContainer.appendChild(interfaceDiv);
  }
}

module.exports = { Views };
