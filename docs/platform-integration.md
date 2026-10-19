# re:sonance platform integration

This fork is pinned by the `music-collab/platform` proof of concept. The platform treats openDAW as the browser editing surface and keeps GitHub credentials in its trusted API boundary.

The integration contract is intentionally small:

- open a version-pinned project and its assets;
- export a project snapshot for a proposal branch;
- notify the host page when the snapshot is ready;
- return to the song page without receiving GitHub tokens.

The host page validates `postMessage` origins and message types before accepting a snapshot.
