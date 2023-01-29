import { inline } from "./inline.js" // Precisa do nome EXATO, mas pode usar que nem python = import { inline as i } from "./inline.js"
                                     // import { inline as i }

import defaultInline from "./inline.js" // Pode chamar por qualquer nome // Só pode um por arquivo

import { group } from "./non-inline.js"

import exportDefault from "./non-inline.js" // Pode chamar por qualquer nome

inline()
defaultInline()

group()
exportDefault()