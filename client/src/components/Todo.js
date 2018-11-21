import React, { Component } from 'react'
import { Background, Card, Title, Input, Form, List, Item, ButtonDelete } from '../lib'
import { getAllTasks, createTask, deleteTask } from '../services/tasks'

export default class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      list: []
    }
  }

  async componentDidMount () {
    const list = await getAllTasks()
    if (list) {
      this.setState({ list: list.data })
    }
  }

  async onSubmit (event) {
    event.preventDefault()
    const form = event.target
    const inputTask = form.item.value
    const response = await createTask(inputTask)

    if (inputTask) {
      this.setState({
        list: [
          ...this.state.list,
          { task: response.data.task, id: response.data.id }
        ]
      })
    }
    form.reset()
  }

  async onDelete (item) {
    await deleteTask(item.id)
    const newList = [...this.state.list].filter((i) => i.id !== item.id)
    this.setState({ list: newList })
  }

  render () {
    const { list } = this.state

    return (
      <Background>
        <Card>
          <Title color='black'> to do </Title>
          <Form onSubmit={this.onSubmit.bind(this)}>
            <Input type='text' name='item' autoFocus />
          </Form>
          <List>
            {
              list.map((item, i) =>
                <Item key={i} color='black'
                >{item.task}<ButtonDelete onClick={() => this.onDelete(item)}>X</ButtonDelete></Item>
              )
            }
          </List>
        </Card>
      </Background>
    )
  }
}
