import {
  read,
  write,
  readdir,
  join,
  capitalize,
  lorem,
  random,
  date,
  paths,
  datatype
} from './plugins'

const images = {} as { all: string[]; history: string[] }
images.all = readdir(paths.images)
images.history = [...images.all]

const tags = readdir(paths.tags).map(i => i.replace('.md', ''))
const body = read(paths.article, 'utf-8')

interface HeadMeta {
  title: string
  description: string
  cover: string
  source: string
  alt: string
  tags: string[]
  update: string
}

const head = (meta: HeadMeta) =>
  [
    `---`,
    `title: ${meta.title}`,
    `description: ${meta.description}`,
    `cover: ${meta.cover}`,
    `source: https://unsplash.com/photos/${meta.source}`,
    `alt: ${meta.alt}`,
    `update: ${meta.update}`,
    `tags:`,
    ...meta.tags.map(tag => ' - ' + tag),
    `---`
  ].join('\n')

const updates = Array(24)
  .fill(null)
  .map(i => date.past(10))
  .sort((i, j) => i.getTime() - j.getTime())
  .map(i => i.toJSON())

for (const update of updates) {
  const meta = {} as HeadMeta

  const name = lorem.slug()
  const path = join(paths.articles, `${name}.md`)

  const image = random.arrayElement(images.history)
  images.history = images.history.filter(i => i != image)
  if (!images.history.length) images.history = [...images.all]

  meta.title = capitalize(name, '-')
  meta.description = capitalize(
    lorem
      .sentences(16)
      .slice(0, 240)
      .split('.')
      .slice(0, -1)
      .join(',') + '.',
    ''
  )
  meta.cover = image
  meta.source = image.replace('.jpg', '')
  meta.alt = lorem.sentence()

  meta.update = update

  meta.tags = random.arrayElements(tags, datatype.number(4) + 4)

  const article = [head(meta), body].join('\n\n')

  write(path, article)
}
