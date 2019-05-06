ics: # to be run on host
	@docker build -t engineroom/events:latest .
	@docker run -it -u $$(id -u) -v "$$(pwd):/app" engineroom/events:latest
_ics: # to be run in container
	node src/ics.js
