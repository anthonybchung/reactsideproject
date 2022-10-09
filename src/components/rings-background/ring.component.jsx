import { useEffect, useState } from 'react';

const Ring = ({ ringAttributes, mousePosition }) => {
  // default style
  const defaultStyle = {
    position: 'absolute',
    width: 100,
    height: 100,
    marginTop: 50,
    marginLeft: 50,
    borderStyle: 'solid',
    borderRadius: 50,
    borderWidth: 3,
    borderColor: 'red',
    opacity: 1,
  };

  //style in state.
  const [ringAttr, setRingAttr] = useState(defaultStyle);

  useEffect(() => {
    setRingAttr({
      ...ringAttr,
      width: ringAttributes.radius * 2,
      height: ringAttributes.radius * 2,
      marginTop: ringAttributes.y - ringAttributes.radius,
      marginLeft: ringAttributes.x - ringAttributes.radius,
      borderRadius: ringAttributes.radius,
      borderColor: ringAttributes.color,
    });
  }, []);

  return <div style={ringAttr}></div>;
};

export default Ring;
