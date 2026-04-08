import { readdir } from "node:fs/promises"

const path = "/public/svg/gallery/"
const files = await readdir(import.meta.dir + path)

const data = files.map(f => 
`<img loading="lazy" src=".${path+f}" alt="${f}"/>
`)
Bun.write("gallery-grid.html.txt", data)