import React from 'react';

export const WidgetPage = (props) => {
  return (
    <div>
      <h4>Weather in the city should be here</h4>
      <p>{props.match.params.id || 498817}</p>
    </div>
  )
}