const core = require('@actions/core');

try {
  const username = core.getInput('username', { required: true });
  const greeting = core.getInput('greeting');
  const message = `${greeting}, ${username}!`;

  core.info(message);
  core.setOutput('message', message);
} catch (error) {
  core.setFailed(error.message);
}