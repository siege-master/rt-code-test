var AsciiTable = require('ascii-table')
let i
async function buildTable(user, flatData, sortAsc, sortDesc) {
  let data = JSON.parse(flatData)

  var table = new AsciiTable().fromJSON
  ({
    title: user,
    heading: ['Repository Name', 'Stargazer Count'],
    rows: [],
  })

  for (i = 0; i < Object.keys(data).length; i++) {
    table.addRow(data[i].name, data[i].stargazers_count)
  }

  if (sortAsc === true) {
    table.sortColumn(1, function (a, b) {
      return a - b
    })
  } else if (sortDesc === true) {
    table.sortColumn(1, function (a, b) {
      return b - a
    })
  }
  return table.toString()
}
module.exports = buildTable
