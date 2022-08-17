 "scripts": {
    "netlify:deploy": "netlify deploy --dir=./build -p -m \"$(git log -1 --pretty=%B)\""
  }