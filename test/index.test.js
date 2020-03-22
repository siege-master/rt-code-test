const {expect, test} = require('@oclif/test')
const cmd = require('..')

describe('rtcodetest', () => {
  test
  .stdout()
  .do(() => cmd.run([]))
  .it('generates a table', ctx => {
    expect(ctx.stdout).to.contain('.----')
  })
})