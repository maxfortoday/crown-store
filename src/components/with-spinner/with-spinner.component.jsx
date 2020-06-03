import React from 'react';
import {SpinnerOverlay, SpinnerContainer} from './with-spinner.styles';

const WithSpinner = WrappedComponenet => {
 const spinner = ({isLoading, ...otherProps}) => {return isLoading ? (
  <SpinnerOverlay>
   <SpinnerContainer/>
  </SpinnerOverlay>
 ) : (
  <WrappedComponenet {...otherProps}/>
 )};

 return spinner
}

export default WithSpinner;