import Image from 'next/image';

export default function Navbar() {
  return (
    <nav style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: '#1a4d2e',
      color: 'white',
      padding: '0.8rem 2rem',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Image src="/ecoleep-logo.png" alt="Ecoleep Logo" width={80} height={40} />
        <span style={{ fontSize: '1.5rem', fontWeight: 'bold', marginLeft: '1rem' }}>
          Bamb3D 绿色建模平台
        </span>
      </div>
    </nav>
  );
}