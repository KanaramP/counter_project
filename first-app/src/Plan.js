import React from 'react';

function Plan({items,text}) {

    return (
        <>
          {  items.map((e)=><li key={e}>{e}</li>)}
        </>
    );
}

export default Plan;