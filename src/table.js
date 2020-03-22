const AsciiTable = require('ascii-table')

/**
 * 
 * @param {string} user - Github user name that will be queried
 * @param {Array<*>} data - Array of repo names and stargazer_counts
 * @param {boolean} sortAsc - Flag indicating that the table should be sorted ascending by stargazers_count
 * @param {boolean} sortDesc - Flag indicating that the table hsould be sorted descending by stargazers_count
 */
async function buildTable(user, data, sortAsc, sortDesc) {
  const table = new AsciiTable().fromJSON
  ({
    title: user,
    heading: ['Repository Name', 'Stargazer Count'],
    rows: [],
  })
  data.forEach(element => {
    table.addRow(element.name, element.stargazers_count) 
  })
  if (sortAsc) {
    table.sortColumn(1, function (a, b) {
      return a - b
    })
  } else if (sortDesc) {
    table.sortColumn(1, function (a, b) {
      return b - a
    })
  }
  return table.toString()
}
module.exports = buildTable
