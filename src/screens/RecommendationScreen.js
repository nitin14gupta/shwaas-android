import React, {useCallback} from 'react';
import Recommendation from '../components/Recommendation';
import {useFocusEffect} from '@react-navigation/native';
import {trackRecommendation} from '../analytics';

const RecommendationScreen = ({route, navigation}) => {
  useFocusEffect(
    useCallback(() => {
      trackRecommendation(route.params.recommendation.type);
      return () => {};
    }, [route]),
  );
  const {type, messages} = route.params.recommendation;

  return (
    <Recommendation
      data={type}
      messages={messages}
      navigation={navigation}
    />
  );
};

export default RecommendationScreen;
