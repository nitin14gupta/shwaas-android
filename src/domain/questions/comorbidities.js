import questionTypes from '../questionTypes';
import {alwaysShow, objectify, outputWeight} from './utils';

const key = 'comorbidities';

const output = form => {
  const values = form[key] || [];
  if (values.find(value => value === 'kidneyDisease')) return objectify(outputWeight.red);
  if (values.length > 0) return objectify(outputWeight.yellow);
  return (outputWeight.green);
};

export default {
  key,
  type: questionTypes.multichoice,
  options: [
    'diabetes',
    'hypertension',
    'heartDisease',
    'asthma',
    'lungDisease',
    'sickleCellDisease',
    'liverDisease',
    'kidneyDisease',
    'pregnancy',
    'obesity',
    'underNutrition',
    'anemia',
    'hiv',
    'cancer',
  ],
  show: alwaysShow,
  output,
};
