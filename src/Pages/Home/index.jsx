import React, { useState } from 'react'

import { Button } from '../../components/Button' 
import { Header } from '../../components/Header'
import { Checkboxes } from '../../components/Checkboxes'
import { Range } from '../../components/Range'

import { View, Container, Options } from './style'

export const Home = () => {

    const [ myPassword, setMyPassword ] = useState('')

    const getRandomCaracter = (randomCharacter) => {
        
        return String.fromCharCode(randomCharacter)
    
    }

    const createPassword = () => {

        console.log('entrei na função')

        try {

            if ( document.querySelector('.numbers').checked ) {
            
                let getRandomNumber = Math.floor(Math.random() * 10 ) + 48
                const response = getRandomCaracter(getRandomNumber)
                setMyPassword(response)
            
            }
            
            if ( document.querySelector('.upper-letters').checked ) {
    
                let getRandomNumber = Math.floor(Math.random() * 26 ) + 65
                const response = getRandomCaracter(getRandomNumber)
                setMyPassword(response)
                
            }
            
            if ( document.querySelector('.lower-letters').checked ) {
                
                let getRandomNumber = Math.floor(Math.random() * 26 ) + 97
                const response = getRandomCaracter(getRandomNumber)
                setMyPassword(response)
    
            }

        } catch (error) {

            console.error(error.message)

        }
        
    }

    return (

        <Container>

            <Header />

            <View type = "text">
                
                <h4>{ myPassword }</h4>
                
            </View>

            <Options>

                <Range />
                <Checkboxes />

            </Options>

            <Button onClick = { createPassword } />

        </Container>

    )
    
}
