const TestComponent = () => {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f0f0f0',
      color: '#333',
      fontSize: '24px',
      fontWeight: 'bold',
      zIndex: 9999
    }}>
      Test - Si vous voyez ceci, React fonctionne !
    </div>
  );
};

export default TestComponent;
