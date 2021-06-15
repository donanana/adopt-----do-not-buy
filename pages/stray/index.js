import StrayContainer from '../../components/stray/StrayContainer'
import  Layout from '../../components/layout/Layout';

export async function getServerSideProps(){
  const response = await fetch('https://data.coa.gov.tw/Service/OpenData/TransService.aspx?UnitId=QcbUEzN6E6DL');
  const stray = await response.json();
  return{
    props:{
      stray
    }
  }
}

export default function StrayPage({stray}) {
    for (var i = 0; i < stray.length ; i++) {
      stray[i].album_file=stray[i].album_file.replace('._orgjpeg', '_org.jpeg');
    }
    const strayWithImg = stray.filter((obj) => (obj.album_file !== ""));
  return (
    <div>
      <Layout/>
      <StrayContainer key={strayWithImg[0].animal_id} strays={strayWithImg}/>
    </div>
  );
}