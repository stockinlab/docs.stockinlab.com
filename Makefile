domain := "docs.stockinlab.com"
server := "stockinlab"

.PHONY: deploy
deploy:
	git push
	ssh -A $(server) 'cd $(domain) && git pull origin main && yarn && yarn run docs:build'
