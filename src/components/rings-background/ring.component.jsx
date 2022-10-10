import { useEffect, useState } from 'react';

const Ring = ({ ringAttributes, mousePosition }) => {
  const defaultStyle = {
    position: 'absolute',
    width: 100,
    height: 100,
    marginTop: 50,
    marginLeft: 50,
    borderStyle: 'solid',
    borderRadius: 50,
    borderWidth: 2,
    borderColor: 'red',
    opacity: 1,
  };

  const [ring, setRing] = useState(defaultStyle);
  const [ratio, setRatio] = useState(0.5);

  //component didmount.
  useEffect(() => {
    const mTop = ringAttributes.y - ringAttributes.radius;
    const mLeft = ringAttributes.x - ringAttributes.radius;
    const side = ringAttributes.radius * 2;

    const opacityRatio = () => {
      const x1 = ringAttributes.x;
      const y1 = ringAttributes.y;
      const x2 = mousePosition.x;
      const y2 = mousePosition.y;

      const distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
      const ratio = ringAttributes.radius / distance;

      const innerRatio = distance / ringAttributes.radius;

      if (!ratio) return 0;
      return ratio > 1 ? innerRatio : ratio;
    };

    setRing({
      ...ring,
      marginLeft: mLeft,
      marginTop: mTop,
      width: side,
      height: side,
      borderColor: ringAttributes.color,
      borderRadius: ringAttributes.radius,
      opacity: opacityRatio(),
    });
  }, [mousePosition.x, mousePosition.y]);

  return <div style={ring}></div>;
};

export default Ring;
