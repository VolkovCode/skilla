import {estimationValue} from "../../ui/adds/estimationValue";

import React, {memo} from 'react';


export const EstimationScam = memo( () => {

  return (
      <div>
        {estimationValue(Math.random())}
        </div>
  );
});




