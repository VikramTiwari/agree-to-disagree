const path = require('path')
const { chromium } = require('playwright')
const { writeFileSync } = require('fs')
const { performance } = require('perf_hooks')

const { addCommitAndPush } = require('./repo')

const indexes = require('./indexes.json')

async function getData(page, index) {
	await page.goto(index.url)
	await page.waitForLoadState(`domcontentloaded`)
	const text = await page.innerText(`body`)
	await page.screenshot({
		path: path.join(__dirname, `collection/${index.id}.png`),
		fullPage: true,
	})
	writeFileSync(path.join(__dirname, `collection/${index.id}.txt`), text, { encoding: `utf-8` })
}

async function start() {
	const browser = await chromium.launch()
	const page = await browser.newPage()
	await page.emulateMedia({ media: 'print' })
	for (let i = 0; i < indexes.length; i++) {
		const index = indexes[i]
		await getData(page, index)
		console.log(`added ${index.id} from ${index.url}`, performance.now())
	}
	if (process.env.NODE_ENV === `production`) {
		await addCommitAndPush()
	}
	await browser.close()
}

start()
