import { View, Text, FlatList, RefreshControl} from 'react-native'
import React ,{ useState,useEffect }from 'react'
import styles from './WorksPage.styles'
import config from '../../../config'
import WorksCard from '../../components/Cards/WorksCard/WorksCard';
import useFetch from '../../hooks/useFetch/useFetch';
import Loading from '../../components/Loading/Loading';
import Error from '../../components/Error/Error'
import { TouchableOpacity } from 'react-native-gesture-handler';


const WorksPage = ({navigation}) => {
  const [page, setPage] = useState(1);
  const {loading,data,error,refetch} = useFetch(`${config.API_URL}?page=${page}`)

  const handleSelectedCard=(id)=>{
    navigation.navigate('WorksDetailPage',{id})
  }

  const handleIncrease=()=>{
    setPage(page+1);
    refetch();
    
    console.log(page,'sayfa kaççççç')
    console.log(`${config.API_URL}?page=${page}`,'link ne????????')
  }
  const handleDecrease=()=>{
    if(page!==1){
      setPage(page-1);
      refetch();
      console.log(`${config.API_URL}?page=${page}`,'link ne????????')
    }
  }

  const renderWorks = ({item}) => <WorksCard props={item} onSelected={()=>handleSelectedCard(item.id)}></WorksCard>

  if(loading){
    return <Loading/>
  }

  if(error){
    return console.log(error), <Error></Error>
  }

  return (
    <View style={styles.container}>
      <FlatList data={data?.results} renderItem={renderWorks}></FlatList>
      <View style={styles.btns}>
      <TouchableOpacity onPress={handleDecrease}>
        <Text style={styles.btnTxt}>Geri</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleIncrease}>
        <Text style={styles.btnTxt}>İleri</Text>
      </TouchableOpacity>
      </View>
    </View>
  )
}

export default WorksPage