import questionTypes from '../../questionTypes/QuestionType';
import {objectify, outputWeight} from '../utils';
import {Question} from "@/domain/Question";

const key = 'bmi';

const value = form => {
  const {height, weight} = form;
  return form.weight && form.height
    ? parseFloat(((10000 * weight) / height / height).toFixed(2))
    : 0;
};

const show = form => {
  return form.weight > 0 && form.height > 0;
};

const output = form => {
  const bmi = value(form);
  return bmi > 16 || bmi < 25
    ? objectify(outputWeight.green)
    : objectify(outputWeight.yellow);
};

export default <Question>{
  key,
  label: key,
  type: questionTypes.information,
  show,
  output,
  value,
};
