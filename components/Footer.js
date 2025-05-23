export default function Footer() {
  return (
    <footer style={{
      backgroundColor: '#1b5e20',
      color: 'white',
      textAlign: 'center',
      padding: '2rem',
      marginTop: '3rem'
    }}>
      <p style={{ marginBottom: '0.5rem', fontSize: '1rem' }}>
        © {new Date().getFullYear()} Ecoleep AI大数据赋能竹产业平台 · All rights reserved
      </p >
      <p style={{ fontSize: '0.9rem' }}>
        联系我们：contact@1031673750@qq.com | 微信公众号：Ecoleep官方
      </p >
    </footer>
  );
}