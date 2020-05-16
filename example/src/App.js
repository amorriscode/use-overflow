import React from 'react';

import { useOverflow } from 'use-overflow';

const App = () => {
  const horizonstalRef = React.useRef(null);
  const { refXOverflowing, refXScrollBegin, refXScrollEnd } = useOverflow(horizonstalRef);

  const verticalRef = React.useRef(null);
  const { refYOverflowing, refYScrollBegin, refYScrollEnd } = useOverflow(verticalRef);

  return (
    <div className="container">
      <div className="horizontal-overflow-container">
        <div className="horizontal-overflow-content" ref={horizonstalRef}>
          Scroll me! -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------->
        </div>

        {refXOverflowing && !refXScrollBegin && <div className="horizontal-gradient-left"></div>}

        {refXOverflowing && !refXScrollEnd && <div className="horizontal-gradient-right"></div>}
      </div>

      <div className="vertical-overflow-container">
        <div className="vertical-overflow-content" ref={verticalRef}>
          <div>Scroll me!</div>
          <div>|</div>
          <div>|</div>
          <div>|</div>
          <div>|</div>
          <div>|</div>
          <div>|</div>
          <div>|</div>
          <div>|</div>
          <div>|</div>        
          <div>|</div>
          <div>|</div>
          <div>|</div>
          <div>|</div>
          <div>|</div>
          <div>|</div>
          <div>|</div>
          <div>|</div>
          <div>|</div>        
          <div>|</div>
          <div>|</div>
          <div>|</div>
          <div>|</div>
          <div>|</div>
          <div>|</div>
          <div>|</div>
          <div>|</div>
          <div>|</div>        
          <div>|</div>
          <div>|</div>
          <div>|</div>
          <div>|</div>
          <div>|</div>
          <div>|</div>
          <div>|</div>
          <div>|</div>
          <div>|</div>        
          <div>|</div>
          <div>|</div>
          <div>|</div>
          <div>|</div>
          <div>|</div>
          <div>|</div>
          <div>|</div>
          <div>|</div>
          <div>|</div>        
          <div>|</div>
          <div>|</div>
          <div>|</div>
          <div>|</div>
          <div>|</div>
          <div>|</div>
          <div>|</div>
          <div>|</div>
          <div>|</div>
          <div>|</div>
          <div>|</div>
          <div>|</div>
          <div>|</div>
          <div>|</div>
          <div>|</div>
          <div>|</div>
          <div>|</div>
          <div>|</div>
          <div>|</div>
          <div>V</div>
        </div>

        {refYOverflowing && !refYScrollBegin && <div className="vertical-gradient-top"></div>}

        {refYOverflowing && !refYScrollEnd && <div className="vertical-gradient-bottom"></div>}
      </div>
    </div>
  );
}

export default App;
