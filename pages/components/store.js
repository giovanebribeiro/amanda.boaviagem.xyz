import React from 'react'
import styles from '../../styles/Home.module.css'
import DataStore from '../../public/data/DataStore'
import { Button, Text, Link, Pagination } from "@nextui-org/react";
import GridStore from './gridStore';
import { useState } from 'react';

const Store = ({isInitialPage = true}) => {
  const itemsInitialPage = DataStore.items.slice(0, 2);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(2);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = DataStore.items.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className={styles.store}>
      <Text h2 size={40} weight="bold" color='#2d638e' className={styles.storeTitle}>
        Loja
      </Text>
      { isInitialPage ? 
        itemsInitialPage.map(item => (
        <div key={item.id} className={styles.storeItemSize}>
          <GridStore id={item.id} title={item.title} description={item.description} 
          image={item.image} linkAmazon={item.linkAmazon} linkUiclap={item.linkUiclap} direction={item.direction}></GridStore>
        </div>)) : 
        <div>
          {currentPosts.map(item => (
          <div key={item.id} className={styles.storeItemSize}>
            <GridStore id={item.id} title={item.title} description={item.description} 
          image={item.image} linkAmazon={item.linkAmazon} linkUiclap={item.linkUiclap} direction={item.direction}></GridStore>
          </div>))}
          <div style={{display: 'flex', justifyContent: 'center', marginTop: 30}}>
            <Pagination size="sm" color="primary" total={DataStore.items.length/postsPerPage} initialPage={1} onChange={page => paginate(page)}/>
          </div>
        </div>
      }
      {
        DataStore.items.length > 2 && isInitialPage ? 
        <div style={{display: 'flex', justifyContent: 'center', marginTop: 30}}>
           <Link href='/store'>
              <Button css={{mr: "$6", backgroundColor: "#cc5378", borderRadius: "20px"}} size="sm">Ver mais</Button>
           </Link>
        </div>
        : null
      }
    </div>
  )
}

export default Store