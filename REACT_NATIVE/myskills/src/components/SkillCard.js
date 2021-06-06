 import React from 'react'
import {TouchableOpacity, StyleSheet, Text} from 'react-native'

export function SkillCard({ skill }) {
  return (
        <TouchableOpacity key={skill} style={styles.buttonSkill}>
          <Text style={styles.textSkill}> 
                {skill}
          </Text>
        </TouchableOpacity>
  )
}
const styles = StyleSheet.create({  
  buttonSkill: {
    backgroundColor: '#1f1e25',
    padding: 15,
    borderRadius: 50,
    marginVertical: 10,
    alignItems: 'center',
  },

  textSkill: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
})