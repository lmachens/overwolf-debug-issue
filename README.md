# Setup

First, install dependencies and run the server:

```
npm install
npm start
```

Now, load this app as unpackaged extension.

Please open Dev Tools for Console errors and logs. Both issues only happen
if `debug_url` is set in manifest.json. To test the differences, you can toggle this line.

## Overwolf not ready

On first start, Overwolf doesn't seems to be ready if `debug_url` is set.
You can reproduce this issue by disable, enable and launch the app. If you
reload the window in the developer tools, the error is gone.

```
Uncaught ReferenceError: overwolf is not defined at main.js:3
```

## Load media

If you try to load media via overwolf:// or file:///, it is blocked if
`debug_url` is set. I placed a `test.mp4` in this folder which was
recorded with the overwolf replay api. Please move this file to your
Overwolf video folder.
