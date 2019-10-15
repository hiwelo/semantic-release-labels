import { exec } from './exec';

const testCommand = 'git log --oneline';

describe('Utility > Shell > Exec', () => {
  it('should execute a function and return a string as a result', () => {
    const result = exec(testCommand);

    expect(typeof result).toBe('string');
  });

  it('should execute a function and return an array as a result', () => {
    const result = exec(testCommand, 'array');

    expect(Array.isArray(result)).toBeTruthy();
  });
});
