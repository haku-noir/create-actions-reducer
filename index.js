const fs = require('fs-extra');

const getSrcDir = dir => {
  let srcDir = `${dir}/src`;

  dir.split('/').forEach((dirItem, index) => {
    if(dirItem === 'src')
      srcDir = dir.split('/').slice(0, index).join('/') + '/src';
  });

  return srcDir;
}

const getHeadLower = str => str.slice(0, 1).toLowerCase() + str.slice(1);
const getHeadUpper = str => str.slice(0, 1).toUpperCase() + str.slice(1);

module.exports = (name, minimum) => {
  const srcDir = getSrcDir(process.cwd());

  if(!name){
    console.log('<reducer_name> is required');
    process.exit();
  }
  const xxx = getHeadLower(name);
  const XXX = getHeadUpper(name);

  Promise.resolve()
    .then(() => (
      minimum ?
        fs.readFile(`${__dirname}/minimum/minimumActions.ts`, 'utf8') :
        fs.readFile(`${__dirname}/sample/sampleActions.ts`, 'utf8')
    ))
    .then(data => {
      const replacedData = data.replace(/xxx/g, xxx).replace(/XXX/g, XXX);
      return fs.outputFile(`${srcDir}/actions/${xxx}Actions.ts`, replacedData);
    })
    .then(() => (
      minimum ?
        fs.readFile(`${__dirname}/minimum/minimumReducer.ts`, 'utf8') :
        fs.readFile(`${__dirname}/sample/sampleReducer.ts`, 'utf8')
    ))
    .then(data => {
      const replacedData = data.replace(/xxx/g, xxx).replace(/XXX/g, XXX);
      return fs.outputFile(`${srcDir}/reducers/${xxx}Reducer.ts`, replacedData);
    })
    .catch(err => {
      console.log('Fail!');
      console.error(err)
    });
}
