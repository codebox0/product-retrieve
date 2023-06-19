"use client";
import Image from 'next/image'
import styles from './page.module.css'
import SearchBar from "@/components/search-bar/SearchBar";
import Product from "@/components/Product-View/Product";
export default function Home() {
  return (
    <div className={styles.home}>
      <Product />
    </div>
  )
}
