import {
  readFileSync as read,
  writeFileSync as write,
  rmSync as remove,
  mkdirSync as create,
  existsSync as exists,
  readdirSync as readdir
} from 'fs'

import { join } from 'path'

import { lorem, random, date, datatype } from 'faker'

const dir = __dirname

const paths = {
  content: join(dir, '..', 'content'),
  tags: join(dir, '..', 'content', 'tags'),
  articles: join(dir, '..', 'content', 'articles'),
  article: join(dir, 'article.md'),
  images: join(dir, '..', 'static', 'images')
}

const upper = (s: string) => s.toUpperCase()
const lower = (s: string[]) => s.join('').toLowerCase()
const converter = ([first, ...rest]: string) => upper(first) + lower(rest)

const capitalize = (text = '', separator = ' ') => {
  if (!separator) return converter(text)

  const words = text.split(separator).map(i => converter(i))

  return words.join(' ')
}

export {
  read,
  write,
  remove,
  create,
  exists,
  readdir,
  join,
  capitalize,
  date,
  lorem,
  random,
  datatype,
  paths
}
