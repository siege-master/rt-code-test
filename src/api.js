const GitHub = require('github-api')
require('.')

//Receives api-token for Github Rest API v3, as well as a github user name.
//Flattens and splices data down to the 'name' and 'stargazers_count' fields 
//before stringifying and returning it to index.js
async function getGitHubData(token, user) {
  let gh = new GitHub({
    token: token,
  })
  let data = {}
  let dataArray = []
  let leanObject = {}
  let me = gh.getUser(user)
  let repos = await me.listRepos()
  data.repos = repos.data
  dataArray = data
  dataArray = Object.entries(dataArray)
  dataArray = dataArray.flat(2)
  dataArray = dataArray.splice(1)
  leanObject = JSON.stringify(dataArray, ['name', 'stargazers_count'])

  return leanObject
}

module.exports = getGitHubData
