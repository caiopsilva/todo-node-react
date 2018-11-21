import jwt from 'jsonwebtoken'

export default token => {
  const user = jwt.verify(token, process.env.SECRET)
  if (user) {
    return { user: user.sub }
  } else {
    throw new Error('Not authorized')
  }
}
