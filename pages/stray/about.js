import  Layout from '../../components/layout/Layout';
import Step from '../..//components/home/step';

export default function StrayPage({stray}) {
  console.log('stray',stray);
  return (
    <div>
      <Layout/>
      <Step/>
    </div>
  );
}
