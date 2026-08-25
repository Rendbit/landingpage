# Well-known files

Two files the phone apps depend on. Both must be served from the apex domain
over HTTPS, with no redirect.

## apple-app-site-association

Served at `https://rendbit.com/.well-known/apple-app-site-association`.

Three things break it, and all three are easy to do by accident:

- **No `.json` extension.** The filename is exactly as written here.
- **Content-Type must be `application/json`.** Some hosts guess `text/plain`
  for an extensionless file, and iOS rejects it.
- **No redirect.** Apple follows the URL once. A redirect to `www.` fails.

The app id is the Apple Team ID plus the bundle id: `KRGZBUN982.com.app.rendbit`.

## assetlinks.json

Served at `https://rendbit.com/.well-known/assetlinks.json`.

The fingerprint is still a placeholder, because the Android app is signed with
a debug key today and has no release key yet. Once the upload keystore exists:

    keytool -list -v -keystore <upload-keystore.jks> -alias <alias> \
      | grep "SHA256:"

Paste that value in place of `REPLACE_WITH_RELEASE_SIGNING_SHA256`, without the
`SHA256:` prefix.

If you use Play App Signing, the fingerprint Google needs is the one shown in
Play Console under Setup → App signing, NOT your upload key. Getting these two
the wrong way round is the usual reason this silently does nothing.

## Checking it worked

    curl -sI https://rendbit.com/.well-known/apple-app-site-association
    curl -s  https://rendbit.com/.well-known/assetlinks.json

Apple caches the file through its CDN, so a change can take up to 24 hours to
reach devices unless the app is reinstalled.
