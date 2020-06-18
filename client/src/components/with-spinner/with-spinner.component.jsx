import React from 'react';
import Spinner from '../spinner/spinner.component';

const WithSpinner = WrappedComponenet => ({isLoading, ...otherProps}) => {
return isLoading ? <Spinner/> : <WrappedComponenet {...otherProps}/> };

export default WithSpinner;