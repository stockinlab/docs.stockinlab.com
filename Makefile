domain := "docs.stockinlab.com"
server := "stockinlab"

.PHONY: deploy
deploy:
	ssh -A $(server) 'cd $(domain) && git pull origin main && yarn && yarn run build'
