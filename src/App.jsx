import './App.css';
import 'bootstrap/dist/css/bootstrap.min.js'
import Header from './Header';
import Footer from './Footer';
import Content from './Content';

export default function App() {
  return (
    <main>
      <Header/>
        <Content/>
      <Footer/>
    </main>
  )
}
