/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "e66cbf2edf6187976f7e8914ac406962"
  },
  {
    "url": "assets/css/0.styles.1e33f674.css",
    "revision": "11251911c356c92705c56ae3eb7a86b3"
  },
  {
    "url": "assets/img/activities.36116c16.png",
    "revision": "36116c16687c3473ca786d4c7d62e016"
  },
  {
    "url": "assets/img/add_circle_outline.c5b0d45d.svg",
    "revision": "c5b0d45d9ff3b78a9ac4ac72a70ea50c"
  },
  {
    "url": "assets/img/add.0e3e08bc.svg",
    "revision": "0e3e08bcb441c2cb39bdfff7f56f06a2"
  },
  {
    "url": "assets/img/address-bar.a15ff370.png",
    "revision": "a15ff370eed2f8f0b8219ea3d4976318"
  },
  {
    "url": "assets/img/address.8c163b8f.png",
    "revision": "8c163b8f3c49e340a7c9546af4ed690e"
  },
  {
    "url": "assets/img/content_copy.72dd793a.svg",
    "revision": "72dd793a97203adfad3c50ebad310ee4"
  },
  {
    "url": "assets/img/control_point_duplicate.0028d2cc.svg",
    "revision": "0028d2cca15e5c298bc49d9f8058a0d3"
  },
  {
    "url": "assets/img/delete_forever.01754524.svg",
    "revision": "017545249afd67806be943eae9f18bc2"
  },
  {
    "url": "assets/img/directions_car.c9b170b8.svg",
    "revision": "c9b170b848c5d4b8dd0e61f16bd75c75"
  },
  {
    "url": "assets/img/directions_walk.27f1ba22.svg",
    "revision": "27f1ba221570d364f986a1bc342c3e05"
  },
  {
    "url": "assets/img/done_all.28f39764.svg",
    "revision": "28f397644d2d6fe6c3fde0446891cf26"
  },
  {
    "url": "assets/img/done.89e6f120.svg",
    "revision": "89e6f1201212082536271f14401d3d41"
  },
  {
    "url": "assets/img/flight.1eb2837a.svg",
    "revision": "1eb2837abbb46c402e137802482339bc"
  },
  {
    "url": "assets/img/ledger_logo.8d1c9c23.svg",
    "revision": "8d1c9c23425c3b507e87663b24e54d0e"
  },
  {
    "url": "assets/img/link.98f4f684.svg",
    "revision": "98f4f6841f3d482b15c3a9d79c8db50f"
  },
  {
    "url": "assets/img/logoSync.7d4e71a5.svg",
    "revision": "7d4e71a555356bf3338258bfd8ba32b2"
  },
  {
    "url": "assets/img/menu.55f68494.svg",
    "revision": "55f6849429de279d473c459c7ead3249"
  },
  {
    "url": "assets/img/message.759cf5c9.svg",
    "revision": "759cf5c9195a7ba83dfe7b47cd809ffe"
  },
  {
    "url": "assets/img/more_horiz.d644ed95.svg",
    "revision": "d644ed957e2662b1d22adb890310e64f"
  },
  {
    "url": "assets/img/mpp.58a89201.png",
    "revision": "58a892017c66b562945baeee15505c80"
  },
  {
    "url": "assets/img/preview.2a0e91e4.svg",
    "revision": "2a0e91e455559dd783005560c3ffcbe0"
  },
  {
    "url": "assets/img/qr_code_2.b60a5eec.svg",
    "revision": "b60a5eec09a98201dd9a090a00e521bb"
  },
  {
    "url": "assets/img/query_builder.3c7597b2.svg",
    "revision": "3c7597b2a77f9fe763c44489b872ac31"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/search.db5d8122.svg",
    "revision": "db5d8122836517965b6e0247a3a9691c"
  },
  {
    "url": "assets/img/send.5b08a89d.svg",
    "revision": "5b08a89d2dd3351ce4ef110d2909cb23"
  },
  {
    "url": "assets/img/settings.d31d71f9.png",
    "revision": "d31d71f992404bd7970a450cfe4ec99c"
  },
  {
    "url": "assets/img/signing.81aa8084.png",
    "revision": "81aa8084f7901a510293cf30ba4bb26e"
  },
  {
    "url": "assets/img/unfold_more.52bd8411.svg",
    "revision": "52bd8411f8aea9dba1e636497a1c3d3e"
  },
  {
    "url": "assets/img/wallet-detail-activity.0f9d89a3.png",
    "revision": "0f9d89a34631323541d04818f4a00ac4"
  },
  {
    "url": "assets/img/wallet.08efbe38.png",
    "revision": "08efbe38b38fce44fa3542a9a0dd156d"
  },
  {
    "url": "assets/js/10.b50ed1ce.js",
    "revision": "4b273df67636005be66c984d9df0ad20"
  },
  {
    "url": "assets/js/11.3ddcd6ee.js",
    "revision": "f6ffa2603856473ddf34d6b652db7267"
  },
  {
    "url": "assets/js/12.bff1bb0a.js",
    "revision": "c2012fd71526390be0d9007ce5547bff"
  },
  {
    "url": "assets/js/13.6c97bc73.js",
    "revision": "92dd768157c52573dbc56cb3ce846c05"
  },
  {
    "url": "assets/js/14.29e72183.js",
    "revision": "66a2120e6a81ca3bcd1b72a224d3309e"
  },
  {
    "url": "assets/js/15.38c62c5e.js",
    "revision": "07b5b92b2ff8434247464c56e1f15eb1"
  },
  {
    "url": "assets/js/16.4a7c12e0.js",
    "revision": "ff18ba17b10c914c5e327c50bc9442e2"
  },
  {
    "url": "assets/js/17.b19c135d.js",
    "revision": "6fcb9860487ad6adad8bcaf0efb2c4b0"
  },
  {
    "url": "assets/js/18.bc04ad05.js",
    "revision": "17b34962d501d41c994935a46b498277"
  },
  {
    "url": "assets/js/19.4aec5e7d.js",
    "revision": "0cf634bb7b1e8efe99a7b4f6014f8ff1"
  },
  {
    "url": "assets/js/20.42cecf87.js",
    "revision": "50757f2cc770099a75cfeb168eb1b744"
  },
  {
    "url": "assets/js/21.7a747eaa.js",
    "revision": "1b4feb2d9626ae96b6850eb3e0934f6a"
  },
  {
    "url": "assets/js/22.235d3b31.js",
    "revision": "8dfce450cd3f0daafac67eb0801a4107"
  },
  {
    "url": "assets/js/23.f2dbe341.js",
    "revision": "9c02acd6cc9b990d83c668813f263683"
  },
  {
    "url": "assets/js/24.dc338c1f.js",
    "revision": "c2141753fd3ab4eff81dc233eb632e93"
  },
  {
    "url": "assets/js/25.ac9c47af.js",
    "revision": "5bdf4ea76007539cd6c12ab2643c0a21"
  },
  {
    "url": "assets/js/26.5c2ab12d.js",
    "revision": "255d90e4ca9ca92399ddd1bc4fb79d84"
  },
  {
    "url": "assets/js/27.c359aeea.js",
    "revision": "50249bcbf135866976a3c1caeeae4d3e"
  },
  {
    "url": "assets/js/28.617ecf0c.js",
    "revision": "312e25cdb0f4706a8437e093daf8a1b5"
  },
  {
    "url": "assets/js/29.b1970803.js",
    "revision": "81b40b023ae73c86ee16b45bc16ada7e"
  },
  {
    "url": "assets/js/3.e8d6679f.js",
    "revision": "109a2a9e9f7a5845f45df68f452b41f5"
  },
  {
    "url": "assets/js/30.17c170db.js",
    "revision": "8769c3479af2228ce3adee3c866d4c47"
  },
  {
    "url": "assets/js/31.2ee84ea9.js",
    "revision": "838ac5995f51e6ccd7f8ccf5927536c8"
  },
  {
    "url": "assets/js/32.651bf26e.js",
    "revision": "94daa30c0b6090a55c4b1d6b2ac5e5ae"
  },
  {
    "url": "assets/js/33.8d4b2f76.js",
    "revision": "391b32a02f283ac9b33aefb28bf8a1c1"
  },
  {
    "url": "assets/js/34.24d8da7d.js",
    "revision": "5a1aa14bf1b8a1698382cae9ce8d9460"
  },
  {
    "url": "assets/js/35.ad0da008.js",
    "revision": "7ae0321e568ede4636eef9f215cd4110"
  },
  {
    "url": "assets/js/36.5c367c0f.js",
    "revision": "b8e5abd9aca15d465f5cfdd767a3bf4e"
  },
  {
    "url": "assets/js/37.e153e06b.js",
    "revision": "3582bee22e6c062b56491af919db6bcc"
  },
  {
    "url": "assets/js/38.18b19efb.js",
    "revision": "0bbe8a88de77181087909bc2715b7c4d"
  },
  {
    "url": "assets/js/39.a0b36443.js",
    "revision": "5ac55a31a7b13faeac3203319bdf15be"
  },
  {
    "url": "assets/js/4.a9552057.js",
    "revision": "da45944f651173e3a7ffeb82c9f7059f"
  },
  {
    "url": "assets/js/40.9f39bd57.js",
    "revision": "70e2dd62f38987d5ef537d40c0c2c6cb"
  },
  {
    "url": "assets/js/41.4e058a15.js",
    "revision": "dacb39b87c7c9ccbce16a69ab03335c6"
  },
  {
    "url": "assets/js/42.4bfff46b.js",
    "revision": "b3fb3595c749f2903d6b6d773dc39746"
  },
  {
    "url": "assets/js/43.b3b15ec2.js",
    "revision": "1d9121ddbeb51c24eaf87854d98d5bd9"
  },
  {
    "url": "assets/js/44.56a56c05.js",
    "revision": "995b6948cb3eb46c8df55921e70dd7dd"
  },
  {
    "url": "assets/js/45.ca6603f8.js",
    "revision": "9d7c0af83d6fcb97bbf78c4f86099e6b"
  },
  {
    "url": "assets/js/46.616c2ab2.js",
    "revision": "92e0cf838e7260f8aa2bfd6e5a316889"
  },
  {
    "url": "assets/js/47.e43c630f.js",
    "revision": "57e1e12feae7f706bc8799b386426cd0"
  },
  {
    "url": "assets/js/48.0096203e.js",
    "revision": "86c016dafbd7386134204f1880ab4394"
  },
  {
    "url": "assets/js/49.a1d47933.js",
    "revision": "d71526037a842c23915e2ddf59459bb6"
  },
  {
    "url": "assets/js/5.73731419.js",
    "revision": "2f17c42292b561ee1984261f1ffb0c2a"
  },
  {
    "url": "assets/js/50.35a8dde9.js",
    "revision": "089eb7e788565680e0761bc7e3516f8a"
  },
  {
    "url": "assets/js/51.62dd6719.js",
    "revision": "dd4d2b0c51ebbb97446becfd1f26cff0"
  },
  {
    "url": "assets/js/52.67ec8a7c.js",
    "revision": "e0d9c599a205384f7721956939e41ce2"
  },
  {
    "url": "assets/js/6.ac367f54.js",
    "revision": "e3eeb520d4faa2f9ba03d06393c725f2"
  },
  {
    "url": "assets/js/7.fc92430d.js",
    "revision": "2a9e483156b7e1d9be07a7e1abe19bca"
  },
  {
    "url": "assets/js/8.901640c8.js",
    "revision": "88be9f154c6b41b7050d194c8d0f8e1c"
  },
  {
    "url": "assets/js/9.02f743d4.js",
    "revision": "6367204605462c63fcf1a1e576ffed9a"
  },
  {
    "url": "assets/js/app.4018d393.js",
    "revision": "374d812f8144e2dcf8ae48815af4a62a"
  },
  {
    "url": "assets/js/vendors~docsearch.7f7e78a4.js",
    "revision": "1833333cc9231e785803d70cf74d7b8e"
  },
  {
    "url": "connex/api.html",
    "revision": "2e93ec20cce7955fabce1adb29db853c"
  },
  {
    "url": "connex/index.html",
    "revision": "42d1530b310952e716319f7e5e9283a2"
  },
  {
    "url": "icons/144.png",
    "revision": "ef022f52c54f8ee6ccc8f005d52b99de"
  },
  {
    "url": "icons/168.png",
    "revision": "cd596353879cab531903b1f9c0f8d6dc"
  },
  {
    "url": "icons/192.png",
    "revision": "6aaa85947b9a315ac47970a54c3a66f4"
  },
  {
    "url": "icons/48.png",
    "revision": "2d20f253068748053fc7082400c88f4b"
  },
  {
    "url": "icons/72.png",
    "revision": "02b333d138cc4764e770eb1d7274e7ea"
  },
  {
    "url": "icons/96.png",
    "revision": "b3240f2ffb00f383cbc3783370a782cc"
  },
  {
    "url": "index.html",
    "revision": "b1d9635fee781c8b783144c1584170a8"
  },
  {
    "url": "logo.png",
    "revision": "1f7569a7fb96e141f556669c77877f1f"
  },
  {
    "url": "others/demos-and-services.html",
    "revision": "5ea20f4d3b0c21bd7da874d657c10e84"
  },
  {
    "url": "others/miscellaneous.html",
    "revision": "b8f7616b548c2ce918c30b433ed59002"
  },
  {
    "url": "sync/download-and-install.html",
    "revision": "941dec19223710cac6faa3b1519ffe69"
  },
  {
    "url": "sync/faq.html",
    "revision": "605aa50ede359dc159575eb9c7469938"
  },
  {
    "url": "sync/user-guide/activities.html",
    "revision": "16e90477faa11c2d086951efa2b0ec52"
  },
  {
    "url": "sync/user-guide/browse-dapp-and-web.html",
    "revision": "8eb7ca905a592bcf081db6b0edd5c045"
  },
  {
    "url": "sync/user-guide/contribute.html",
    "revision": "1b32f3c3c5b84d59d44dc567e8c67559"
  },
  {
    "url": "sync/user-guide/contributing.html",
    "revision": "063426d98f96face17fcedd0d3ddaa42"
  },
  {
    "url": "sync/user-guide/import-ledger.html",
    "revision": "21ed79b7e2620af945bb6ac0ed30e645"
  },
  {
    "url": "sync/user-guide/index.html",
    "revision": "33385717dc155038c1a8bccfc3d9cceb"
  },
  {
    "url": "sync/user-guide/interact-with-dapps.html",
    "revision": "a60d1f46147c46c2d23f3ab1cffd7983"
  },
  {
    "url": "sync/user-guide/report-issue.html",
    "revision": "1579fafc7405a2b7ca712a7e1c668d08"
  },
  {
    "url": "sync/user-guide/settings.html",
    "revision": "25512215c5b18bb7cffa21b6f3e03f5d"
  },
  {
    "url": "sync2/get-started.html",
    "revision": "3a035d7e9db57eac16b0a64b24f333e2"
  },
  {
    "url": "sync2/user-guide/activities.html",
    "revision": "22c2a132450ed41089ca13658702a944"
  },
  {
    "url": "sync2/user-guide/index.html",
    "revision": "0e994457031628b31707756e48413d4a"
  },
  {
    "url": "sync2/user-guide/settings.html",
    "revision": "d9bbbed3492bdd0a49d62609615d4940"
  },
  {
    "url": "sync2/user-guide/signing.html",
    "revision": "e39c8731bba32157a1cb3395ffefc205"
  },
  {
    "url": "sync2/user-guide/wallet.html",
    "revision": "9e4379b9d79b5fa7d7c791b2a0867752"
  },
  {
    "url": "thor/get-started/api.html",
    "revision": "5f076404555eb391a9b0f202ddbd12d3"
  },
  {
    "url": "thor/get-started/custom-network.html",
    "revision": "0eb107c162e7b6e33151db582de69f56"
  },
  {
    "url": "thor/get-started/installation.html",
    "revision": "539961ea458eb9d634ee573679922663"
  },
  {
    "url": "thor/learn/block.html",
    "revision": "e0809aa0601130837ea7117443725596"
  },
  {
    "url": "thor/learn/builtin-contracts.html",
    "revision": "8266dadf9c516c816eb963b50010a9a9"
  },
  {
    "url": "thor/learn/faq.html",
    "revision": "2e824adb8fafd4463213a0a70ad101bd"
  },
  {
    "url": "thor/learn/fee-delegation.html",
    "revision": "79031928c8ccc8b578ea7792d25db0cb"
  },
  {
    "url": "thor/learn/index.html",
    "revision": "8351b270fe2fa26164f2657bf41579be"
  },
  {
    "url": "thor/learn/proof-of-authority.html",
    "revision": "33fe1db6007a9ddd8c5a7c438d2dc292"
  },
  {
    "url": "thor/learn/transaction-calculation.html",
    "revision": "236ed453475de51e385e8b8d54d05d74"
  },
  {
    "url": "thor/learn/transaction-model.html",
    "revision": "715f584a38f67c691766bdb7b1995486"
  },
  {
    "url": "thor/learn/two-token-design.html",
    "revision": "ef6f0afd02356637ceaa86a3bf55b143"
  },
  {
    "url": "tutorials/contribute.html",
    "revision": "45601206f5e4d56eb123457f407520a9"
  },
  {
    "url": "tutorials/designated-fee-delegation.html",
    "revision": "fb3d3b167967d5b8cd326a755a6b802e"
  },
  {
    "url": "tutorials/forcible-transaction-dependency.html",
    "revision": "4df959d38df82f76879798339d41926c"
  },
  {
    "url": "tutorials/how-to-develop-a-dapp-on-vechain-1.html",
    "revision": "b2dcabb2f8bef0e0f85eab63646f6ce7"
  },
  {
    "url": "tutorials/how-to-develop-a-dapp-on-vechain-2.html",
    "revision": "395143d52494881581f20cc8e05179a4"
  },
  {
    "url": "tutorials/how-to-develop-a-dapp-on-vechain-3.html",
    "revision": "6b20b5b2b2bb9b2ff4171f99d6cd185f"
  },
  {
    "url": "tutorials/how-to-integrate-VIP-191-1.html",
    "revision": "7e2095d3c980077ce9bb10147e8336ec"
  },
  {
    "url": "tutorials/how-to-integrate-VIP-191-2.html",
    "revision": "ee7e9759dde6be605264a81244ef4d4b"
  },
  {
    "url": "tutorials/how-to-integrate-VIP-191-3.html",
    "revision": "47d1cad4c85396fc7a821b18067d95ca"
  },
  {
    "url": "tutorials/index.html",
    "revision": "c74002fe918b7f66316585f08b9c4a4a"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
