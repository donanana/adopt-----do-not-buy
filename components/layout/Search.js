import styles from './Search.module.scss';
import { useState, useEffect, useContext } from 'react';
import Link from 'next/link';

export default function Search() {

    const [animal_subid, setAnimal_subid] = useState('');
    const [animal_shelter_pkid, setAnimal_shelter_pkid] = useState('');
    const handleSubmit = (e) => {
      e.preventDefault();
    //   console.log('animal_subid:', animal_subid,'animal_shelter_pkid:', animal_shelter_pkid);
    };

    return (
<div></div>
)
}
