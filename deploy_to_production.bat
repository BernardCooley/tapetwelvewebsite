call ng build --prod --base-href="https://BernardCooley.github.io/tapetwelvewebsite/"
call git add .
call git commit -m"prod release"
call git push -u origin master
call angular-cli-ghpages