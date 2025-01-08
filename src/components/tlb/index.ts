import { errorExit } from '../../utils/errorExit.js'

const expected: string = 'Expected Arguments: -e <entries>'

if (process.argv.length != 4) {
  errorExit(`Invalid number of arguments\n${expected}`)
}

if (process.argv[2] != '-e') {
  errorExit(`Invalid argument\n${expected}`)
}

const entries: number = Number(process.argv[3])

if (isNaN(entries)) {
  errorExit(`Invalid number of entries: Must be an integer\n${expected}`)
}

if (!entries.toString(2).match(/^10+$/)) {
  errorExit(`Invalid number of entries: Must be a power of 2\n${expected}`)
}
