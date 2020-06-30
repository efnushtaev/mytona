import React from 'react';
import {withAuthRedirection} from '../../hoc/withAuthRedirection';
import {compose} from 'redux';

const MainPage = () => {
  return (
    <h1 className={"display-1 text-black-50 text-center mt-5"}>MYTONA TEST</h1>
  )
}

export default compose(withAuthRedirection)(MainPage)