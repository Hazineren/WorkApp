import { View, Text } from 'react-native'
import React from 'react'
import styles from './FavoritesCard.styles'
import { TouchableOpacity } from 'react-native-gesture-handler'

const FavoritesCard = ({props,handleRemove}) => {
  return (
    <View style={styles.container}>
        <Text style={styles.txtInfoName}>{props.name}</Text>
        <Text style={styles.txtInfo}>{props.company.name}</Text>
        <Text style={styles.txtInfoLocation}>{props.locations.map(i=>i.name)}</Text>
        <View style={styles.levelContainer}>
          <Text style={styles.txtLevel}>{props.levels.map(i=>i.name)}</Text>
        </View>
        <TouchableOpacity onPress={handleRemove}>
            <Text style={styles.btnRemove}>Remove</Text>
        </TouchableOpacity>
    </View>
  )
}

export default FavoritesCard