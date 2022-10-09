import Ring from './ring.component';

const RingContainer = ({ ringArray }) => {
  //RingContainer style.
  const ringContainerStyle = {
    position: 'absolute',
    width: '100%',
    height: '100vh',
    marginTop: 0,
    marginLeft: 0,
    zIndex: 1,
    backgroundColor: 'orange',
  };
  //list of rings.
  const ringList = ringArray.map((ring, index) => {
    return <Ring ringAttributes={ring} key={index} />;
  });
  return <div style={ringContainerStyle}>{ringList}</div>;
};

export default RingContainer;
