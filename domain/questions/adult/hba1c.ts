import questionTypes from '../../questionTypes/QuestionType';
import {objectify, outputWeight} from '../utils';
import {Question} from "@/domain/Question";

const key = 'hba1c';

const show = ({comorbidities = [], ...form}) =>
  comorbidities.includes('diabetes') && form.recentBloodSugarReport;

const output = form =>
  form[key] === 'lessThan7'
    ? objectify(outputWeight.green)
    : objectify(outputWeight.yellow);

export default <Question>{
  key,
  label: key,
  type: questionTypes.singleChoice,
  options: ['lessThan7', 'moreThan7', 'dontKnow'],
  show,
  output,
};
