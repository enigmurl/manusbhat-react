#!/bin/zsh

if [ "$#" -ne 1 ]; then 
    echo "Usage: ./publish.sh \"[commit message]\""
    exit 1
fi

#publish
echo "~~~~BUILD PHASE~~~~"
npm run build

echo "~~~~FINISH BUILD~~~~"

echo "~~~~CHANGE DIRECTORIES~~~~"
cd build/


echo "~~~~NOW IN~~~~"
pwd

echo "~~~~START GIT~~~~"

gitignore = "
#os and misc\n
.DS_Store\n
.env.local\n
.env.development.local\n
.env.test.local\n
.env.production.local\n
*.swp\n
#manifests\n
manifest.json\n
asset-manifest.json\n
"

echo "$gitignore" >> ".gitignore"

git add -A
git commit -m $0
git branch -M main

git remote add origin https://github.com/manusbhat/manusbhat.github.io
git push -u main origin --force

echo "~~~~FINISH~~~~"
