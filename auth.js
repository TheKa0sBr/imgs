const url = ['otaku-cheiroso-vue.herokuapp.com', 'localhost:8080']

module.exports = (req, res, next) => {
  try{
    const origin = req.header('Origin').replace('https://', '').replace('http://', '').split('/')[0]
    if (url.indexOf(origin) !== -1)
      return next()
    return res.status(401).send({ error: 'unauthenticated origin' })
  }catch(err) {
    return res.status(400).send({ error: 'Error' })
  }
}
