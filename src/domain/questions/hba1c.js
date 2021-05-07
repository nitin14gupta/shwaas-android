import questionTypes from '../questionTypes';
import {objectify, outputWeight} from './utils';

const key = 'hba1c';

const show = ({comorbidities = [], ...form}) =>
  comorbidities.includes('diabetes') && form.recentBloodSugarReport;

const output = form =>
  form[key] === 'lessThan7' ? objectify(outputWeight.green) : objectify(outputWeight.yellow);

export default {
  key,
  type: questionTypes.singleChoice,
  options: ['lessThan7', 'moreThan7', 'dontKnow'],
  show,
  output,
};
