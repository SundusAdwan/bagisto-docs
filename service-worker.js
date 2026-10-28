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
    "url": "1.5.x/advanced/change-email-template.html",
    "revision": "3f3b029e478c98787c7cb9c6e3cc4413"
  },
  {
    "url": "1.5.x/advanced/create-payment-method.html",
    "revision": "32554543c91aeb0b3e10937fade5902b"
  },
  {
    "url": "1.5.x/advanced/create-product-type.html",
    "revision": "5a1a74860d6a9778d95b48c46dd8c72e"
  },
  {
    "url": "1.5.x/advanced/create-shipping-method.html",
    "revision": "ac7651bbea020c77c4a5128c87371620"
  },
  {
    "url": "1.5.x/advanced/events.html",
    "revision": "f5acdc6f446d97c900c6a857779938d4"
  },
  {
    "url": "1.5.x/advanced/helpers.html",
    "revision": "a49bbe6cafe15a01bb2d5a1517d8b72f"
  },
  {
    "url": "1.5.x/advanced/index.html",
    "revision": "230a536adfc5c80622410b7b73dd9c2e"
  },
  {
    "url": "1.5.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "65447a820829e69f5aa42bbdcc490dd7"
  },
  {
    "url": "1.5.x/advanced/override-core-model.html",
    "revision": "91b12a1ef59ecc2b04c3f9cd9e322816"
  },
  {
    "url": "1.5.x/advanced/render-event.html",
    "revision": "b92bb25a2e42be711d935361247a8ef6"
  },
  {
    "url": "1.5.x/advanced/security-practice.html",
    "revision": "2da287db5cac09d8a822b79f19144900"
  },
  {
    "url": "1.5.x/architecture/frontend.html",
    "revision": "a773241e81460d87f515a5ca9153aa23"
  },
  {
    "url": "1.5.x/architecture/index.html",
    "revision": "816bb275400a77093ae295513c4d30a5"
  },
  {
    "url": "1.5.x/architecture/modular-design.html",
    "revision": "834d21bb0f8ea8aaaadeff31e1f449db"
  },
  {
    "url": "1.5.x/architecture/packages.html",
    "revision": "75f3b3041b8c40bb674c509e2ceb33ca"
  },
  {
    "url": "1.5.x/architecture/performance.html",
    "revision": "f8134db01e5f41b375ab80a82fded3f6"
  },
  {
    "url": "1.5.x/architecture/repository-pattern.html",
    "revision": "1a84525ead366419041c180100f95a58"
  },
  {
    "url": "1.5.x/architecture/theme.html",
    "revision": "f25826b44681db09012eb70214d8fff3"
  },
  {
    "url": "1.5.x/deploy/index.html",
    "revision": "55203afc5d411edeada287ef99730e14"
  },
  {
    "url": "1.5.x/introduction/docker.html",
    "revision": "45bc2d723bf63be132e889eb67c0546b"
  },
  {
    "url": "1.5.x/introduction/index.html",
    "revision": "469cc6632c3b3e8228ed3d9d0303ae49"
  },
  {
    "url": "1.5.x/introduction/installation.html",
    "revision": "3926c52ae0ea997931c59b23f10e9751"
  },
  {
    "url": "1.5.x/introduction/requirements.html",
    "revision": "7ac73f110e6eef5f9e269b8c2cb0156d"
  },
  {
    "url": "1.5.x/packages/add-menu-in-admin.html",
    "revision": "41602fd074e7bc34ad67e1bec5441829"
  },
  {
    "url": "1.5.x/packages/assets.html",
    "revision": "226b313c0bc34bbd3deb4efccab96fa4"
  },
  {
    "url": "1.5.x/packages/controllers.html",
    "revision": "ee378424c9813d275b3f08d4a7a6c814"
  },
  {
    "url": "1.5.x/packages/create-acl.html",
    "revision": "bbef57b717275fa9f74dc4611c16cf87"
  },
  {
    "url": "1.5.x/packages/create-custom-configuration.html",
    "revision": "ba3e992a179707c49a8fac3abb9800d4"
  },
  {
    "url": "1.5.x/packages/create-migrations.html",
    "revision": "8aa1ac13afffba373d6c63f1e4c61581"
  },
  {
    "url": "1.5.x/packages/create-models.html",
    "revision": "b7d35329793321a8c1ed056a19877516"
  },
  {
    "url": "1.5.x/packages/create-package.html",
    "revision": "0fa18d274caef2e9ea8657860fe66f8d"
  },
  {
    "url": "1.5.x/packages/customize-hompepage-menu.html",
    "revision": "be1fa28fc72358ccfd7547e670eea2aa"
  },
  {
    "url": "1.5.x/packages/datagrid.html",
    "revision": "1bdf1573e655872b76cd2acca26f6526"
  },
  {
    "url": "1.5.x/packages/index.html",
    "revision": "f1f0c8624e72c7f69a3c80106b453a1b"
  },
  {
    "url": "1.5.x/packages/layouts.html",
    "revision": "963b182b29feeb52e32346fca52925d8"
  },
  {
    "url": "1.5.x/packages/localization.html",
    "revision": "2c88b887498987bf39e6c358b9ab09ca"
  },
  {
    "url": "1.5.x/packages/routes.html",
    "revision": "911443c3d68a0ed548f2a60018646c0a"
  },
  {
    "url": "1.5.x/packages/store-data-through-repositories.html",
    "revision": "ef0108f9370a4bccf67f2a0a604a1257"
  },
  {
    "url": "1.5.x/packages/validation.html",
    "revision": "659e29bc3fe934dc5b397e33c9fb9df0"
  },
  {
    "url": "1.5.x/packages/views.html",
    "revision": "2ac11ffa468aa8f55cee17b509b3241e"
  },
  {
    "url": "1.5.x/prologue/contribution-guide.html",
    "revision": "2ece86cdcb0047aa59fa0f41133db5d8"
  },
  {
    "url": "1.5.x/prologue/index.html",
    "revision": "5f71ebc5f5a0e04b42ebabd2aef5106f"
  },
  {
    "url": "1.5.x/prologue/upgrade-guide.html",
    "revision": "8378c5092d67efcfb618eb9e4234d7b0"
  },
  {
    "url": "1.5.x/themes/create-admin-theme.html",
    "revision": "bf6e91f3eaeddf8336901ba3c14ff0b8"
  },
  {
    "url": "1.5.x/themes/create-theme.html",
    "revision": "051a2d5ad77ede3386e6fe73e502d917"
  },
  {
    "url": "1.5.x/themes/index.html",
    "revision": "f7808911200744cd7957a9aa63ee6f66"
  },
  {
    "url": "1.5.x/themes/integrate-image-search-in-theme.html",
    "revision": "29e3550ff12f68678398c1c444e9cd0e"
  },
  {
    "url": "1.5.x/themes/notification.html",
    "revision": "4319590c1427b471ca13638e2474b09b"
  },
  {
    "url": "1.x/admin-theme/index.html",
    "revision": "d5ca4e6e780ac789bc5564caf71b2e9b"
  },
  {
    "url": "1.x/admin-theme/notification.html",
    "revision": "1982957af1bf76cccb5665cd39c13d20"
  },
  {
    "url": "1.x/advanced/create-payment-method.html",
    "revision": "e0c4f149cab3dfc16ed0169d26578584"
  },
  {
    "url": "1.x/advanced/create-product-type.html",
    "revision": "d547da590ba10b040d93c2c3a920634a"
  },
  {
    "url": "1.x/advanced/create-shipping-method.html",
    "revision": "03e83c73f5bef1f26a1a339f734da26a"
  },
  {
    "url": "1.x/advanced/datagrid.html",
    "revision": "46b6ef54ee74b5f58cd5d2f3eeb984f0"
  },
  {
    "url": "1.x/advanced/events.html",
    "revision": "cffe6e06aab916c81539d3eee5ffddcb"
  },
  {
    "url": "1.x/advanced/helpers.html",
    "revision": "f7bd0377667dc3f7c6537974a55b5cf4"
  },
  {
    "url": "1.x/advanced/index.html",
    "revision": "3ad2388ca03734912b9f8f108d1d596e"
  },
  {
    "url": "1.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "d0e866b762042a86387280cc59c7a715"
  },
  {
    "url": "1.x/advanced/override-core-model.html",
    "revision": "0e3a598bf3b28ab6325a6e8ae2035b47"
  },
  {
    "url": "1.x/advanced/render-event.html",
    "revision": "68040ec423e28ed582cc1efa6c64ae02"
  },
  {
    "url": "1.x/advanced/security-practice.html",
    "revision": "5044da6d243934a9456dae1ed63790bd"
  },
  {
    "url": "1.x/api/addresses.html",
    "revision": "30835f0be8f2d1e8a5cae3a2163ccd25"
  },
  {
    "url": "1.x/api/attribute-families.html",
    "revision": "cb0957ab1a3d228a2dd872a0ff39b6c0"
  },
  {
    "url": "1.x/api/attributes.html",
    "revision": "947976ab78890ae104835faed33e4d6b"
  },
  {
    "url": "1.x/api/cart.html",
    "revision": "e753d4ed01aa34ce6d0cbc36b90a77e1"
  },
  {
    "url": "1.x/api/categories.html",
    "revision": "9ec85849b856d28ef1aea5eafae9c325"
  },
  {
    "url": "1.x/api/customers.html",
    "revision": "83c169d3a94dd54d508dff2e121ea120"
  },
  {
    "url": "1.x/api/explanation.html",
    "revision": "2d314c51bee364d51c0a989b14d2ba60"
  },
  {
    "url": "1.x/api/getting-started-with-the-api.html",
    "revision": "ad8145d2ead037cafc9be690fba3204a"
  },
  {
    "url": "1.x/api/index.html",
    "revision": "7b58b873414c9d34649816ebc7b184e5"
  },
  {
    "url": "1.x/api/invoices.html",
    "revision": "28b73d2da79700a36c3cba3ca8da3aef"
  },
  {
    "url": "1.x/api/locales.html",
    "revision": "0a87ccc50b66cabb91bdaa157f066178"
  },
  {
    "url": "1.x/api/orders.html",
    "revision": "3b4fd4e256b498e7082ee0a4f8b2ebab"
  },
  {
    "url": "1.x/api/products.html",
    "revision": "1f3dc300c7c2f7248b301b4bdbaf7fd9"
  },
  {
    "url": "1.x/api/reviews.html",
    "revision": "91e74df5f28eab0580521785a1d95142"
  },
  {
    "url": "1.x/api/shipments.html",
    "revision": "84c7eb24c8bcb1a9a965b39247a5cdef"
  },
  {
    "url": "1.x/api/transactions.html",
    "revision": "037c94c4d1043b94e83518dec02bc06d"
  },
  {
    "url": "1.x/api/wishlists.html",
    "revision": "ef31b27676b5ad3fbfefa54a2d78db10"
  },
  {
    "url": "1.x/deploy/index.html",
    "revision": "fca0a514cf8e489620ce9636afc4d263"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-families.html",
    "revision": "d0e2c95413a7937a214627840b5891d2"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-groups.html",
    "revision": "5c536c1912c6720088a70a2e0eb1e3d8"
  },
  {
    "url": "1.x/graphql-admin-api/attributes.html",
    "revision": "6b45e5e09b02aeeb303dee9d96542184"
  },
  {
    "url": "1.x/graphql-admin-api/categories.html",
    "revision": "7bc076df5bbcc2960ece20811a70e816"
  },
  {
    "url": "1.x/graphql-admin-api/cms.html",
    "revision": "5450ead33e4690d50e93a3ad6381c7d7"
  },
  {
    "url": "1.x/graphql-admin-api/customers.html",
    "revision": "4987ad8a7024a605ebad3a136fe2abc3"
  },
  {
    "url": "1.x/graphql-admin-api/explanation.html",
    "revision": "98a96166a6ee4cd540ac902197a569cd"
  },
  {
    "url": "1.x/graphql-admin-api/getting-started-with-the-api.html",
    "revision": "530b8203ecf24da761e93c51e75e1ed0"
  },
  {
    "url": "1.x/graphql-admin-api/index.html",
    "revision": "1ca067296c77280578aa3f40407883e6"
  },
  {
    "url": "1.x/graphql-admin-api/installation.html",
    "revision": "e3e9b39a92b47f443441c35bd64bf81b"
  },
  {
    "url": "1.x/graphql-admin-api/products.html",
    "revision": "f24d4703b18845ba9e8070a45fb39616"
  },
  {
    "url": "1.x/graphql-admin-api/promotions.html",
    "revision": "ffe82dd1bf0a3649ed7e9c75be904a18"
  },
  {
    "url": "1.x/graphql-admin-api/sales.html",
    "revision": "88148da416efcb534359d0c07350dfe8"
  },
  {
    "url": "1.x/graphql-admin-api/settings.html",
    "revision": "a389ba793fde3a18d866d7aa667c857b"
  },
  {
    "url": "1.x/graphql-admin-api/velocity.html",
    "revision": "e232c6f7cb2c2ee4d0b3774e37e53c72"
  },
  {
    "url": "1.x/graphql-shop-api/addresses.html",
    "revision": "c8b68247f1c05abe6d22a087b252227e"
  },
  {
    "url": "1.x/graphql-shop-api/cart.html",
    "revision": "628538fd3fa7176fb876eaa96bb68b68"
  },
  {
    "url": "1.x/graphql-shop-api/checkout.html",
    "revision": "d62694baaa2c4bf2b088e9633b7ad272"
  },
  {
    "url": "1.x/graphql-shop-api/compare.html",
    "revision": "225616028b155b67e0cad46583110ceb"
  },
  {
    "url": "1.x/graphql-shop-api/downloadable-links.html",
    "revision": "3e387696effedd6677a721f60e8ee13b"
  },
  {
    "url": "1.x/graphql-shop-api/getting-started-with-the-api.html",
    "revision": "8629a6e4c34a18b28723d91133bd58ff"
  },
  {
    "url": "1.x/graphql-shop-api/homepage.html",
    "revision": "c883cf5e0a9b94d11ddf045a62317ebf"
  },
  {
    "url": "1.x/graphql-shop-api/index.html",
    "revision": "79b54961523f064c7243c2da6239f892"
  },
  {
    "url": "1.x/graphql-shop-api/orders.html",
    "revision": "6fa6f5b84189214a5eda15aa11b139f4"
  },
  {
    "url": "1.x/graphql-shop-api/reviews.html",
    "revision": "331179fac1332bb51d58819f3cb0fe7b"
  },
  {
    "url": "1.x/graphql-shop-api/wishlists.html",
    "revision": "db0de30382485934f24a6447d87c98e8"
  },
  {
    "url": "1.x/introduction/docker.html",
    "revision": "a3d9a73b255f64d9a6b3c00e558aa739"
  },
  {
    "url": "1.x/introduction/index.html",
    "revision": "c09f9d70c7c782a73f9ceb421ef75a04"
  },
  {
    "url": "1.x/introduction/installation.html",
    "revision": "8a79f54d1b7f72ffc2534489d93d5ca6"
  },
  {
    "url": "1.x/introduction/requirements.html",
    "revision": "71c61471a497037bafb28eb7c5e13e3d"
  },
  {
    "url": "1.x/introduction/upgrade-to-latest-bagisto.html",
    "revision": "918f89a2407023135852476e3779e9e7"
  },
  {
    "url": "1.x/packages/add-menu-in-admin.html",
    "revision": "d1e27254aaa368c8ac762dab1cb2a926"
  },
  {
    "url": "1.x/packages/create-acl.html",
    "revision": "450cab87926d37d3e39cd7155a4f7f83"
  },
  {
    "url": "1.x/packages/create-custom-configuration.html",
    "revision": "f90a75a2b7090cdb17aee046a24e3dea"
  },
  {
    "url": "1.x/packages/create-migrations.html",
    "revision": "e87ce978169feacde521785ef14d12d2"
  },
  {
    "url": "1.x/packages/create-models.html",
    "revision": "ad658c68e2d485d33f4847eb03ad01a6"
  },
  {
    "url": "1.x/packages/create-package.html",
    "revision": "539393f5195799fda99b8ebd1c1287cc"
  },
  {
    "url": "1.x/packages/index.html",
    "revision": "823ed4658c8b3ab5de0f4a07f35f6a2a"
  },
  {
    "url": "1.x/packages/store-data-through-repositories.html",
    "revision": "ffe7b5617d105b602941dfae6dd0f3ce"
  },
  {
    "url": "1.x/themes/change-email-template.html",
    "revision": "daa4c6a628ca490da3046592d0b5b2a0"
  },
  {
    "url": "1.x/themes/create-admin-theme.html",
    "revision": "e3d4abc98f5e7826bf484cd142fdd414"
  },
  {
    "url": "1.x/themes/create-theme.html",
    "revision": "46ee196dc93a011576f19f70636c5ad6"
  },
  {
    "url": "1.x/themes/customize-hompepage-menu.html",
    "revision": "5c04279ac97ca43060208b2e50ec2038"
  },
  {
    "url": "1.x/themes/index.html",
    "revision": "299580e55a1946127ece220e8332aeda"
  },
  {
    "url": "1.x/themes/integrate-image-search-in-theme.html",
    "revision": "f1e4f1430e4b1e3a145c99e3ee928f78"
  },
  {
    "url": "1.x/themes/tracer.html",
    "revision": "edcfd9bbb1051884d0428cdce6916283"
  },
  {
    "url": "1.x/translations/change-the-language-of-error-validations-on-your-store.html",
    "revision": "4693658b08c46607b7b60cbb9ef652c9"
  },
  {
    "url": "1.x/translations/index.html",
    "revision": "0be48334b1aade7203b4eff51268f1bd"
  },
  {
    "url": "1.x/translations/translation-based-on-locale.html",
    "revision": "ad82f91060a236ab6a423454951fceea"
  },
  {
    "url": "1.x/user-guides/cart-catalog-rule.html",
    "revision": "73b86a4842369db7abe58acd6f38e0af"
  },
  {
    "url": "1.x/user-guides/cart-rule.html",
    "revision": "33f17cc2505238b0196eb07c27bf3618"
  },
  {
    "url": "1.x/user-guides/index.html",
    "revision": "d70cf6d4a8b571d3cb2b42e8697b8329"
  },
  {
    "url": "1.x/user-guides/social-auth.html",
    "revision": "ffca09c6509eeff6fd2f68f76d9d6877"
  },
  {
    "url": "1.x/user-guides/tax-rates.html",
    "revision": "b7788afa8083d93796de56604d49d89c"
  },
  {
    "url": "2.x/advanced/change-email-template.html",
    "revision": "343fdb57298f3675e078b872754ebec9"
  },
  {
    "url": "2.x/advanced/create-payment-method.html",
    "revision": "31b9ce2d2a132a4e2600e7c0fe2b8693"
  },
  {
    "url": "2.x/advanced/create-product-type.html",
    "revision": "0c4cf4afcc723658aa1ab17d2192754c"
  },
  {
    "url": "2.x/advanced/create-shipping-method.html",
    "revision": "67ac65093234624b36bfbae9592cb22f"
  },
  {
    "url": "2.x/advanced/events.html",
    "revision": "259d77e1d9c9ebcb452eb2655fd55616"
  },
  {
    "url": "2.x/advanced/helpers.html",
    "revision": "025336faa75bcd3471a3ef2af5626154"
  },
  {
    "url": "2.x/advanced/index.html",
    "revision": "a09375bf9dbcf07dd2e671131c3ca43d"
  },
  {
    "url": "2.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "5364750d715cab5ced043c0d76f61227"
  },
  {
    "url": "2.x/advanced/override-core-model.html",
    "revision": "b11d087eff165f542e8e384af30ef418"
  },
  {
    "url": "2.x/advanced/render-event.html",
    "revision": "2cc4ad003f55a6b8b2f3bf53b4eef9dc"
  },
  {
    "url": "2.x/advanced/security-practice.html",
    "revision": "6fe94bae78eaa63d52abbc81d73a36b5"
  },
  {
    "url": "2.x/architecture/frontend.html",
    "revision": "36fb6896fcc0ed2d8db17e19c37e5de8"
  },
  {
    "url": "2.x/architecture/index.html",
    "revision": "5d8d305452fa9fb08b1ee6e477285687"
  },
  {
    "url": "2.x/architecture/modular-design.html",
    "revision": "c7f39abd26f3d402aad81ec3ebd74b0a"
  },
  {
    "url": "2.x/architecture/packages.html",
    "revision": "554a0212b69b07cfc4d4514779d57e1d"
  },
  {
    "url": "2.x/architecture/performance.html",
    "revision": "824da38d59fdaad080daf4533939c101"
  },
  {
    "url": "2.x/architecture/repository-pattern.html",
    "revision": "7c88902cea64672e8b15bba7df351ddc"
  },
  {
    "url": "2.x/architecture/theme.html",
    "revision": "05907a4fcf0e7c6a5ebdbd524fd668c1"
  },
  {
    "url": "2.x/deploy/index.html",
    "revision": "85399ef9e06fa2cd6cdddd55098fa757"
  },
  {
    "url": "2.x/introduction/docker.html",
    "revision": "8c7924bfedcd9a15a01cc14b41c8a690"
  },
  {
    "url": "2.x/introduction/index.html",
    "revision": "964769ca5b47b9cf009fa241c5561a8a"
  },
  {
    "url": "2.x/introduction/installation.html",
    "revision": "fcd100f0b7b698494e658dcd63e62f4a"
  },
  {
    "url": "2.x/introduction/requirements.html",
    "revision": "8bda4811021c982d75dc80fb40a98e5a"
  },
  {
    "url": "2.x/packages/add-menu-in-admin.html",
    "revision": "cf4919b878c77568d0e1325ef511b9cc"
  },
  {
    "url": "2.x/packages/assets.html",
    "revision": "e91258eac82b43a5c57897306eb2a182"
  },
  {
    "url": "2.x/packages/blade-components.html",
    "revision": "de41d3d0e443e583f14e122902385622"
  },
  {
    "url": "2.x/packages/controllers.html",
    "revision": "6b91c8b6448cbf8cf5d1ed87a54618fb"
  },
  {
    "url": "2.x/packages/create-acl.html",
    "revision": "f4b337b5be788fed35108326eecfd158"
  },
  {
    "url": "2.x/packages/create-custom-configuration.html",
    "revision": "3e82dda63cc6e1f938e3859a2c980290"
  },
  {
    "url": "2.x/packages/create-migrations.html",
    "revision": "9c11e87917e23a3642bba34291a400bd"
  },
  {
    "url": "2.x/packages/create-models.html",
    "revision": "ee18156bce3e84ca8d0dac65de6b7bcc"
  },
  {
    "url": "2.x/packages/create-package.html",
    "revision": "8abb0b6349a0b7310d8056b85663d35c"
  },
  {
    "url": "2.x/packages/customize-hompepage-menu.html",
    "revision": "f2a1db619986f11521507f8cb1e4c07e"
  },
  {
    "url": "2.x/packages/datagrid.html",
    "revision": "fc36bf233c68766563b655618b8b5a58"
  },
  {
    "url": "2.x/packages/index.html",
    "revision": "a0ce627a1b54d7f6feb3f4981acccb2b"
  },
  {
    "url": "2.x/packages/layouts.html",
    "revision": "5407c69adbaea1c63da3d11cfec7e00b"
  },
  {
    "url": "2.x/packages/localization.html",
    "revision": "5bc4715fc9af057e75cef29179837cb4"
  },
  {
    "url": "2.x/packages/routes.html",
    "revision": "dd09c0315da8487cd33a85668addcc5b"
  },
  {
    "url": "2.x/packages/store-data-through-repositories.html",
    "revision": "b634a92920e239051ad2272050cc79ec"
  },
  {
    "url": "2.x/packages/validation.html",
    "revision": "0763cec9425fbaf8b2faf4a0fd8e4e5c"
  },
  {
    "url": "2.x/packages/views.html",
    "revision": "26ccb2a466111b03c59493d6126172f5"
  },
  {
    "url": "2.x/prologue/contribution-guide.html",
    "revision": "e6fdcba50c95e0ce1046adf926e874ff"
  },
  {
    "url": "2.x/prologue/index.html",
    "revision": "3f9f4ef01aeeeb64ae9a69b3cdde062d"
  },
  {
    "url": "2.x/prologue/upgrade-guide.html",
    "revision": "15685503463f3b36dddb7c2c09b6c3a7"
  },
  {
    "url": "2.x/themes/create-admin-theme.html",
    "revision": "8ab1d9d168060fa6f0f60dc175c0504d"
  },
  {
    "url": "2.x/themes/create-theme.html",
    "revision": "a085c188540f54d742f8ca3c338e78d1"
  },
  {
    "url": "2.x/themes/index.html",
    "revision": "16d7a9ad369a22530e00bfe72099849a"
  },
  {
    "url": "2.x/themes/integrate-image-search-in-theme.html",
    "revision": "66eabe197f67e61f2f9ccdcee1c0e267"
  },
  {
    "url": "2.x/themes/notification.html",
    "revision": "62a6522eec6be61a1049caa3001418ea"
  },
  {
    "url": "404.html",
    "revision": "dee517f00ff24dbe2dbd412c1391c762"
  },
  {
    "url": "assets/css/0.styles.74cf57b0.css",
    "revision": "3940e9ec40b59a4daa7a4d21e3df65d0"
  },
  {
    "url": "assets/img/add-locale-bagisto.b2e2cfb9.png",
    "revision": "b2e2cfb94cf27c4c873e38113fa70aaf"
  },
  {
    "url": "assets/img/admin_social_auth.1f906bf7.png",
    "revision": "1f906bf7aaadd3d1ffa9d1f2a1ecb564"
  },
  {
    "url": "assets/img/admin-acl-output.33cbb854.png",
    "revision": "33cbb8542307d97dce7e411f4e1ffee2"
  },
  {
    "url": "assets/img/admin-acl-output.b7cd765b.png",
    "revision": "b7cd765baa91a55b5ff4ade2c59b7e02"
  },
  {
    "url": "assets/img/admin-acl-output.b9cf7d8a.png",
    "revision": "b9cf7d8af9f9610def53593fc0d1fb27"
  },
  {
    "url": "assets/img/admin-custom-config-output.ad6536ab.png",
    "revision": "ad6536ab0b05048c23992f08943b6d1d"
  },
  {
    "url": "assets/img/admin-menu-output.1be77665.png",
    "revision": "1be776656f2461337df0f451f917bfb2"
  },
  {
    "url": "assets/img/admin-menu-output.a5949c80.png",
    "revision": "a5949c80bf47f4a37c0f8d330f1f139c"
  },
  {
    "url": "assets/img/admin-menu-output.e3a46672.png",
    "revision": "e3a46672e908470e27c372a14cce3d59"
  },
  {
    "url": "assets/img/arrabic-attribute.4d7a4275.png",
    "revision": "4d7a4275690cfe606cdb2f1babf87cc5"
  },
  {
    "url": "assets/img/bagisto_add_info.78af382e.jpg",
    "revision": "78af382e00c5ed610f08e7dcb25de296"
  },
  {
    "url": "assets/img/bagisto_attribute.a6fc572b.jpg",
    "revision": "a6fc572b5095c9086b4b9594c7627dbb"
  },
  {
    "url": "assets/img/bagisto_cart_add.63562e08.jpg",
    "revision": "63562e08b02018b7b6a8826f9bb124f6"
  },
  {
    "url": "assets/img/bagisto_cart_guest.d853001d.jpg",
    "revision": "d853001da175e958725f6cf956e31e84"
  },
  {
    "url": "assets/img/bagisto_cart_remove_item.3b5df823.jpg",
    "revision": "3b5df82328f5369892e46b182c1fb326"
  },
  {
    "url": "assets/img/bagisto_cart_update.3b860220.jpg",
    "revision": "3b860220a366af90e600fd35c087d67b"
  },
  {
    "url": "assets/img/bagisto_cart.3cc30a8b.jpg",
    "revision": "3cc30a8be1ec377e6a4aa9c4bb1cc4d5"
  },
  {
    "url": "assets/img/bagisto_config_attr.83af48dd.jpg",
    "revision": "83af48ddf4fc985007f39acec9cc37e3"
  },
  {
    "url": "assets/img/bagisto_config.325d4e50.jpg",
    "revision": "325d4e50a5fd49d4ec8a9c447f21a6e6"
  },
  {
    "url": "assets/img/bagisto_move_to_wishlist.092fc8ae.jpg",
    "revision": "092fc8ae6b7ce543f91fcbcb840ebd82"
  },
  {
    "url": "assets/img/bagisto_orders_id.47d67a0d.jpg",
    "revision": "47d67a0d48c7eb4471788608a266ebd0"
  },
  {
    "url": "assets/img/bagisto_orders_no_pag.eb8fd609.jpg",
    "revision": "eb8fd6090b445f1a375c41d22bdb9405"
  },
  {
    "url": "assets/img/bagisto_prod_color.54846a87.jpg",
    "revision": "54846a878f4e58126066ca83a1f698e4"
  },
  {
    "url": "assets/img/bagisto_prod_price_config.1c3285d1.jpg",
    "revision": "1c3285d10a818abb2dca20a777b79258"
  },
  {
    "url": "assets/img/bagisto_prod_price_simple.78ef8f5a.jpg",
    "revision": "78ef8f5ac73bae616e5e0794dfeb7f42"
  },
  {
    "url": "assets/img/bagisto_prod_size.2fdc1d32.jpg",
    "revision": "2fdc1d32ecc5200a7a65d99b44e600fb"
  },
  {
    "url": "assets/img/bagisto_save_address.633cf573.jpg",
    "revision": "633cf57391403cf1df62f8dfe80d6661"
  },
  {
    "url": "assets/img/bagisto_save_order.c2fab81f.jpg",
    "revision": "c2fab81f906b0dda24ab128e2100f0e3"
  },
  {
    "url": "assets/img/bagisto_save_payment.99edb31c.jpg",
    "revision": "99edb31ca6dbf31d3261d528d48f120f"
  },
  {
    "url": "assets/img/bagisto_save_shipping.6c8d23d1.jpg",
    "revision": "6c8d23d1f29b3905c0742e6fe9dc2a03"
  },
  {
    "url": "assets/img/bagisto_ship_order_id.367b77a9.jpg",
    "revision": "367b77a9b47802107f443338b7ff1cfe"
  },
  {
    "url": "assets/img/bagisto_shipments.e6134a4b.jpg",
    "revision": "e6134a4b8b604b1756ab3ef108884406"
  },
  {
    "url": "assets/img/bagisto_wishlist_page.de525699.jpg",
    "revision": "de5256999417cca7f6ab7503a5b109d1"
  },
  {
    "url": "assets/img/blog-admin-output.1118ea56.png",
    "revision": "1118ea56b8def41f82b192a76763d2c3"
  },
  {
    "url": "assets/img/blog-package-output.4aced6a8.png",
    "revision": "4aced6a8f0a5f4af90cb3cf52c8ebf2c"
  },
  {
    "url": "assets/img/blog-package-output.e3a46672.png",
    "revision": "e3a46672e908470e27c372a14cce3d59"
  },
  {
    "url": "assets/img/catageory-in-arabic.4b55c745.png",
    "revision": "4b55c745b858c4aac3044fa348caf6a7"
  },
  {
    "url": "assets/img/channel-setting-in-bagisto.a7a72cb5.png",
    "revision": "a7a72cb5af650f7e582f8deae80e4f99"
  },
  {
    "url": "assets/img/custom-config-output-1.c07d16b0.png",
    "revision": "c07d16b059ed84790741caf02577a696"
  },
  {
    "url": "assets/img/custom-config-output-2.0848dc68.png",
    "revision": "0848dc686b4c4767b613f18d95de60bd"
  },
  {
    "url": "assets/img/custom-config-output.8aeb3cff.png",
    "revision": "8aeb3cffe1edc680a288ca3792782d50"
  },
  {
    "url": "assets/img/default-location-calculation-config.ea4a469a.png",
    "revision": "ea4a469a4371daea67d8d9dc060dc002"
  },
  {
    "url": "assets/img/front-end-in-arabic.f7c759e0.png",
    "revision": "f7c759e055265bf9ebd9df156e22c9ab"
  },
  {
    "url": "assets/img/front-end.9aaeb0de.png",
    "revision": "9aaeb0de8e5707aa4afa1845e2fa1f4d"
  },
  {
    "url": "assets/img/github-OAuth-step1.e74d8be1.png",
    "revision": "e74d8be18d45562391def8eabc3f9f05"
  },
  {
    "url": "assets/img/github-OAuth-step3.1c5347e7.png",
    "revision": "1c5347e798d2d4e9f232e821b30a0d71"
  },
  {
    "url": "assets/img/google-OAuth-step1.cdeb34e7.png",
    "revision": "cdeb34e75d4109dc8c732cb2a41f7149"
  },
  {
    "url": "assets/img/google-OAuth-step10.7cf440b2.png",
    "revision": "7cf440b27afcc28b91d0569d0e0574dd"
  },
  {
    "url": "assets/img/google-OAuth-step2.33d3b5d7.png",
    "revision": "33d3b5d7d306652f9ad8145885649684"
  },
  {
    "url": "assets/img/google-OAuth-step3.7cfab527.png",
    "revision": "7cfab527afc801407b13bb1c0080502c"
  },
  {
    "url": "assets/img/google-OAuth-step4.58f07d86.png",
    "revision": "58f07d861b92fdf12e966ef8ec0a2f7d"
  },
  {
    "url": "assets/img/google-OAuth-step6.feabd47b.png",
    "revision": "feabd47b9a5af05843c2bb60b8226e37"
  },
  {
    "url": "assets/img/google-OAuth-step7.21f7d9f6.png",
    "revision": "21f7d9f6ff6babc41c0e032cf963356c"
  },
  {
    "url": "assets/img/google-OAuth-step8.c2178472.png",
    "revision": "c21784723f5897170c0780d4307dbbb1"
  },
  {
    "url": "assets/img/google-OAuth-step9.83e7862b.png",
    "revision": "83e7862bd3d9aa050b4dbd2bded3fec7"
  },
  {
    "url": "assets/img/hello-world-package-output.2f3c248f.png",
    "revision": "2f3c248fcf0bcdb3a497646485084147"
  },
  {
    "url": "assets/img/helloworld-admin-browser-output.58d525cb.png",
    "revision": "58d525cbaf78c5763ac8f557cdd31e9f"
  },
  {
    "url": "assets/img/helloworld-shop-browser-output.036ed5d9.png",
    "revision": "036ed5d98b58f5887a0cde7d6a874bd5"
  },
  {
    "url": "assets/img/installed-elastic-info.46e47fde.png",
    "revision": "46e47fde533d4982324a07b091943503"
  },
  {
    "url": "assets/img/language-changes.a799195d.png",
    "revision": "a799195df5c2def1f7798b6296eb0659"
  },
  {
    "url": "assets/img/limiting-error-messages.5887bc7c.png",
    "revision": "5887bc7c25f56a6e4e03ead32f873720"
  },
  {
    "url": "assets/img/locale-setup.a0047ee5.png",
    "revision": "a0047ee598bf517ca89e565539e444cc"
  },
  {
    "url": "assets/img/locale-trans.eed57105.png",
    "revision": "eed57105bf11bb1ad460c9e09ec9e207"
  },
  {
    "url": "assets/img/locale.b190a2d4.png",
    "revision": "b190a2d4e2ed61a1a75b829f6af4bdcf"
  },
  {
    "url": "assets/img/mail-sample.6aa3d730.png",
    "revision": "6aa3d7304bd852564b76860b7117bdb7"
  },
  {
    "url": "assets/img/product-in-arabic.e634c43f.png",
    "revision": "e634c43ff0331dcf5ff91211017c6f1f"
  },
  {
    "url": "assets/img/product-index.a45ce729.png",
    "revision": "a45ce7297692b3170774154331aa5911"
  },
  {
    "url": "assets/img/product-index.bc0a70c6.png",
    "revision": "bc0a70c6b1ba1b0cd4cd31f3c7f8dfa5"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/translation.96b21cfa.png",
    "revision": "96b21cfa473af2e88086d0ccdebb40e4"
  },
  {
    "url": "assets/js/10.9a76d433.js",
    "revision": "83be9c2674a21b757738874ea4f64dc4"
  },
  {
    "url": "assets/js/100.0e433e64.js",
    "revision": "221a2bc4c4f93268b21e8b10e6260c09"
  },
  {
    "url": "assets/js/101.0adf040a.js",
    "revision": "a7328bee54476b6df211d45d7fc3e1db"
  },
  {
    "url": "assets/js/102.9fcfdbb2.js",
    "revision": "81468302349f792d280576b3eae34b89"
  },
  {
    "url": "assets/js/103.95bd6521.js",
    "revision": "7e4605e6febda2c727af8d8590ad081e"
  },
  {
    "url": "assets/js/104.c72317b7.js",
    "revision": "bed935081a317520aa375d8a29746033"
  },
  {
    "url": "assets/js/105.bc74b643.js",
    "revision": "db10c99bea9b91375695cf0d023b60d3"
  },
  {
    "url": "assets/js/106.47d5dc61.js",
    "revision": "5d988b8b9367ef70e2e26ba3c116db28"
  },
  {
    "url": "assets/js/107.2881eeee.js",
    "revision": "4984651456d631b62cde84143df1a415"
  },
  {
    "url": "assets/js/108.6aafb3d7.js",
    "revision": "65d6135155c419e5df07cb62ac9c9e37"
  },
  {
    "url": "assets/js/109.7706116c.js",
    "revision": "faed0760682c0e71f573fa93289b4907"
  },
  {
    "url": "assets/js/11.1c022ee7.js",
    "revision": "910feaf00ee12e2094d4b8f679b2558a"
  },
  {
    "url": "assets/js/110.befd8c63.js",
    "revision": "742ba69823dac7c236b424002a8467fb"
  },
  {
    "url": "assets/js/111.7902c6a9.js",
    "revision": "db5ea690f4f7fe77ca13436f9b0f9afe"
  },
  {
    "url": "assets/js/112.a372c066.js",
    "revision": "53c072599b2dd17abccbb344ae4b2d3e"
  },
  {
    "url": "assets/js/113.620cd926.js",
    "revision": "432b8af4abe49580d544ac985f7f1bd2"
  },
  {
    "url": "assets/js/114.e335f75f.js",
    "revision": "33339e64178ef53d88a90e1a38d4a6b0"
  },
  {
    "url": "assets/js/115.6953d655.js",
    "revision": "ee9058e2597724c1556d0b1dc8f6c535"
  },
  {
    "url": "assets/js/116.cc92d03c.js",
    "revision": "614886471226909435d81e61c301974f"
  },
  {
    "url": "assets/js/117.03159b5f.js",
    "revision": "489bafa2e6a477eb38c3ee679c56d034"
  },
  {
    "url": "assets/js/118.78d76382.js",
    "revision": "a6c953418632da56f3620cb10e5866bc"
  },
  {
    "url": "assets/js/119.7b298f0f.js",
    "revision": "4a7dba9f4642e4ad17f8e575965133f1"
  },
  {
    "url": "assets/js/12.dc76d0fd.js",
    "revision": "24c983a8043a8676ac4e5ef0a080ae1c"
  },
  {
    "url": "assets/js/120.e0625086.js",
    "revision": "e0a03ba7c33f853106f00d9f98865374"
  },
  {
    "url": "assets/js/121.7663ba1a.js",
    "revision": "d4f45546573c508935a78d79e2458cbe"
  },
  {
    "url": "assets/js/122.1702c8b2.js",
    "revision": "37d90dcb0c0650c3ca10e9d8017c94c2"
  },
  {
    "url": "assets/js/123.72672400.js",
    "revision": "76a6b5418595c269402127e194126257"
  },
  {
    "url": "assets/js/124.4d63cfce.js",
    "revision": "2b70328dae7b755ce3fdb16a89c37b39"
  },
  {
    "url": "assets/js/125.c2a62e4e.js",
    "revision": "1a6e7e55a465e51381305ed5d581f001"
  },
  {
    "url": "assets/js/126.37c0ddd6.js",
    "revision": "63dcf29b603b6a93d3f44431eb71eade"
  },
  {
    "url": "assets/js/127.86242fcb.js",
    "revision": "63c919981db2dda5166e786c85e1b8c3"
  },
  {
    "url": "assets/js/128.faac4047.js",
    "revision": "011f7fca0c3830552f0e2118689d23a4"
  },
  {
    "url": "assets/js/129.bbb82938.js",
    "revision": "f480711de9790f6e5943a5d254f50802"
  },
  {
    "url": "assets/js/13.31a0560d.js",
    "revision": "ea6e92214fa52736f15523075918fc6d"
  },
  {
    "url": "assets/js/130.96612ca5.js",
    "revision": "f1be4dcbf59c389091075b2c9395f2b3"
  },
  {
    "url": "assets/js/131.6fe19cc8.js",
    "revision": "fa48d4507b39e7fc319c6dac7f19b325"
  },
  {
    "url": "assets/js/132.0f9169ce.js",
    "revision": "d17e9a8b8286bd1591f95198b37f328c"
  },
  {
    "url": "assets/js/133.99da6a15.js",
    "revision": "44d23c34de381b3f25f3722251c22aff"
  },
  {
    "url": "assets/js/134.88c8e148.js",
    "revision": "7e7e26b9d70745c169c6a19f3f886ec0"
  },
  {
    "url": "assets/js/135.822ca34a.js",
    "revision": "ea32c758419f3fc4073424cbd605e4eb"
  },
  {
    "url": "assets/js/136.03311d00.js",
    "revision": "694dea87b2b12149dffb537de2a83629"
  },
  {
    "url": "assets/js/137.ee8b6f2d.js",
    "revision": "aeed52f84652bda96009fabc9a8e5b5a"
  },
  {
    "url": "assets/js/138.0bd567c1.js",
    "revision": "83273b6d97b1f5627e9f249116cc4cf3"
  },
  {
    "url": "assets/js/139.0eba23f1.js",
    "revision": "afa90d6a5c2c02131d377083795c8279"
  },
  {
    "url": "assets/js/14.9be467f9.js",
    "revision": "fc6793eb2292d2f036ad333bbec469a4"
  },
  {
    "url": "assets/js/140.41761276.js",
    "revision": "9ecb4512fdcd71fe0f262fe03ffefb2b"
  },
  {
    "url": "assets/js/141.24e22b80.js",
    "revision": "12ea66b6d25dd07bb282dd63ce5e86c6"
  },
  {
    "url": "assets/js/142.e84d99ab.js",
    "revision": "7481773b8a636b2947a4af05c506095f"
  },
  {
    "url": "assets/js/143.5843ae1b.js",
    "revision": "619641dc05a927ffbd9e8650f7917423"
  },
  {
    "url": "assets/js/144.a9f94d16.js",
    "revision": "65fcf4216c4fca6e897936877f852769"
  },
  {
    "url": "assets/js/145.4a03e842.js",
    "revision": "bef1021789960a2563f10707a692452f"
  },
  {
    "url": "assets/js/146.e51aa531.js",
    "revision": "e2d903d0e649cc3a9cdec6a8042998fc"
  },
  {
    "url": "assets/js/147.9b906f2d.js",
    "revision": "90d7dd96b44b7042494e4bb97469bb26"
  },
  {
    "url": "assets/js/148.4726551a.js",
    "revision": "e6447e1a27751d0f96e9d8fba1479567"
  },
  {
    "url": "assets/js/149.19582a3f.js",
    "revision": "a9385d908791e2b2178d94b4ea28ebe9"
  },
  {
    "url": "assets/js/15.cbfee7a2.js",
    "revision": "6c225e07870937133c325ad1acfed0c6"
  },
  {
    "url": "assets/js/150.399614de.js",
    "revision": "a6d1dcbafb31af3e0c1cb22ce0dcd881"
  },
  {
    "url": "assets/js/151.a29802f8.js",
    "revision": "13471ec96a2bfdaf74b64441ce471d07"
  },
  {
    "url": "assets/js/152.c5794d1e.js",
    "revision": "6cb8e10b4d04f826c76de969e4a8052e"
  },
  {
    "url": "assets/js/153.c85aaa61.js",
    "revision": "d43acb25582170a5ca2097ae4ae1cabd"
  },
  {
    "url": "assets/js/154.d5afc9ea.js",
    "revision": "aa158b39d4b12b94613adbb6b9d74284"
  },
  {
    "url": "assets/js/155.360582eb.js",
    "revision": "820a992f49c37ab0c0232c20f61fac4e"
  },
  {
    "url": "assets/js/156.09fe6839.js",
    "revision": "c423a4b6aa8e82531a7429956cbc0786"
  },
  {
    "url": "assets/js/157.1ef27c2f.js",
    "revision": "c4785293b1efecbbc6b568d7f2235fde"
  },
  {
    "url": "assets/js/158.47c6254b.js",
    "revision": "2eaadafafdc68a32893040f726a35237"
  },
  {
    "url": "assets/js/159.d3167d79.js",
    "revision": "5fba2024b6a2df2e0bc431c134bbef68"
  },
  {
    "url": "assets/js/16.f5bf3695.js",
    "revision": "4e27335ce76784629f64a9c99f477300"
  },
  {
    "url": "assets/js/160.71b75a9d.js",
    "revision": "c8708e2cacafe19c9ace70a131ec34a9"
  },
  {
    "url": "assets/js/161.efcf159c.js",
    "revision": "7eab09929afdaa7285703334b0d6a125"
  },
  {
    "url": "assets/js/162.0c9fb613.js",
    "revision": "2b8d180c9bbe64cf194bb0cd188b8143"
  },
  {
    "url": "assets/js/163.4f897157.js",
    "revision": "3ae96573a1d1f6c188ad1699138bb064"
  },
  {
    "url": "assets/js/164.1948822c.js",
    "revision": "81a0b853131a0b73df92ce9ccd6468af"
  },
  {
    "url": "assets/js/165.34090240.js",
    "revision": "f4035eff1122dc6eed3e24770f9c3acd"
  },
  {
    "url": "assets/js/166.9bc79141.js",
    "revision": "513af3ec75521aa06d30476acd38b2d0"
  },
  {
    "url": "assets/js/167.8c62d886.js",
    "revision": "0c99a5c41dd688f170af7b9c04a0eda7"
  },
  {
    "url": "assets/js/168.a08101ea.js",
    "revision": "2bd5e30c6cb6a7cb165896b74dc21449"
  },
  {
    "url": "assets/js/169.650b0c10.js",
    "revision": "ff906c377076d58aa5317304e813f284"
  },
  {
    "url": "assets/js/17.5774822e.js",
    "revision": "60a6b49e978d46b8a3373a74ae4448db"
  },
  {
    "url": "assets/js/170.2457ff59.js",
    "revision": "abb42182f19778315ecf93a07a7db45b"
  },
  {
    "url": "assets/js/171.adc746e4.js",
    "revision": "4165f7b8866fcf1246e47ae29bf4e191"
  },
  {
    "url": "assets/js/172.f0c5b274.js",
    "revision": "64a7421910759bfc855e01d2d017568e"
  },
  {
    "url": "assets/js/173.b637ccc9.js",
    "revision": "be43890372ec4a41602a40980afc1a6b"
  },
  {
    "url": "assets/js/174.6d1648cd.js",
    "revision": "cdbcb002d095e6aa1fbacc2830e3558a"
  },
  {
    "url": "assets/js/175.350a0141.js",
    "revision": "f022ddc4cd7baf7bff9e3d00f4bcb00e"
  },
  {
    "url": "assets/js/176.7070f8cc.js",
    "revision": "76aacfe49448a6a02a2cc12699319dbf"
  },
  {
    "url": "assets/js/177.91e1c738.js",
    "revision": "ca62a57ca05127c03c8c28dca3ab864f"
  },
  {
    "url": "assets/js/178.724ffd2b.js",
    "revision": "b2c11518e19c20fbd2e7d6668ca30ee6"
  },
  {
    "url": "assets/js/179.01922563.js",
    "revision": "8625a4d7ac7b775fa86f59845524745a"
  },
  {
    "url": "assets/js/18.b61ab550.js",
    "revision": "3097bfcc3ff5f0e8b7add001ae65ef4a"
  },
  {
    "url": "assets/js/180.a6fc3fd5.js",
    "revision": "d223e82fad2e15819b6c8c8597f96098"
  },
  {
    "url": "assets/js/181.6ba43c32.js",
    "revision": "beaec6a59219e232beb932f5ab9930c0"
  },
  {
    "url": "assets/js/182.8e843d4e.js",
    "revision": "ce38356d012f8675a403486df267560a"
  },
  {
    "url": "assets/js/183.a3878a09.js",
    "revision": "9155c1f3154de7c6861648c1242ce114"
  },
  {
    "url": "assets/js/184.a130aca5.js",
    "revision": "fca473e17ba4048f720239edfb073bd2"
  },
  {
    "url": "assets/js/185.fcbd302c.js",
    "revision": "53938482b70a976f254b899f99826987"
  },
  {
    "url": "assets/js/186.84a7d9f5.js",
    "revision": "efa84c1f5981abe5f5e6739c671dddc9"
  },
  {
    "url": "assets/js/187.596d10ca.js",
    "revision": "3cf723ef8355a57703c38018ddfb9289"
  },
  {
    "url": "assets/js/188.26ada386.js",
    "revision": "6c40f70524fa18e95d83045350618381"
  },
  {
    "url": "assets/js/19.df2867fc.js",
    "revision": "e5634229324ae4f21b1fb72c8a098d8f"
  },
  {
    "url": "assets/js/2.fedcb7f2.js",
    "revision": "8cfc5729fdfc3aeb28d25156f1286f49"
  },
  {
    "url": "assets/js/20.f011ed43.js",
    "revision": "4a3dabf24f0917aacc2157751d439d0c"
  },
  {
    "url": "assets/js/21.85c1b68a.js",
    "revision": "ed1b514ae3b7cd7a691013230975f874"
  },
  {
    "url": "assets/js/22.fb1e565a.js",
    "revision": "a5482c41ed83f56c642fa506753329e6"
  },
  {
    "url": "assets/js/23.c3503fc9.js",
    "revision": "8eb739d46253e6cc0265da3fde21fc28"
  },
  {
    "url": "assets/js/24.f647471f.js",
    "revision": "a520aecb4b40406dbf187251df771772"
  },
  {
    "url": "assets/js/25.4293cda6.js",
    "revision": "8e765c6ab2bf223f31f26e66698147f0"
  },
  {
    "url": "assets/js/26.87417be2.js",
    "revision": "2ee574d4caa4c1d26e49d3eee68a1ae3"
  },
  {
    "url": "assets/js/27.b87e2e27.js",
    "revision": "f9ddb8e524f683ecce65e13f28e3416e"
  },
  {
    "url": "assets/js/28.17f79b11.js",
    "revision": "32febaf03ddea403c9fc60dbe5cbe5ba"
  },
  {
    "url": "assets/js/29.7ee78a56.js",
    "revision": "21b810e4c680516b9c0ed836a5099996"
  },
  {
    "url": "assets/js/3.975a3cc6.js",
    "revision": "95f308fde31f8c15b10708d217822514"
  },
  {
    "url": "assets/js/30.7d951b75.js",
    "revision": "27b6d395e92912df3269c8d7c70daa0e"
  },
  {
    "url": "assets/js/31.2886209d.js",
    "revision": "dc35725788bdd5364eafe81269086a7d"
  },
  {
    "url": "assets/js/32.04a76eea.js",
    "revision": "189e8bbdb4d9d0af98838fd361f9fd7f"
  },
  {
    "url": "assets/js/33.fc547de5.js",
    "revision": "a0ed34fb4cb6acbca774c587a3128b78"
  },
  {
    "url": "assets/js/34.fd76b1c9.js",
    "revision": "66c8127fc284b94727cc853b111df236"
  },
  {
    "url": "assets/js/35.cb015059.js",
    "revision": "0f5423231aba0830b4ef87ff476baacb"
  },
  {
    "url": "assets/js/36.da857de3.js",
    "revision": "60fc33fabcecf2c0760cda845e8d348e"
  },
  {
    "url": "assets/js/37.48ee16c3.js",
    "revision": "b7d3e48abda68e7ba74781956ee1497b"
  },
  {
    "url": "assets/js/38.9e54fcf2.js",
    "revision": "0b0267782964ab5bedce65250d2bf5a5"
  },
  {
    "url": "assets/js/39.58b561a4.js",
    "revision": "3d1bc1f0d2b38dea569dd75a6deb6587"
  },
  {
    "url": "assets/js/4.cc4cc0b5.js",
    "revision": "1bf9b8f8be4aeff78eddb2a01c817211"
  },
  {
    "url": "assets/js/40.4b7eb587.js",
    "revision": "42a693b468c987bb6061c5d71d6f85b9"
  },
  {
    "url": "assets/js/41.daf4d33b.js",
    "revision": "0cadcaa334b2e7cbe69f4f1b816826cd"
  },
  {
    "url": "assets/js/42.4e56fc68.js",
    "revision": "c3a85fad372c5e6e81f09b8110c17dcd"
  },
  {
    "url": "assets/js/43.2f1c937d.js",
    "revision": "abae80eb278517130a3ade429ca493d3"
  },
  {
    "url": "assets/js/44.c68563c8.js",
    "revision": "5c2b87b799442e793c439a24cc880995"
  },
  {
    "url": "assets/js/45.f1807bff.js",
    "revision": "c029eaf99e8ce74c94cde30a47a0b129"
  },
  {
    "url": "assets/js/46.4125e054.js",
    "revision": "80e22d5f1dd59fad2787057ce1e2210a"
  },
  {
    "url": "assets/js/47.3226eedf.js",
    "revision": "11df10f1946a71fca38f68634852e0ea"
  },
  {
    "url": "assets/js/48.f1ae40c8.js",
    "revision": "a83c06f8a986fb6b438055b8fe518b8d"
  },
  {
    "url": "assets/js/49.91235418.js",
    "revision": "122394d17413c37f9fefb5d207b7c6b3"
  },
  {
    "url": "assets/js/5.853b8cb6.js",
    "revision": "7d67b7331b51561bac4d88623ced456d"
  },
  {
    "url": "assets/js/50.0a203e95.js",
    "revision": "2ca17ff84befe01bc7118a1e9efd6c51"
  },
  {
    "url": "assets/js/51.dccc502e.js",
    "revision": "9ed228dbab88b2eeb10d4f0eba358527"
  },
  {
    "url": "assets/js/52.0a1e0fe7.js",
    "revision": "7f37d23511d3d3babdc062781e969310"
  },
  {
    "url": "assets/js/53.c9ab87b7.js",
    "revision": "26706b40137b94e8feb80d6558d23176"
  },
  {
    "url": "assets/js/54.e4490439.js",
    "revision": "a97c55b737bf6f21a5d9f6ad46a7c379"
  },
  {
    "url": "assets/js/55.2a0f92ca.js",
    "revision": "11f2bf22979d4238ab1e0bd47de901a5"
  },
  {
    "url": "assets/js/56.fcbf14b6.js",
    "revision": "a67531e626fd6e050058e15185c03e0b"
  },
  {
    "url": "assets/js/57.04a15b16.js",
    "revision": "209b509e589779852f1e040b8e4a4459"
  },
  {
    "url": "assets/js/58.2f7bc410.js",
    "revision": "40a89a82b8ae52de59ba731c55a8f2b9"
  },
  {
    "url": "assets/js/59.41203763.js",
    "revision": "09258cfffd0b4c632597add6c696666b"
  },
  {
    "url": "assets/js/6.1975e1c7.js",
    "revision": "f59ff2bb110d1d5ee6c75043502f339c"
  },
  {
    "url": "assets/js/60.02e51a3b.js",
    "revision": "cbbbfc964c6e652fd3d3efb9e0857aae"
  },
  {
    "url": "assets/js/61.c5b5f355.js",
    "revision": "4596a8f9b80b4632586863b889c2d0b1"
  },
  {
    "url": "assets/js/62.f47193e6.js",
    "revision": "939b1e3252304b1fd75b469993241fe1"
  },
  {
    "url": "assets/js/63.af570ecf.js",
    "revision": "1ee0710d0f794cc8bbd67f466723a1fa"
  },
  {
    "url": "assets/js/64.812ce44a.js",
    "revision": "bf711b4abba52c516369dc2a708fc13d"
  },
  {
    "url": "assets/js/65.9d905810.js",
    "revision": "f5039777ed57a976f40e09cb6f00f856"
  },
  {
    "url": "assets/js/66.0e9319d4.js",
    "revision": "a114098818b8a86a06baca00343a6be7"
  },
  {
    "url": "assets/js/67.6309a3ff.js",
    "revision": "34f11dc9865eec731d4da402695c0294"
  },
  {
    "url": "assets/js/68.dbd5a167.js",
    "revision": "2f82c54021c367c917974937ea908d36"
  },
  {
    "url": "assets/js/69.28cff7b2.js",
    "revision": "b6b5bbbfe7275966d18f4a93420b46d3"
  },
  {
    "url": "assets/js/7.612d6f62.js",
    "revision": "b7b084eca7a56a09cd4f6257be07a709"
  },
  {
    "url": "assets/js/70.7cac1002.js",
    "revision": "600e9227ec872a996a853a4a0d6773c0"
  },
  {
    "url": "assets/js/71.fc0a25f0.js",
    "revision": "ddafcf74514d7f2bc7a5931d39236aed"
  },
  {
    "url": "assets/js/72.e3e56d8a.js",
    "revision": "43bee5350b2a9531bf6572d99e23a279"
  },
  {
    "url": "assets/js/73.6dac5b5f.js",
    "revision": "f236cba11a4991ec8451dc55aed4c408"
  },
  {
    "url": "assets/js/74.62879d15.js",
    "revision": "343f5349fc4f903be2bcd43632ba9afb"
  },
  {
    "url": "assets/js/75.9396f685.js",
    "revision": "7872f0da94de9bd84ce4134273ca81d2"
  },
  {
    "url": "assets/js/76.1a08f8b2.js",
    "revision": "ada7904d0b95d02360847873d735b07a"
  },
  {
    "url": "assets/js/77.29bab788.js",
    "revision": "16f00d7f0ed35274b12615f9af234676"
  },
  {
    "url": "assets/js/78.eee90cd0.js",
    "revision": "f60ad1175d04b999f8a55f9c7a5c9e2a"
  },
  {
    "url": "assets/js/79.feba0fdc.js",
    "revision": "09ce11ed114492335e74cb15af4a815d"
  },
  {
    "url": "assets/js/8.434b2a7a.js",
    "revision": "9660ab3403e61840204ebe69ea59a276"
  },
  {
    "url": "assets/js/80.28fda9f9.js",
    "revision": "579741f6b1415c36e29f9c0cacd3c141"
  },
  {
    "url": "assets/js/81.7bd1f902.js",
    "revision": "e92599895072850174496d1cd3ec6d34"
  },
  {
    "url": "assets/js/82.8dcf6ba8.js",
    "revision": "a2e49544ed4466c3a6ce0e76b08d29c9"
  },
  {
    "url": "assets/js/83.895b86e8.js",
    "revision": "66dcc7c98515d94e1f60f0fb3d023d79"
  },
  {
    "url": "assets/js/84.4c3847a7.js",
    "revision": "71d196a6c793358fadf5e20293931a0d"
  },
  {
    "url": "assets/js/85.dfd99d85.js",
    "revision": "b0549c0ba2561fe44ea24bc3cec76cd5"
  },
  {
    "url": "assets/js/86.9a349443.js",
    "revision": "e609478cd03c9864f77ee3e3a749f586"
  },
  {
    "url": "assets/js/87.53359d44.js",
    "revision": "8b192b4cdae7c5533daddb50c5077a37"
  },
  {
    "url": "assets/js/88.728991dd.js",
    "revision": "2c86e57c2826c3d023ce7fbf7e43f75a"
  },
  {
    "url": "assets/js/89.cc169b69.js",
    "revision": "b9988f97e9b286e037a7888d37aa62d5"
  },
  {
    "url": "assets/js/9.df19c560.js",
    "revision": "ba8d1f14e2da71e11efd7479fb865a1c"
  },
  {
    "url": "assets/js/90.f6efdaaa.js",
    "revision": "9d1be4a70e6b593b544922893ca0857c"
  },
  {
    "url": "assets/js/91.a2895f7a.js",
    "revision": "075c23438a89a8e557f24aa813c66825"
  },
  {
    "url": "assets/js/92.20b1d082.js",
    "revision": "5c99d3208a5220600f125252e9a86eff"
  },
  {
    "url": "assets/js/93.3741b554.js",
    "revision": "3e0525c94c273ce21ca40998d70aa34c"
  },
  {
    "url": "assets/js/94.b38a4933.js",
    "revision": "6186c433cbb927c805fbc80a830055db"
  },
  {
    "url": "assets/js/95.4b8e4f81.js",
    "revision": "3674c755ad6334c7f5b8ff659fa8fd42"
  },
  {
    "url": "assets/js/96.ab3ad32e.js",
    "revision": "35f687bb7412407951d54493fd9c182e"
  },
  {
    "url": "assets/js/97.2f7fa896.js",
    "revision": "4310b136b87e61b4882542ec45e6a9df"
  },
  {
    "url": "assets/js/98.958af27a.js",
    "revision": "9878a73f7ff01eb03188e0a51b0ed3de"
  },
  {
    "url": "assets/js/99.c4f086d5.js",
    "revision": "ffa54d9e11827f7f43584bf4b0c0b7bd"
  },
  {
    "url": "assets/js/app.47db7b4b.js",
    "revision": "dfaa1fbde668e8127bebf63310b6a07f"
  },
  {
    "url": "index.html",
    "revision": "5ef6eca0fb8b5883441169a600dd5f65"
  },
  {
    "url": "logo.png",
    "revision": "7623b31ea8912e775aa903f3da491179"
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
