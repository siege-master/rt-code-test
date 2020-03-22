// Initialize dependencies
require('dotenv').config()
const {Command, flags} = require('@oclif/command')
const getGitHubData = require('./api')
const table = require('./table')

// Main CLI run function
class RtcodetestCommand extends Command {
  async run() {
    const {flags} = this.parse(RtcodetestCommand)
    const user = flags.user
    // Checks to make sure a user was entered
    if (flags.user == null) {
      console.log ('A gitHub user name  must be included using the -u flag')
      return
    }
      this.log(`Querying Stargazers for ${user} from Github`)
    let getData
    let buildTable
    //Pass gitHub API token and user to getGitHubData in api.js
    //which returns an object to build the table with.
    try {
      getData = await getGitHubData(process.env.API_TOKEN, user)
    } catch (error) {
      console.log('error')
    }
    //Pass the user flag, data received from api.js along with sorting flags
    //to table.js to build the table
    try {
      buildTable = await table(user, getData, flags.ascending, flags.descending)
      console.log(buildTable)
    } catch (error) {
      console.log('error')
    }
  }
}

//oclif flag setup
RtcodetestCommand.description = 'Queries the Github REST API v3 for a specific user, which returns their repositories as well as the number of stargazers on each repository.'
RtcodetestCommand.flags = {
  version: flags.version({char: 'v'}),
  help: flags.help({char: 'h'}),
  user: flags.string({char: 'u', description: 'Name of user that will be sent to the Github REST API v3 for querying'}),
  ascending: flags.boolean({char: 'asc', description: 'Sort table by ascending number of stargazers', default: false}),
  descending: flags.boolean({char: 'desc', description: 'Sort table by descending number of stargazers', default: false}),
}

module.exports = RtcodetestCommand
