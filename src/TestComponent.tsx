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
      zIndex: 9999,
      fontSize: '24px',
      fontWeight: 'bold'
    }}>
      <div style={{ textAlign: 'center' }}>
        <div style={{ fontSize: '48px', marginBottom: '20px' }}>🚀</div>
        <div>L'application est chargée !</div>
        <div style={{ fontSize: '16px', marginTop: '10px', color: '#666' }}>
          Si vous voyez ce message, React fonctionne correctement.
        </div>
      </div>
    </div>
  );
};

export default TestComponent;
