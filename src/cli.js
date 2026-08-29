const { createApp } = Vue;
const { defaultConfig } = require('./config');
const { Sandbox } = require('./sandbox');
const { Commands } = require('./commands');
const { Models } = require('./models');
const { Views } = require('./views');
const { parseArgs } = require('minimist');
const { existsSync, readFileSync } = require('fs');

class CLI {
  constructor(config, sandbox, commands, models, views) {
    this.config = config;
    this.sandbox = sandbox;
    this.commands = commands;
    this.models = models;
    this.views = views;
  }

  async run() {
    const args = parseArgs(process.argv.slice(2), {
      string: ['execute', 'list', 'delete', 'add'],
      boolean: ['help'],
    });

    if (args.help) {
      this.showHelp();
      return;
    }

    if (args.execute) {
      try {
        const script = readFileSync(args.execute, 'utf8');
        await this.commands.executeScript(script);
      } catch (error) {
        console.error(error);
      }
    } else if (args.list) {
      this.commands.listModels();
    } else if (args.delete) {
      this.commands.deleteModel(args.delete);
    } else if (args.add) {
      const modelPath = args.add;
      if (!existsSync(modelPath)) {
        console.error(`Model file '${modelPath}' not found.`);
        return;
      }
      const modelData = readFileSync(modelPath, 'utf8');
      this.commands.addModel(JSON.parse(modelData));
    } else {
      this.views.render();
    }
  }

  showHelp() {
    console.log('Available commands:');
    console.log('  --help                  Show this help message');
    console.log('  --execute <script-file>  Execute a script file in the sandbox');
    console.log('  --list                  List all models');
    console.log('  --delete <model-name>  Delete a model by name');
    console.log('  --add <model-file>     Add a model from a file');
  }
}

module.exports = { CLI };
