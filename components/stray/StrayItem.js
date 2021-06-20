import React from 'react';
import Link from 'next/link';
import styles from './StrayItem.module.scss';
import { Icon, InlineIcon } from '@iconify/react';
import pinMap from '@iconify/icons-ps/pin-map';
import infoCircle from '@iconify/icons-bi/info-circle';

export default function StrayItem({id,animal_subid,album_file,animal_age,animal_kind,animal_sex,animal_colour,animal_remark,animal_createtime,shelter_name,shelter_address,shelter_tel,animal_status}) {
    // const linkUrl = `/shop/${title}`;
    let sex = (animal_sex == 'F' ? '母' : '公');
    // console.log('sex:',sex);

    return (
      <div className={styles.card_container}>
      <div className={styles.card}>
        <div className={styles.container}>
          <div className={styles.top}>
            <img src={album_file} alt=""/>
          </div>
          <div className={styles.bottom}>
            <div className={styles.left}>
              <div className={styles.details}>
                <h1>{sex}</h1>
                <p>{animal_subid}</p>
              </div>
              <div className={styles.buy}><Icon icon={pinMap} className={styles.iconify}/></div>
            </div>
            <div className={styles.right}>
              <div className={styles.done}><i className={styles.material_icons}>done</i></div>
              <div className={styles.details}>
                <h1>Chair</h1>
                <p>Added to your cart</p>
              </div>
              <div className={styles.remove}><i className={styles.material_icons}>clear</i></div>
            </div>
          </div>
        </div>
        <div className={styles.inside}>
          <div className={styles.icon}><Icon icon={infoCircle} className={styles.iconify}/></div>
          <div className={styles.contents}>
            <table>
              <tr>
                <th>入所時間</th>
                <th>{animal_createtime}</th>
              </tr>
              <tr></tr>
              <tr>
                <th>狀態</th>
                <th>{animal_status}</th>
              </tr>
              <tr></tr>
              <tr>
                <td>毛色</td>
                <td>{animal_colour}</td>
              </tr>
              <tr></tr>
              <tr>
                <td>年齡</td>
                <td>{animal_age}</td>
              </tr>
              <tr></tr>
              <tr>
                <td>描述</td>
                <td>{animal_remark}</td>
              </tr>
              <tr>
                <th>&emsp;&emsp;&emsp;&emsp;&emsp;</th>
                <th></th>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
    )
}
