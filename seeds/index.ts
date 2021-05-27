import { remove, create, exists, paths } from './plugins'

if (exists(paths.content)) remove(paths.content, { recursive: true })

create(paths.content)
create(paths.tags)
create(paths.articles)

import './tag'
import './article'
