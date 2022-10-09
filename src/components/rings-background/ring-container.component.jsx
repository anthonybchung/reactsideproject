import { useEffect, useState } from 'react';
import Ring from './ring.component';

const RingContainer = ({ ringArray }) => {
  //RingContainer style.

  const ringContainerStyle = {
    position: 'absolute',
    width: '100%',
    height: '150%',
    marginTop: 0,
    marginLeft: 0,
    zIndex: 0,

    // overflowX: 'hidden',
    // overflowY: 'hidden',
  };

  // mouse Position.
  const [mouseXY, setMouseXY] = useState(0);
  // eventlistener mousemove.
  const mousePosition = (event) => {
    setMouseXY({ ...mouseXY, x: event.clientX, y: event.clientY });
  };

  useEffect(() => {
    window.addEventListener('mousemove', mousePosition);

    return () => {
      window.removeEventListener('mousemove', mousePosition);
    };
  }, []);

  //list of rings.
  const ringList = ringArray.map((ring, index) => {
    return <Ring ringAttributes={ring} mousePosition={mouseXY} key={index} />;
  });

  return <div style={ringContainerStyle}>{ringList}</div>;
};

export default RingContainer;
