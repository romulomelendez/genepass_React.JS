import styled from 'styled-components'

export const Container = styled.div `

    max-width: 800px;


`

export const View = styled.div `

    background-color: white;
    outline: none;
    padding: 10px;
    margin: 10px;
    height: 150px;
    width: 800px;
    border-radius: 10px;
    border: 1px solid black;
    font-size: 80pt;

`

export const Options = styled(View) `

    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    font-size: 18pt;

    section.checkboxes-section {
        
        display: flex;
        flex-direction: column;
        
        div {

            display: flex;
            flex-direction: row;

            input {
            
                height: 20px;
                width: 20px;
                margin: 10px;
        
            }
            label { margin-top: 7px; }


        }

    }

`