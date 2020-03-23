const GitHub = require('github-api')
require('.')
/**
 * Receives api-token for Github Rest API v3, as well as a github user name.
 * 
 * @param {string} token - API Token to use with Github Rest API v3
 * @param {string} user  - Github user name
 * @returns {Promise<Array<*>>} - Returns an array of objects containing the names of repositories and their corresponding stargazer counts.
 */
async function getGitHubData(token, user) {
  const gh = new GitHub({
    token: token,
  })
  const me = gh.getUser(user)
  const repos = await me.listRepos()
  return repos.data.map((repo) => {
    return {
      name : repo.name,
      stargazers_count : repo.stargazers_count,
    }
  })
}
module.exports = getGitHubData

