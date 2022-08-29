import { View, Text, Alert } from 'react-native'
import React from 'react'
import styles from './FavoriteWorksPage.styles'
import { useSelector } from 'react-redux'
import { FlatList } from 'react-native-gesture-handler'
import FavoritesCard from '../../components/Cards/FavoritesCard/FavoritesCard'
import { useDispatch } from 'react-redux'

const FavoriteWorksPage = () => {

  const list = useSelector(s=>s.workList);
  console.log(list.map(i=>i),'lissssss neyy gelio')
  
  const dispatch = useDispatch();

  const removeClick=(item)=>{
    
    dispatch({type:'REMOVE_WORK', payload: {removeItem: item}})
    Alert.alert('Bilgi','İş Favorilerinizzden Kaldırıldı!')
  }
  return (
    <View>
      <FlatList keyExtractor={(_,index)=>index.toString()} data={list} renderItem={({item})=><FavoritesCard handleRemove={()=>removeClick(item)} props={item}></FavoritesCard>}></FlatList>
    </View>
  )
}

export default FavoriteWorksPage