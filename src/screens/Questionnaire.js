import {connect} from 'react-redux';
import React from 'react';
import {
  nextQuestion,
  previousQuestion,
  questionWithKey,
} from '../domain/questionStatus';
import Question from '../components/questions/Question';
import {
  goToNextQuestion,
  goToPreviousQuestion,
  setValue,
} from '../actions/form';
import BaseScreen from '../components/common/BaseScreen';
import {View} from 'react-native';
import PrevNextNavigator from '../components/PrevNextNavigator';
import questionTypes from '../domain/questionTypes';

const Questionnaire = ({
  form,
  currentQuestionKey,
  setValue,
  goToNextQuestion,
  goToPreviousQuestion,
}) => {
  const question = questionWithKey(currentQuestionKey);
  if (!question) {
    return null;
  }
  const value = form[question.key];

  const onAnswered = (question, value) => {
    setValue(question, value);
    if (question.type === questionTypes.boolean) {
      goToNextQuestion();
    }
  };

  return (
    <View style={{flex: 1}}>
      <BaseScreen>
        <Question
          number={1}
          question={question}
          value={value}
          onAnswered={onAnswered}
        />
      </BaseScreen>
      <PrevNextNavigator
        onPrevious={goToPreviousQuestion}
        onNext={goToNextQuestion}
        firstPage={!previousQuestion(form, currentQuestionKey)}
        lastPage={!nextQuestion(form, currentQuestionKey)}
      />
    </View>
  );
};

const mapStateToProps = ({form: {form, currentQuestionKey}}) => ({
  form,
  currentQuestionKey,
});
export default connect(mapStateToProps, {
  setValue,
  goToNextQuestion,
  goToPreviousQuestion,
})(Questionnaire);
