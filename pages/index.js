import  Layout from '../components/layout/Layout';
import Banner from '../components/home/Banner';
import '../styles/Home.module.css'
import Step from '../components/home/step';

export default function Home({categories}) {
  // console.log('index',categories);
  return (
      <Layout>
        <Banner/>
        <Step/>
      </Layout>
  )
}
