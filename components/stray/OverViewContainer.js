import styles from './OverViewContainer.module.scss';
import CardItem from './CardItem';
import Link from 'next/link';
import { Icon, InlineIcon } from '@iconify/react';
import shoppingCartPlus from '@iconify/icons-carbon/shopping-cart-plus';

export default function OverViewContainer({ shops }) {
  // console.log('CardContainer',shops);
  const title = (shops[0].cat_id === 1 ? 'hats' : shops[0].cat_id === 2 ? 'jackets' : shops[0].cat_id === 3 ? 'sneakers' : shops[0].cat_id === 4 ? 'womens': 'mens');
  let upper= title[0].toUpperCase() + title.slice(1)
  // console.log('title',title);
  const linkUrl = `/shop/${title}`;

  return (
    <div className={styles.homepage}>
      <div className={styles.overview}>
        <h3>{upper}</h3>
        <Link href={linkUrl}>
           more->
        </Link>      
      </div>
      <div className={styles.menuContainer_menu}>
          {shops.map(({name: title, remote_url:imageUrl,cid,price})=>(
              <CardItem key={cid} title={title} imageUrl={imageUrl} price={price} />
              ))}
      </div>
  </div>
  );
}