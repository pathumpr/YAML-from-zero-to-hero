import fs from 'fs';
import yaml from 'js-yaml';

try {
  // Read the yaml file
  const fileContents = fs.readFileSync('sample.yaml', 'utf8');

  // Parse yaml to JS object
  const data = yaml.load(fileContents);

  // Log in console
  console.log(data);
} catch (err) {
  console.error(err);
}