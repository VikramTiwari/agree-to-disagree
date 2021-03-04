const simpleGit = require('simple-git')
const git = simpleGit({
	baseDir: process.cwd(),
})

async function addCommitAndPush() {
	await git.add(`./*`)
	const commitMessage = `Auto-Archive-Service`
	await git.commit(commitMessage)
	await git.push()
}

module.exports = {
	addCommitAndPush,
}
