import { View, Text, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import styles from './WorksDetailPage.styles'
import config from '../../../config'
import RenderHTML from 'react-native-render-html'
import useFetch from '../../hooks/useFetch/useFetch'
import { useWindowDimensions } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Loading from '../../components/Loading/Loading'
import { useDispatch } from 'react-redux'
import Error from '../../components/Error/Error'

const WorksDetailPage = ({route}) => {
  const {id}= route.params;
  const dispatch = useDispatch();
  const [status, setStatus] = useState(false);

  const {loading,data,error} = useFetch(`${config.API_URL}/${id}`)
  console.log(data.locations?.map(i=>i.name),'asdasdasdas')

  const sourceContent = {
    html: `${data.contents}`
  };

  const {width} = useWindowDimensions(); 

  if(loading){
    return <Loading/>
  }

  if(error){
    return <Error/>
  }

  const handleClick=()=>{
    if(status==false){
      setStatus(true);
      dispatch({type:'ADD_WORK', payload: {favoriteJob: data}})
      Alert.alert('Works','İş Favorilere Eklendi !')
    }else{
      
      Alert.alert('Works','İş Zaten Favoriler Listenizde Mevcut !')
    }
  }

  const handleSubmit=()=>{
    Alert.alert('Works','İş Başvurunuz Alınmıştır.');
  }

  return (
    <ScrollView>
      <View>
        <View style={styles.headerContainer}>
            <Text style={styles.txtName}>{data.name}</Text>
            <View style={styles.rowInfo}>
              <Text style={styles.txtLocation}>Location: </Text>
              <Text style={styles.txtLocationInner}>{data.locations?.map(i=>i.name)}</Text>
            </View>
            <View style={styles.rowInfo}>
              <Text style={styles.txtLevel}>Job Level: </Text>
              <Text style={styles.txtLevelInner}>{data.levels?.map(i=>i.name)}</Text>
            </View>
            <Text style={styles.txtJobDetail}>Job Detail</Text>
          </View>
        
        <View style={styles.InfoContent}>
          <RenderHTML contentWidth={width} source={sourceContent}/>
        </View>
      </View>
      <View style={styles.btns}>
        <TouchableOpacity onPress={handleSubmit}>
          <Text style={styles.btnSubmit}>Submit<Ionicons name="log-in-outline" color={'white'} size={23}></Ionicons></Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleClick}>
          <Text style={styles.btnFavorite}>Favorite Job<Ionicons name="ios-heart-outline" color={'white'} size={23}></Ionicons></Text>
        </TouchableOpacity>
      </View>
      
    </ScrollView>
    
  )
}


export default WorksDetailPage