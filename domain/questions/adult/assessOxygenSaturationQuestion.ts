import questionTypes from '../../questionTypes/QuestionType';
import {objectify, outputWeight} from '../utils';
import {Question} from "@/domain/Question";

export default key => {
  const show = form => form.accessToPulseOximeter === false;

  const output = form => {
    if (form[key] === 'yes') {
      return objectify(
        outputWeight.red,
        'oxygenSaturationFollowupQuestionsYellow',
      );
    }
    if (form[key] === 'unsure') {
      return objectify(
        outputWeight.yellow,
        'oxygenSaturationFollowupQuestionsYellow',
      );
    }
    return objectify(outputWeight.green);
  };

  return <Question> {
    key,
    label: key,
    type: questionTypes.singleChoice,
    options: ['yes', 'no', 'unsure'],
    show,
    output,
  };
};
