import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import yaml from 'js-yaml';

// process.cwd() is the project root in both dev and build contexts
const dataDir = join(process.cwd(), 'src/data');

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function loadYaml<T = any>(file: string): T {
  return yaml.load(readFileSync(join(dataDir, file), 'utf-8')) as T;
}
