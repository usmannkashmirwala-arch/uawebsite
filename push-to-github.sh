#!/bin/bash
# One-time setup script — run this from Terminal ONCE to push to GitHub.
# After this is done, you can delete this file.

set -e

REPO_DIR="$(cd "$(dirname "$0")" && pwd)"
cd "$REPO_DIR"

echo "📁 Working in: $REPO_DIR"
echo ""

# Remove any broken .git directory and start fresh
echo "🔧 Initialising git..."
rm -rf .git
git init
git checkout -b main
git remote add origin https://github.com/usmannkashmirwala-arch/uawebsite.git
git fetch origin

# Reset to match the existing initial commit on GitHub
git reset --mixed origin/main

# Stage all project files
echo "📦 Staging all files..."
git add .

# Commit
echo "💾 Creating commit..."
git commit -m "Add full website codebase with CLAUDE.md and GitHub Pages deploy

- All React/TypeScript pages (12 routes) and shared components
- CLAUDE.md: complete design system and conventions guide for Claude Code
- .github/workflows/deploy.yml: auto-deploys to GitHub Pages on push to main
- .gitignore: proper exclusions for Vite + React"

# Push
echo "🚀 Pushing to GitHub..."
git push origin main

echo ""
echo "✅ Done! Your code is now on GitHub."
echo ""
echo "👉 Next step: enable GitHub Pages in your repo settings:"
echo "   1. Go to: https://github.com/usmannkashmirwala-arch/uawebsite/settings/pages"
echo "   2. Under 'Source', select 'Deploy from a branch'"
echo "   3. Choose branch: gh-pages  |  folder: / (root)"
echo "   4. Click Save"
echo ""
echo "   The first deploy will run automatically once you push."
echo "   Your site will be live at: https://usmannkashmirwala-arch.github.io/uawebsite/"
