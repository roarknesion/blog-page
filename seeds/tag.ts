import { write, join, capitalize, lorem, paths, datatype } from './plugins'

interface HeadMeta {
  name: string
  description: string
}

const head = (meta: HeadMeta) =>
  [`---`, `name: ${meta.name}`, `description: ${meta.description}`, `---`].join(
    '\n'
  )

for (let i = 0; i < 8; i++) {
  const meta = {} as HeadMeta

  const name = lorem.word(datatype.number(8) + 4)
  const path = join(paths.tags, `${name}.md`)

  meta.name = capitalize(name, '-')
  meta.description = capitalize(
    lorem
      .sentences(16)
      .slice(0, 240)
      .split('.')
      .slice(0, -1)
      .join(',') + '.',
    ''
  )

  write(path, head(meta))
}
