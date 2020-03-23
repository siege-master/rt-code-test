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
    if (!flags.user) {
      console.log ('A gitHub user name  must be included using the -u flag')
      return
    }
    this.log(`\r\nQuerying Stargazers for ${user} from Github...\r\n`)
    let getData
       
    //Pass Github API token and user to getGitHubData in api.js
    //which returns an object to build the table from.
    try {
      getData = await getGitHubData(process.env.API_TOKEN, user)
    }
    catch (error) {
      console.log('Error occurred while trying to get Github Data')
      console.error(error)
      return
    }
    //Pass the user name, object, and sorting flag to table.js 
    //which builds, sorts, and prints the table to the terminal.
    try {     
      await table(user, getData, flags.ascending)
    } 
    catch (error) {
      console.log('Error occurred while trying to build the table')
      console.error(error)
      return
    }
  }
}
//Oclif flag setup
RtcodetestCommand.description = 'Queries the Github REST API v3 for a specific user, which returns their repositories as well as the number of stargazers on each repository.  Table is sorted by descending number of Stargazers by default.'
RtcodetestCommand.flags = {
  version: flags.version({char: 'v'}),
  help: flags.help({char: 'h'}),
  user: flags.string({char: 'u', description: 'Name of user that will be sent to the Github REST API v3 for querying'}),
  ascending: flags.boolean({char: 'a', description: 'Sort table by ascending number of stargazers', default: false}),
}
module.exports = RtcodetestCommand
