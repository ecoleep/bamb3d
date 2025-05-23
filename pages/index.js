import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Home() {
  const buttonStyle = {
    padding: '0.6rem 1.2rem',
    fontSize: '1rem',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
  };

  return (
    <div
      style={{
        fontFamily: 'Arial, sans-serif',
        minHeight: '100vh',
        padding: '2rem',
        backgroundColor: '#f5fff5',
      }}
    >
      <Navbar />

      <h1
        style={{
          fontSize: '2rem',
          fontWeight: 'bold',
          textAlign: 'center',
          color: '#1b5e20',
          marginBottom: '1rem',
        }}
      >
        AI 赋能竹产业 · 以竹代塑 · 模型即产品
      </h1>

      <p
        style={{
          textAlign: 'center',
          fontSize: '1.1rem',
          color: '#444',
        }}
      >
        欢迎使用 Bamb3D 平台
      </p >

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '1rem',
          marginTop: '2rem',
          flexWrap: 'wrap',
        }}
      >
        <a href=" ">
          <button style={buttonStyle}>文本生成图</button>
        </a >
        <a href="/modeling/image-to-3d">
          <button style={buttonStyle}>图转3D模型</button>
        </a >
        <a href="/modeling/viewer">
          <button style={buttonStyle}>查看模型</button>
        </a >
      </div>

      <div
        style={{
          marginTop: '3rem',
          padding: '2rem',
          borderRadius: '12px',
          backgroundColor: '#f2fdf5',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
          color: '#1b5e20',
          maxWidth: '800px',
          marginLeft: 'auto',
          marginRight: 'auto',
          lineHeight: '1.6',
        }}
      >
        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>关于 Ecoleep 平台</h2>
        <p>
          Ecoleep 是一个结合 AI 与大数据、专注以竹代塑、绿色制造与建模创新的平台。我们致力于推动可持续材料创新，赋能竹产业生态链，支持文本生成图像、图像转 3D 模型并实现 3D 打印。
        </p >
      </div>

      <div
        style={{
          marginTop: '3rem',
          padding: '2rem',
          backgroundColor: '#ffffff',
          borderRadius: '10px',
          maxWidth: '960px',
          marginLeft: 'auto',
          marginRight: 'auto',
          boxShadow: '0 0 10px rgba(0,0,0,0.06)',
        }}
      >
        <h2 style={{ textAlign: 'center', color: '#1b5e20', marginBottom: '1rem' }}>
          精选模型案例
        </h2>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '1.5rem',
            flexWrap: 'wrap',
          }}
        >
          {['竹汽车部件', '竹医疗器具', '竹家具产品'].map((title, index) => (
            <div
              key={index}
              style={{
                backgroundColor: '#f2fdf4',
                padding: '1rem',
                borderRadius: '8px',
                width: '260px',
                textAlign: 'center',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              }}
            >
              <div
                style={{
                  width: '100%',
                  height: '140px',
                  backgroundColor: '#c8e6c9',
                  borderRadius: '6px',
                }}
              >
                <p
                  style={{
                    lineHeight: '140px',
                    color: '#2e7d32',
                    fontWeight: 'bold',
                  }}
                >
                  图片预留
                </p >
              </div>
              <h3 style={{ marginTop: '0.8rem', fontSize: '1.1rem', color: '#2e7d32' }}>
                {title}
              </h3>
              <p style={{ fontSize: '0.9rem', color: '#666' }}>以竹代塑的 3D 打印创新应用。</p >
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}