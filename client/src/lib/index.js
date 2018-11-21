import styled from 'styled-components'

export const Background = styled.div`
  background-color: #3A394D
  height: 100vh
  display: flex
  flex: 1
  justify-content: center
  align-items: center
`

export const Title = styled.h1`
  color: ${({ color }) => color || '#000000'}
  text-align: center
  padding: 15px
  margin-top: 5px
  margin-bottom: 30px
`

export const Card = styled.div`
  border-radius: 5px
  width: 400px
  background-color: white
  box-shadow: 0 8px 8px -4px rgba(0,0,0, 0.4);
  padding: 30px
  display: flex
  flex-direction: column
  align-items: center
`

export const Input = styled.input`
  font-size: 15px
  padding: 5px
  display: flex
  flex: 1
  border-top: none
  border-right: none
  border-left: none
  margin-bottom: 30px
  border-bottom: 1.2px solid #3A394D
  transform: translate(0%, -30%)
  transition: 0.1s ease-out
  ::placeholder {
    color: #BBBBBB
  }
  &:focus {
    outline:none
    border-bottom: 2px solid #3A394D
  }
`

export const Form = styled.form`
  width: 200px;
  display: flex;
  flex-direction: column
`

export const List = styled.ul`
  list-style: none
  width: 200px
  padding: 0
`

export const Item = styled.li`
  margin-bottom: 10px
  color: ${({ color }) => color || '#04BCFB'}
  display: flex
  justify-content: space-between
  border-bottom: 0.5px solid #04BCFB
  padding-bottom: 5px
`

export const ButtonDelete = styled.button`
  color: white
  background-color: #3A394D
  border-radius: 5px
  border: none
  outline: none
`
export const Button = styled.button`
  margin:auto
  color: white
  background-color: #3A394D
  border-radius: 3px
  border: none
  outline: none
  width: 50%
  text-align: center
  padding: 10px
  margin-top: 20px
`
export const Label = styled.p`
  text-align: center
`
