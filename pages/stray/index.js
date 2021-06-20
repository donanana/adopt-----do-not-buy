import StrayContainer from '@/components/stray/StrayContainer';
import Layout from '@/components/layout/Layout';
import styles from '@/styles/search.module.css';
import React from 'react';
import { useState, useEffect, useContext } from 'react';
// import Search from '@/components/layout/Search';
export async function getServerSideProps() {
  const response = await fetch(
    'https://data.coa.gov.tw/Service/OpenData/TransService.aspx?UnitId=QcbUEzN6E6DL'
  );
  const stray = await response.json();
  return {
    props: {
      stray,
    },
  };
}

export default function StrayPage({ stray }) {
  const [animal_subid, setAnimal_subid] = useState('');
  const [animal_shelter_pkid, setAnimal_shelter_pkid] = useState('');
  const [animal_kind, setAnimal_kind] = useState('');
  // const [sendRequest, setSendRequest] = useState(false);
  var straySearchResult;
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      'submit->>>\nanimal_subid:',
      animal_subid.toUpperCase(),
      'animal_shelter_pkid:',
      animal_shelter_pkid,
      'animal_kind:',
      animal_kind
    );
  };
  // console.log(
  //   'input->>>\nanimal_subid:',
  //   animal_subid.toUpperCase(),
  //   'animal_shelter_pkid:',
  //   animal_shelter_pkid,
  //   'animal_kind:',
  //   animal_kind
  // );
  // function CorrectTheErrorImage(){
  for (var i = 0; i < stray.length; i++) {
    stray[i].album_file = stray[i].album_file.replace('._orgjpeg', '_org.jpeg');
  }
  // }

  // function imgSort(){
  const strayWithImg = stray.filter((obj) => obj.album_file !== '');
  const strayWithoutImg = stray.filter((obj) => obj.album_file === '');
  var straySort = strayWithImg.concat(strayWithoutImg);
  var strayResult = straySort;
  // }

  const clearInput = (e) => {
    setAnimal_subid('');
    setAnimal_shelter_pkid('');
    setAnimal_kind('');
    // console.log(
    //   'clear->>>\nanimal_subid:',
    //   animal_subid.toUpperCase(),
    //   'animal_shelter_pkid:',
    //   animal_shelter_pkid,
    //   'animal_kind:',
    //   animal_kind
    // );
  };



  // useEffect(() => {
  //   if(sendRequest){
  //      console.log('hello');
       var submitInput = (e) => {
        if (animal_subid != '') {
          const straySearchById = straySort.filter((obj) =>
            obj.animal_subid.includes(animal_subid.toUpperCase())
          );
          strayResult = straySearchById;
          // console.log('straySearchById', straySearchById);
        }
        if (animal_kind != '') {
          const straySearchByKind = strayResult.filter(
            (obj) => obj.animal_kind === animal_kind
          );
          strayResult = straySearchByKind;
          // console.log('straySearchByKind', straySearchByKind);
        }
        if (animal_shelter_pkid != ''&&animal_shelter_pkid != 0) {
          const straySearchByShelter = strayResult.filter(
            (obj) => obj.animal_shelter_pkid === parseInt(animal_shelter_pkid)
          );
          strayResult = straySearchByShelter;
          // console.log('straySearchByShelter', straySearchByShelter);
        }
      // };
      console.log('strayResult', strayResult);
      // setSendRequest(false);
    }
    submitInput();
  // },
  // [sendRequest]);
  // console.log('sendRequest', sendRequest);

  return (
    <div>
      <Layout>
        <div id={styles.container}>
          <h1>&bull; 浪浪查詢 &bull;</h1>
          <div className={styles.underline}></div>
          <div className={styles.icon_wrapper}></div>
          <form
            action='#'
            method='post'
            id={styles.contact_form}
            onSubmit={handleSubmit}
          >
            <div className={styles.animal_subid}>
              <label for='animal_subid'></label>
              <input
                type='text'
                placeholder='請輸入收容編號'
                name='name'
                id={styles.name_input}
                value={animal_subid}
                onChange={(e) => setAnimal_subid(e.target.value)}
              />
            </div>

            <div className={styles.animal_shelter_pkid}>
              <label for='subject'></label>
              <select
                placeholder='Subject line'
                name='subject'
                id={styles.subject_input}
                value={animal_shelter_pkid}
                onChange={(e) => setAnimal_shelter_pkid(e.target.value)}
                required
              >
                <option disabled hidden selected>
                  Subject line
                </option>
                <option value='0'>請選擇收所</option>
                <option value='92'>新北市政府動物保護防疫處</option>
                <option value='51'>新北市板橋區公立動物之家</option>
                <option value='50'>新北市板橋區公立動物之家</option>
                <option value='53'>新北市中和區公立動物之家</option>
                <option value='55'>新北市淡水區公立動物之家</option>
                <option value='56'>新北市瑞芳區公立動物之家</option>
                <option value='58'>新北市五股區公立動物之家</option>
                <option value='59'>新北市八里區公立動物之家</option>
                <option value='60'>新北市三芝區公立動物之家</option>
                <option value='78'>宜蘭縣流浪動物中途之家</option>
                <option value='61'>桃園市動物保護教育園區</option>
                <option value='63'>新竹縣公立動物收容所</option>
                <option value='96'>苗栗縣生態保育教育中心(動物收容所)</option>
                <option value='67'>臺中市動物之家南屯園區</option>
                <option value='0'>臺中市動物之家后里園區</option>
                <option value='69'>彰化縣流浪狗中途之家</option>
                <option value='70'>南投縣公立動物收容所</option>
                <option value='89'>雲林縣流浪動物收容所</option>
                <option value='73'>嘉義縣流浪犬中途之家</option>
                <option value='75'>高雄市壽山動物保護教育園區</option>
                <option value='76'>高雄市燕巢動物保護關愛園區</option>
                <option value='77'>屏東縣公立犬貓中途之家</option>
                <option value='90'>臺東縣動物收容中心</option>
                <option value='79'>花蓮縣流浪犬中途之家</option>
                <option value='83'>澎湖縣流浪動物收容中心</option>
                <option value='48'>基隆市寵物銀行</option>
                <option value='62'>新竹市動物保護教育園區</option>
                <option value='71'>嘉義市動物保護教育園區</option>
                <option value='72'>臺南市動物之家灣裡站</option>
                <option value='74'>臺南市動物之家善化站</option>
                <option value='49'>臺北市動物之家</option>
                <option value='81'>連江縣流浪犬收容中心</option>
                <option value='82'>金門縣動物收容中心</option>
              </select>
            </div>
            <div className={styles.row}>
              <div
                className={styles.rad_container}
                value={animal_kind}
                onChange={(e) => setAnimal_kind(e.target.value)}
              >
                                <label className={styles.rad_label}>
                  <input
                    type='radio'
                    className={styles.rad_input}
                    name='rad'
                    value='貓'
                  />
                  <div className={styles.rad_design}></div>
                  <div className={styles.rad_text}>貓</div>
                </label>

                <label className={styles.rad_label}>
                  <input
                    type='radio'
                    className={styles.rad_input}
                    name='rad'
                    value='狗'
                  />
                  <div className={styles.rad_design}></div>
                  <div className={styles.rad_text}>狗</div>
                </label>

                {/* <label className={styles.rad_label}>
                  <input
                    type='radio'
                    className={styles.rad_input}
                    name='rad'
                    value='全部'
                  />
                  <div className={styles.rad_design}></div>
                  <div className={styles.rad_text}>全部</div>
                </label> */}

                <label className={styles.rad_label}>
                  <input
                    type='radio'
                    className={styles.rad_input}
                    name='rad'
                    value='其他'
                  />
                  <div className={styles.rad_design}></div>
                  <div className={styles.rad_text}>其他</div>
                </label>
              </div>
              
              <div className={styles.submit}>
                <input
                  type='submit'
                  value='搜尋'
                  id={styles.form_button}
                  onClick={submitInput}
                />
                <input
                  type='reset'
                  value='重置'
                  id={styles.form_button}
                  onClick={clearInput}
                />
              </div>
            </div>
          </form>
        </div>
        {strayResult.length != 0 ? (
          <StrayContainer key={strayResult[0].animal_id} strays={strayResult} />
        ) : (
          <div id={styles.notFound}>
            <h1>查無此搜尋結果</h1>
          </div>
        )}
      </Layout>
    </div>
  );
}
