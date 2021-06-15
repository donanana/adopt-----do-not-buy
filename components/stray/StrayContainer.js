import styles from './StrayContainer.module.scss';
import StrayItem from './StrayItem';
import { useRouter } from 'next/router';
import { useState } from 'react';
import ReactPaginate from 'react-paginate';

export default function StrayContainer({ strays }) {
    // console.log('stray at StrayContainer',strays);
  const[pageNumber,setPageNumber] = useState(0);
  const itemsPerPage = 20;
  const pagesVisited = pageNumber * itemsPerPage;
  const displayShops = strays.slice(
    pagesVisited,
    pagesVisited + itemsPerPage
  );
  const changePage = ({selected}) => {
    setPageNumber(selected);
  }
  const pageCount = Math.ceil(strays.length / itemsPerPage);
  return (
    <div className={styles.strayPage}>
      <div className={styles.card_container}>
        {displayShops.map(({id,animal_subid,album_file,animal_age, animal_kind,animal_sex,animal_colour,animal_remark,animal_createtime,shelter_name,shelter_address,shelter_tel,animal_status})=>(
          <StrayItem 
          key={id} 
          animal_subid={animal_subid} 
          album_file={album_file} 
          animal_age={animal_age} 
          animal_kind={animal_kind} 
          animal_sex={animal_sex} 
          animal_colour={animal_colour} 
          animal_remark={animal_remark} 
          animal_createtime={animal_createtime} 
          shelter_name={shelter_name} 
          shelter_address={shelter_address} 
          shelter_tel={shelter_tel} 
          animal_status={animal_status} 
          />
        ))}
      </div>
      <ReactPaginate
      previousLabel={"<"}
      nextLabel={">"}
      pageCount={pageCount}
      onPageChange={changePage}
      containerClassName={styles.paginateButton}
      previousLinkClassName={styles.previousButton}
      nextLinkClassName={styles.nextButton}
      disableClassName={styles.paginateDisable}
      activeClassName={styles.paginateActive}
      />
    </div>
  );
}
