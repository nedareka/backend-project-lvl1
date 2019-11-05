install:
	npm install

start:
	npx babel-node src/bin/games/brain-games.js

publish:
	npm publish --dry-run

lint:
	npx eslint .

brain-even:
	npx babel-node src/bin/games/brain-even.js

brain-calc:
	npx babel-node src/bin/games/brain-calc.js

