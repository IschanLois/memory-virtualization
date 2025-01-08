const expected: string = 'Expected Arguments: -e <entries>'

if (process.argv.length != 4) {
  console.error(`Invalid number of arguments\n${expected}`)
  process.exit(1)
}

if (process.argv[2] != '-e') {
  console.error(`Invalid argument\n${expected}`)
  process.exit(1)
}

const entries: number = Number(process.argv[3])

if (isNaN(entries)) {
  console.error(`Invalid number of entries: Must be an integer\n${expected}`)
  process.exit(1)
}

if (!entries.toString(2).match(/^10+$/)) {
  console.error(`Invalid number of entries: Must be a power of 2\n${expected}`)
  process.exit(1)
}
