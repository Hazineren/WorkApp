import { View, Text } from 'react-native'
import React from 'react'
import styles from './WorksCard.styles'
import { TouchableOpacity } from 'react-native-gesture-handler'

const WorksCard = ({props,onSelected}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onSelected}>
        <Text style={styles.txtInfoName}>{props.name}</Text>
        <Text style={styles.txtInfo}>{props.company.name}</Text>
        <Text style={styles.txtInfoLocation}>{props.locations.map(i=>i.name)}</Text>
        <View style={styles.levelContainer}>
          <Text style={styles.txtLevel}>{props.levels.map(i=>i.name)}</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default WorksCard