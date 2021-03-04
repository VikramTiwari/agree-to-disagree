const path = require('path')
const { chromium } = require('playwright')
const { addCommitAndPush } = require('./repo')

const indexes = require('./indexes.json')

async function getScreenshot(browser, index) {
	const page = await browser.newPage()
	await page.goto(index.url)
	await page.screenshot({
		path: path.join(__dirname, `collection/${index.id}.png`),
		fullPage: true,
	})
}

async function start() {
	const browser = await chromium.launch()
	const promises = []
	for (let i = 0; i < indexes.length; i++) {
		const index = indexes[i]
		console.log(`adding ${index.id} from ${index.url}`)
		await getScreenshot(browser, index)
		console.log(`added ${index.id} from ${index.url}`)
	}
	await Promise.allSettled(promises)
	if (process.env.NODE_ENV === `production`) {
		await addCommitAndPush()
	}
	await browser.close()
}

start()
