import styles from './Step.module.scss';
import Link from 'next/link';

export default function Step() {
  return (
    <div className={styles.step}>
      <h1 className={styles.title}>流浪動物認養流程</h1>
      <section className={styles.dl_blurbs}>
        <dl>
          <dt></dt>
          <dd>
            民眾可至各區公立動物之家、或上動物保護防疫處官方網站尋找欲認養之動物。
          </dd>
          <dt></dt>
          <dd>
            認養人資格：須年滿20歲攜帶身份證件且無動物保護法規禁止認養動物之條件者。
          </dd>
          <dt></dt>
          <dd>認養人需填寫新北市公立動物之家犬貓隻認養表。</dd>
        </dl>
        <dl>
        <dt></dt>
          <dd>向認養人宣導飼主責任。</dd>
          <dt></dt>
          <dd>認養動物免費植入晶片、辦理寵物登記及施打狂犬病疫苗。<br/></dd>
          <dt></dt>
          <dd>認養手續完成，帶著心愛的毛寶貝一起回家。<br/></dd>
        </dl>
      </section>
    </div>
  );
}
