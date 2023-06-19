import React, {ReactElement, useState} from 'react';
import styles from './search-bar.module.css';
import {CountryList} from "@/utils";

const SearchBar = ({
    onSubmit
                   }:{
    onSubmit: (smc:string, country:string) => void
}): ReactElement => {
    const [smc, setSmc] = useState('');
    const [country, setCountry] = useState('');

    return <>
        <div className={styles.search_bar}>
            <input className={styles.smc} onChange={(value)=> setSmc(value.target.value)}  type="text" placeholder="Code SMC"/>
            <select className={styles.country} onChange={(value)=> setCountry(value.target.value)} placeholder={'Choose country'}>
                <option value=""></option>
                {
                    CountryList.map((country, index) => {
                        return <option key={index} value={country.value}>{country.label}</option>
                    })

                }
            </select>
            <button className={styles.submit} type="submit" onClick={()=>onSubmit(smc,country)}> Search</button>
        </div>
    </>
};

export default SearchBar;
