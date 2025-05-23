import Navbar from '../components/Navbar'; import Footer from '../components/Footer';
export default function Home() {
  return (
    <div>
      <Navbar />
      <main style={{ padding: '2rem' }}>
        <h1>AI 赋能竹产业 · 以竹代塑 · 模型即产品</h1>
        <p>欢迎使用 Bamb3D 平台</p>
        <div style={{ marginTop: '2rem' }}>
          <a href="/modeling/text-to-image"><button>文本生成图</button></a>
          <a href="/modeling/image-to-3d"><button>图转3D模型</button></a>
          <a href="/modeling/viewer"><button>查看模型</button></a>
        </div>
      </main>
      <Footer />
    </div>
  );
}
