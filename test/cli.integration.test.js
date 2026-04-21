const { execSync } = require('child_process');
const path = require('path');

const cliPath = path.resolve(__dirname, '../bin/cli.js');

//tests the CLI command execution 
describe('CLI mulch calculator', () => {
  test('calculates mulch correctly', () => {
    const output = execSync(`node ${cliPath} mulch 10 5 10`).toString();

    expect(output).toContain('5 cubic meters');
    expect(output).toContain('100 bags');
  });

  test('fails on non-numeric input', () => {
    try {
      execSync(`node ${cliPath} mulch a b c`);
    } catch (error) {
      const output = error.stderr.toString();
      expect(output).toContain('All arguments must be numbers');
    }
  });

  test('fails on negative input', () => {
    try {
      execSync(`node ${cliPath} mulch -1 5 10`);
    } catch (error) {
      const output = error.stderr.toString();
      expect(output).toContain('All values must be positive');
    }
  });
});