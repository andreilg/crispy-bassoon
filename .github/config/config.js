'use strict'
const config = require('conventional-changelog-conventionalcommits');

module.exports = config({
    "types": [
    {"type": "feat", "section": "🚀 Features"},
    {"type": "fix", "section": "Bug Fixes"},
    {"type": "chore", "hidden": true},
    {"type": "docs", "hidden": true},
    {"type": "style", "hidden": true},
    {"type": "refactor", "hidden": true},
    {"type": "perf", "hidden": true},
    {"type": "test", "hidden": true}
]
})
