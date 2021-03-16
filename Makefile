domain := "docs.stockinlab.com"
server := "stockinlab"

.PHONY: deploy
deploy:
	ssh -A $(server) 'cd $(domain) && git pull origin master && yarn && yarn run build'
