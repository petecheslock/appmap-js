# [@appland/appmap-v3.20.0](https://github.com/applandinc/appmap-js/compare/@appland/appmap-v3.19.0...@appland/appmap-v3.20.0) (2022-04-05)


### Features

* Add OpenAPI response schema by mime type ([fb96895](https://github.com/applandinc/appmap-js/commit/fb96895e071aaa010a43aaa53da7e5e480a590d8))
* Best-effort inference of schema from multiple examples ([d76f3c4](https://github.com/applandinc/appmap-js/commit/d76f3c4c5e665a7d261ed21d77093bb56762cfe7))
* Don't emit openapi item when type is nil/unknown ([6e0831a](https://github.com/applandinc/appmap-js/commit/6e0831a682d1ae50152c95d6b6e5825a7c9f5009))
* Emit 'object' for unrecognized type ([651b5ae](https://github.com/applandinc/appmap-js/commit/651b5ae0921ba5cfa79ba46618a79390f43a8f56))

# [@appland/appmap-v3.19.0](https://github.com/applandinc/appmap-js/compare/@appland/appmap-v3.18.3...@appland/appmap-v3.19.0) (2022-03-10)


### Features

* check identifyGradleFile ends gradle.kts ([71c09f2](https://github.com/applandinc/appmap-js/commit/71c09f2af6d0a9476f3541c9247e332d62463875))
* Support gradle projects with build file written in kotlin script (build.gradle.kts) ([53c5e02](https://github.com/applandinc/appmap-js/commit/53c5e022ec9d97487b0245dcf3aed2711223b6c1))

# [@appland/appmap-v3.18.3](https://github.com/applandinc/appmap-js/compare/@appland/appmap-v3.18.2...@appland/appmap-v3.18.3) (2022-02-14)


### Bug Fixes

* Ensure availability of Event.requestContentType ([73f44ed](https://github.com/applandinc/appmap-js/commit/73f44ede6fca001b757bd67ade8afc6459262822))
* typeof null is object - handle this ([8740248](https://github.com/applandinc/appmap-js/commit/8740248b62c129f2203f29a8be8dfe82051fdd60))

# [@appland/appmap-v3.18.2](https://github.com/applandinc/appmap-js/compare/@appland/appmap-v3.18.1...@appland/appmap-v3.18.2) (2022-02-11)


### Bug Fixes

* Expect Content-Type header instead of mime_type field ([0886d8c](https://github.com/applandinc/appmap-js/commit/0886d8cf667e1b5b5325d26fd882a7586db29c25))
* Recognize Ruby String type ([f045bc5](https://github.com/applandinc/appmap-js/commit/f045bc570f7d3bd857068f72930d7ba3394a467e))

# [@appland/appmap-v3.18.1](https://github.com/applandinc/appmap-js/compare/@appland/appmap-v3.18.0...@appland/appmap-v3.18.1) (2022-02-04)


### Bug Fixes

* Set the metadata name property before writing out AppMap data ([b784cd6](https://github.com/applandinc/appmap-js/commit/b784cd6a835f940d7e97f3f62e76aff001c54c55))

# [@appland/appmap-v3.18.0](https://github.com/applandinc/appmap-js/compare/@appland/appmap-v3.17.2...@appland/appmap-v3.18.0) (2022-02-03)


### Features

* Refactor SQL utilities into @appland/models ([ef8a9be](https://github.com/applandinc/appmap-js/commit/ef8a9bebb08f08959272af24f8a8069514107681))

# [@appland/appmap-v3.17.2](https://github.com/applandinc/appmap-js/compare/@appland/appmap-v3.17.1...@appland/appmap-v3.17.2) (2022-02-01)


### Bug Fixes

* Fix JS post-install message ([3821584](https://github.com/applandinc/appmap-js/commit/3821584c045cbb1f70c148a48d3df1cb10d7f2a7))
* Remove post-install message ([716c5a9](https://github.com/applandinc/appmap-js/commit/716c5a96a1d587496921e756995e7cd8831ff616))

# [@appland/appmap-v3.17.1](https://github.com/applandinc/appmap-js/compare/@appland/appmap-v3.17.0...@appland/appmap-v3.17.1) (2022-01-27)


### Bug Fixes

* Handle spaces in CommandStruct.args ([30c65cc](https://github.com/applandinc/appmap-js/commit/30c65cc710f8d363c94f24ad697617452d4c5192))

# [@appland/appmap-v3.17.0](https://github.com/applandinc/appmap-js/compare/@appland/appmap-v3.16.1...@appland/appmap-v3.17.0) (2022-01-27)


### Bug Fixes

* Don't prompt the user for confirmation if the process was obviously not found ([c1e7aea](https://github.com/applandinc/appmap-js/commit/c1e7aea7977b2e74b1b8f137b78435b980d0e997))
* Handle the case when no data is obtained from recording ([16b0a98](https://github.com/applandinc/appmap-js/commit/16b0a98b9676f7491144948c370d2f4c6eba60ff))


### Features

* Shortcut the record 'open' step when running in the VSCode terminal ([85d7a75](https://github.com/applandinc/appmap-js/commit/85d7a754a2da457aa39719ebdd0f75416f04e3dd))

# [@appland/appmap-v3.16.1](https://github.com/applandinc/appmap-js/compare/@appland/appmap-v3.16.0...@appland/appmap-v3.16.1) (2022-01-25)


### Bug Fixes

* Add supports-hyperlinks dependency ([308c4bd](https://github.com/applandinc/appmap-js/commit/308c4bd250f36bf88df3e249fe9d36a9266980b2))

# [@appland/appmap-v3.16.0](https://github.com/applandinc/appmap-js/compare/@appland/appmap-v3.15.1...@appland/appmap-v3.16.0) (2022-01-25)


### Features

* Add remote recording doc links for Java and JavaScript ([f40affe](https://github.com/applandinc/appmap-js/commit/f40affeb705d30b7bc682d388e37abc0487c7adf))

# [@appland/appmap-v3.15.1](https://github.com/applandinc/appmap-js/compare/@appland/appmap-v3.15.0...@appland/appmap-v3.15.1) (2022-01-18)


### Bug Fixes

* Add missing dependency on JSONStream ([748876d](https://github.com/applandinc/appmap-js/commit/748876dcb3fc5ff0fe2be831343ff93fc92054df))

# [@appland/appmap-v3.15.0](https://github.com/applandinc/appmap-js/compare/@appland/appmap-v3.14.8...@appland/appmap-v3.15.0) (2022-01-18)


### Features

* Port prune subcommand ([fd1d724](https://github.com/applandinc/appmap-js/commit/fd1d7240c2ce8d1fb3227713ab78a1a9761e14a5))

# [@appland/appmap-v3.14.8](https://github.com/applandinc/appmap-js/compare/@appland/appmap-v3.14.7...@appland/appmap-v3.14.8) (2022-01-07)


### Bug Fixes

* Fix the path to static assets for the open command ([eed3e3e](https://github.com/applandinc/appmap-js/commit/eed3e3eaebff1484f4310bcf3c6f48d21098842e))

# [@appland/appmap-v3.14.7](https://github.com/applandinc/appmap-js/compare/@appland/appmap-v3.14.6...@appland/appmap-v3.14.7) (2022-01-05)


### Bug Fixes

* Make dependency package versions compatible with scanner ([347a4f4](https://github.com/applandinc/appmap-js/commit/347a4f4844cfa89879fbc2154066c4e6eb920786))

# [@appland/appmap-v3.14.6](https://github.com/applandinc/appmap-js/compare/@appland/appmap-v3.14.5...@appland/appmap-v3.14.6) (2021-12-09)


### Bug Fixes

* Upgrade @appland/models in packages/cli ([115d60a](https://github.com/applandinc/appmap-js/commit/115d60a36ee21a493a31d04e8ac015757cf931a7))

# [@appland/appmap-v3.14.5](https://github.com/applandinc/appmap-js/compare/@appland/appmap-v3.14.4...@appland/appmap-v3.14.5) (2021-12-07)


### Bug Fixes

* Use a shell when running a command ([12986a5](https://github.com/applandinc/appmap-js/commit/12986a5bbaa97a8e9b671ab1308636813f06ef2d))

# [@appland/appmap-v3.14.4](https://github.com/applandinc/appmap-js/compare/@appland/appmap-v3.14.3...@appland/appmap-v3.14.4) (2021-12-06)


### Bug Fixes

* Nudge user to install in current project ([28f358e](https://github.com/applandinc/appmap-js/commit/28f358e0479a5a919eb4d2b45be79a51f8dd9799))

# [@appland/appmap-v3.14.3](https://github.com/applandinc/appmap-js/compare/@appland/appmap-v3.14.2...@appland/appmap-v3.14.3) (2021-12-03)


### Bug Fixes

* Correct post-install instructions ([ed8febd](https://github.com/applandinc/appmap-js/commit/ed8febd6bc0cd9c2ba1380ed5a9ccced7e907e2e))
* Use an absolute path when installing ([c39a784](https://github.com/applandinc/appmap-js/commit/c39a784a646662355f1aecbc4518e2b219037d10))

# [@appland/appmap-v3.14.2](https://github.com/applandinc/appmap-js/compare/@appland/appmap-v3.14.1...@appland/appmap-v3.14.2) (2021-12-01)


### Bug Fixes

* Allow the user to override agent package ([963e15b](https://github.com/applandinc/appmap-js/commit/963e15b5684371102247efb97456f9497c96653f))
* EncodedFile now handles empty files ([bacf4ac](https://github.com/applandinc/appmap-js/commit/bacf4aca20f0c1364a4b4c6f7657655b6a2db794))

# [@appland/appmap-v3.14.1](https://github.com/applandinc/appmap-js/compare/@appland/appmap-v3.14.0...@appland/appmap-v3.14.1) (2021-11-30)


### Bug Fixes

* Use correct path to JB maven plugin ([7bc5880](https://github.com/applandinc/appmap-js/commit/7bc588011dee9feb759c16d731b90e843fd74435))
* Wait for the user to pick an installer ([f16e4a3](https://github.com/applandinc/appmap-js/commit/f16e4a3a77ec72e3eb9efefdb18699c5e50f9f0f))

# [@appland/appmap-v3.14.0](https://github.com/applandinc/appmap-js/compare/@appland/appmap-v3.13.4...@appland/appmap-v3.14.0) (2021-11-29)


### Features

* Add JavaScript project installers ([eb8f934](https://github.com/applandinc/appmap-js/commit/eb8f93476b85fab1a50f767c5774d5d2fc1910a7))

# [@appland/appmap-v3.13.4](https://github.com/applandinc/appmap-js/compare/@appland/appmap-v3.13.3...@appland/appmap-v3.13.4) (2021-11-19)


### Bug Fixes

* Exit cleanly when the user aborts ([e570101](https://github.com/applandinc/appmap-js/commit/e5701017d01aa3597c2c66556a2c1a08ca3678a6))
* Flush telemetry events before exiting ([60df8e8](https://github.com/applandinc/appmap-js/commit/60df8e83eec2b3fa3d53d6339613cf4a595c03ae))
* Send success event ([4d05374](https://github.com/applandinc/appmap-js/commit/4d053742e6cb05f964485764a29c548ab6002582))

# [@appland/appmap-v3.13.3](https://github.com/applandinc/appmap-js/compare/@appland/appmap-v3.13.2...@appland/appmap-v3.13.3) (2021-11-11)


### Bug Fixes

* Show the correct version with --version ([e695e2c](https://github.com/applandinc/appmap-js/commit/e695e2c69e1936a35c94a6c37129e06bce7b8287))

# [@appland/appmap-v3.13.2](https://github.com/applandinc/appmap-js/compare/@appland/appmap-v3.13.1...@appland/appmap-v3.13.2) (2021-11-11)


### Bug Fixes

* Improve error reporting ([ac18468](https://github.com/applandinc/appmap-js/commit/ac184684d3e16a96ac98c8129d59fe5a147786bd))
* Map language types to OpenAPI types ([e44f906](https://github.com/applandinc/appmap-js/commit/e44f906304ac7fe568e574c9a768943ea931ec8e))

# [@appland/appmap-v3.13.1](https://github.com/applandinc/appmap-js/compare/@appland/appmap-v3.13.0...@appland/appmap-v3.13.1) (2021-11-11)


### Bug Fixes

* Wait for debugging information on exit ([fe71319](https://github.com/applandinc/appmap-js/commit/fe71319feb97dafffa1065e0747abe1f05e65cee))

# [@appland/appmap-v3.13.0](https://github.com/applandinc/appmap-js/compare/@appland/appmap-v3.12.2...@appland/appmap-v3.13.0) (2021-11-08)


### Bug Fixes

* Wait for verification before proceeding ([3e945fb](https://github.com/applandinc/appmap-js/commit/3e945fb5c2749a1b77a7b76ed8692f97034fa0f7))


### Features

* Use IntelliJ JDK, build tools, if available ([c4d8101](https://github.com/applandinc/appmap-js/commit/c4d81013040c613277fb3c21ded2474df2f317ae))

# [@appland/appmap-v3.12.2](https://github.com/applandinc/appmap-js/compare/@appland/appmap-v3.12.1...@appland/appmap-v3.12.2) (2021-11-05)


### Bug Fixes

* include resources directory in package ([66e98fb](https://github.com/applandinc/appmap-js/commit/66e98fbb205452b33d064a3ee3435933db7e6e81))

# [@appland/appmap-v3.12.1](https://github.com/applandinc/appmap-js/compare/@appland/appmap-v3.12.0...@appland/appmap-v3.12.1) (2021-11-04)


### Bug Fixes

* reverting openapi version to 3.0.1 ([90ef5ee](https://github.com/applandinc/appmap-js/commit/90ef5ee8e1e0381ce82eda734931e7a136287ad4))

# [@appland/appmap-v3.12.0](https://github.com/applandinc/appmap-js/compare/@appland/appmap-v3.11.0...@appland/appmap-v3.12.0) (2021-11-03)


### Bug Fixes

* Only display the command name if it's not found ([136ff50](https://github.com/applandinc/appmap-js/commit/136ff50bbbf3e069da79a7b8e490be24cbd6ffd4))


### Features

* Add support for sub-project installation ([7696ace](https://github.com/applandinc/appmap-js/commit/7696aceb813c9905580f53588327387dd06142a8))

# [@appland/appmap-v3.11.0](https://github.com/applandinc/appmap-js/compare/@appland/appmap-v3.10.1...@appland/appmap-v3.11.0) (2021-11-01)


### Features

* Export parseNormalizeSQL and add joinsCount ([1f37628](https://github.com/applandinc/appmap-js/commit/1f37628e9c448176a0d068bd312ba4672e2f4925))

# [@appland/appmap-v3.10.1](https://github.com/applandinc/appmap-js/compare/@appland/appmap-v3.10.0...@appland/appmap-v3.10.1) (2021-10-28)


### Bug Fixes

* Add missing mavenCentral repo correctly ([bf33ce4](https://github.com/applandinc/appmap-js/commit/bf33ce41214d3fb839b46ca85fc76a0cf2612cb6))

# [@appland/appmap-v3.10.0](https://github.com/applandinc/appmap-js/compare/@appland/appmap-v3.9.0...@appland/appmap-v3.10.0) (2021-10-21)


### Features

* OpenAPI template is configurable ([e8b64d3](https://github.com/applandinc/appmap-js/commit/e8b64d3c33dd2267ce9c0aeb5cdfa7626a62aa9d))
* Rename swagger command to openapi ([681b608](https://github.com/applandinc/appmap-js/commit/681b6083ff47760123cf4feed9abae8aab977eb1))

# [@appland/appmap-v3.9.0](https://github.com/applandinc/appmap-js/compare/@appland/appmap-v3.8.0...@appland/appmap-v3.9.0) (2021-10-21)

# [@appland/appmap-v3.8.0](https://github.com/applandinc/appmap-js/compare/@appland/appmap-v3.7.4...@appland/appmap-v3.8.0) (2021-10-18)


### Features

* Notify on install startup ([578c4f3](https://github.com/applandinc/appmap-js/commit/578c4f348cc9852ea5be54925d4aaf9f58866aa3))

# [@appland/appmap-v3.7.4](https://github.com/applandinc/appmap-js/compare/@appland/appmap-v3.7.3...@appland/appmap-v3.7.4) (2021-10-14)


### Bug Fixes

* Correct search for first gem in a Gemfile ([caed268](https://github.com/applandinc/appmap-js/commit/caed2683104af7870956bc76a63772aeaafb9d63))

# [@appland/appmap-v3.7.3](https://github.com/applandinc/appmap-js/compare/@appland/appmap-v3.7.2...@appland/appmap-v3.7.3) (2021-10-11)


### Bug Fixes

* Use correct wrapper name on Windows ([485dbb9](https://github.com/applandinc/appmap-js/commit/485dbb9969506b06317becf2f5cb8072cb4957f2))

# [@appland/appmap-v3.7.2](https://github.com/applandinc/appmap-js/compare/@appland/appmap-v3.7.1...@appland/appmap-v3.7.2) (2021-10-07)


### Bug Fixes

* Support UTF-16LE encoded build files ([a520438](https://github.com/applandinc/appmap-js/commit/a52043870cfcf66e5e26efb30f490df6a0e1c51e))

# [@appland/appmap-v3.7.1](https://github.com/applandinc/appmap-js/compare/@appland/appmap-v3.7.0...@appland/appmap-v3.7.1) (2021-10-04)


### Bug Fixes

* Present user with errors generated from child process ([71e11e1](https://github.com/applandinc/appmap-js/commit/71e11e1e38221660f3910bf4227b9e6546c5e519))
* Sessions are now properly persisted on disk ([e4960cd](https://github.com/applandinc/appmap-js/commit/e4960cd31f958fd2bf895e2838cf6d8a9b2cc5a8))

# [@appland/appmap-v3.7.0](https://github.com/applandinc/appmap-js/compare/@appland/appmap-v3.6.4...@appland/appmap-v3.7.0) (2021-09-30)


### Bug Fixes

* Add project directory debug data ([78c9ce7](https://github.com/applandinc/appmap-js/commit/78c9ce7292d3d0d6882fc41588fd65d4670c3809))
* Move directory argument to an optional positional argument ([a593924](https://github.com/applandinc/appmap-js/commit/a593924faf5beef9c0875308207e222a2eb8cd9a))


### Features

* Auto-select installer if only one is available ([db8ac09](https://github.com/applandinc/appmap-js/commit/db8ac0944b462f32b0909d3818b33b09f8e2342b))

# [@appland/appmap-v3.6.4](https://github.com/applandinc/appmap-js/compare/@appland/appmap-v3.6.3...@appland/appmap-v3.6.4) (2021-09-22)


### Bug Fixes

* Correct build.gradle updates ([afc490c](https://github.com/applandinc/appmap-js/commit/afc490c25e55566a7a11628955fb24d22fedeb42))

# [@appland/appmap-v3.6.3](https://github.com/applandinc/appmap-js/compare/@appland/appmap-v3.6.2...@appland/appmap-v3.6.3) (2021-09-21)


### Bug Fixes

* Run Gradle dependencyInsight task with stacktrace option in case of error ([91a5979](https://github.com/applandinc/appmap-js/commit/91a59796dc5b73e6208f3b452bf4b63f812583fd))

# [@appland/appmap-v3.6.2](https://github.com/applandinc/appmap-js/compare/@appland/appmap-v3.6.1...@appland/appmap-v3.6.2) (2021-09-21)


### Bug Fixes

* Use child_process.spawn instead of exec ([d0d85f3](https://github.com/applandinc/appmap-js/commit/d0d85f3bf153c1d986331302d6fe865ad06547dd))

# [@appland/appmap-v3.6.1](https://github.com/applandinc/appmap-js/compare/@appland/appmap-v3.6.0...@appland/appmap-v3.6.1) (2021-09-21)


### Bug Fixes

* Now logging commands run ([9a20f46](https://github.com/applandinc/appmap-js/commit/9a20f465ae47ea14c1204e49eacb97fe17a9ee32))

# [@appland/appmap-v3.6.0](https://github.com/applandinc/appmap-js/compare/@appland/appmap-v3.5.1...@appland/appmap-v3.6.0) (2021-09-17)


### Bug Fixes

* Correct import of Error classes ([badd988](https://github.com/applandinc/appmap-js/commit/badd988c00abcc4720f6e346a86ef15e4beeda6b))
* Fix agent install module imports ([a7caa17](https://github.com/applandinc/appmap-js/commit/a7caa1719bc3e20ff6fc08ed0412bb1d224afbb1))


### Features

* appmap.html standalone page ([97fa02e](https://github.com/applandinc/appmap-js/commit/97fa02ec809553d185a9acadcf895562ee5b80e6))
* open an AppMap in the default browser ([15fb41d](https://github.com/applandinc/appmap-js/commit/15fb41d2f2adc180588f5e00ea584dd274ffb080))
* Serve the appmap file and JS map file ([250c26d](https://github.com/applandinc/appmap-js/commit/250c26d92665c81264a29576c2155409b144ab5c))

# [@appland/appmap-v3.5.1](https://github.com/applandinc/appmap-js/compare/@appland/appmap-v3.5.0...@appland/appmap-v3.5.1) (2021-09-17)


### Bug Fixes

* Add debugging information for directory listing when install fails ([fb315c6](https://github.com/applandinc/appmap-js/commit/fb315c6b49925ad6a3d4a3f5eef265448602293a))

# [@appland/appmap-v3.5.0](https://github.com/applandinc/appmap-js/compare/@appland/appmap-v3.4.1...@appland/appmap-v3.5.0) (2021-09-15)


### Bug Fixes

* `appland.cli.log` is now populated on failure ([916f84c](https://github.com/applandinc/appmap-js/commit/916f84ce2a6eb08ac463d8f37fbbc32bad2486fb))
* Capture installer information upon failure ([6b01a9b](https://github.com/applandinc/appmap-js/commit/6b01a9b4b8f3e6cad8d6728682b767ccad3f2fa3))
* Clarify steps to fix missing requirements ([e743176](https://github.com/applandinc/appmap-js/commit/e743176318369f4d887480bcce26869e95feea4b))


### Features

* Ask user to confirm installation environment ([17a802b](https://github.com/applandinc/appmap-js/commit/17a802b776b63b8eab5039b8d7905e430e9a8eaa))

# [@appland/appmap-v3.4.1](https://github.com/applandinc/appmap-js/compare/@appland/appmap-v3.4.0...@appland/appmap-v3.4.1) (2021-09-15)


### Bug Fixes

* Users are now identified in the same manner as VSCode ([#355](https://github.com/applandinc/appmap-js/issues/355)) ([8d9cd50](https://github.com/applandinc/appmap-js/commit/8d9cd507bcbcbecb0a0fa742206b8534ad797620))

# [@appland/appmap-v3.4.0](https://github.com/applandinc/appmap-js/compare/@appland/appmap-v3.3.2...@appland/appmap-v3.4.0) (2021-09-13)


### Features

* Add validation step after install ([18effec](https://github.com/applandinc/appmap-js/commit/18effec0a4e121d24bfbfc38c6cdc1f9fcbd7b84))

# [@appland/appmap-v3.3.2](https://github.com/applandinc/appmap-js/compare/@appland/appmap-v3.3.1...@appland/appmap-v3.3.2) (2021-09-10)


### Bug Fixes

* Fixed an issue where install-agent quit before rresolving all promises ([8c42539](https://github.com/applandinc/appmap-js/commit/8c42539926e05f1498676b9d844e0a4b6b92d75a))

# [@appland/appmap-v3.3.1](https://github.com/applandinc/appmap-js/compare/@appland/appmap-v3.3.0...@appland/appmap-v3.3.1) (2021-09-10)


### Bug Fixes

* Update path of bin script ([da8e666](https://github.com/applandinc/appmap-js/commit/da8e666512d4ff2774fcc65c797686616ba7059e))

# [@appland/appmap-v3.3.0](https://github.com/applandinc/appmap-js/compare/@appland/appmap-v3.2.4...@appland/appmap-v3.3.0) (2021-09-10)


### Features

* Add telemetry reporting to install-agent results ([d555249](https://github.com/applandinc/appmap-js/commit/d5552493ce2685befaa76df6f36b4075aa50ad8b))

# [@appland/appmap-v3.2.4](https://github.com/applandinc/appmap-js/compare/@appland/appmap-v3.2.3...@appland/appmap-v3.2.4) (2021-09-09)


### Bug Fixes

* Fix missing import for `verbose` when running a Java installer ([4a6bba0](https://github.com/applandinc/appmap-js/commit/4a6bba0d4e8a7650e6af1e50b7783f5fc5ac00cf))

# [@appland/appmap-v3.2.3](https://github.com/applandinc/appmap-js/compare/@appland/appmap-v3.2.2...@appland/appmap-v3.2.3) (2021-09-08)


### Bug Fixes

* Add Poetry installer ([21b0296](https://github.com/applandinc/appmap-js/commit/21b02960f79da8884806c1ce7701c52b7c0002fa))

# [@appland/appmap-v3.2.2](https://github.com/applandinc/appmap-js/compare/@appland/appmap-v3.2.1...@appland/appmap-v3.2.2) (2021-09-03)


### Bug Fixes

* Index is now asynchronous ([6389d47](https://github.com/applandinc/appmap-js/commit/6389d475c975aa9e2aeb9c493917e2b14584af04))
* Target ES2017 ([23ad225](https://github.com/applandinc/appmap-js/commit/23ad225ab775f2983a4ee49c2e965e7259297ce7))

# [@appland/appmap-v3.2.1](https://github.com/applandinc/appmap-js/compare/@appland/appmap-v3.2.0...@appland/appmap-v3.2.1) (2021-09-01)


### Bug Fixes

* The CLI can no longer be imported as a third party library ([bf20ac2](https://github.com/applandinc/appmap-js/commit/bf20ac2757e101ccc2d4158fc42761d5be6e0a4b))

# [@appland/appmap-v3.2.0](https://github.com/applandinc/appmap-js/compare/@appland/appmap-v3.1.0...@appland/appmap-v3.2.0) (2021-08-31)


### Features

* Rework the `agent-install` user experience ([#316](https://github.com/applandinc/appmap-js/issues/316)) ([6e34f23](https://github.com/applandinc/appmap-js/commit/6e34f236f44ab2f0a5393ecf0ef59a0fd2af2d2d))

# [@appland/appmap-v3.1.0](https://github.com/applandinc/appmap-js/compare/@appland/appmap-v3.0.0...@appland/appmap-v3.1.0) (2021-08-19)


### Bug Fixes

* Always update build.gradle and pom.xml ([fd3e820](https://github.com/applandinc/appmap-js/commit/fd3e820f1cc6cf16a827fc21389b78d6cda7ac48))


### Features

* Create agent configuration ([cdbb282](https://github.com/applandinc/appmap-js/commit/cdbb28231df51c2c0874000126f8d20bf486b2c4))

# [@appland/appmap-v3.0.0](https://github.com/applandinc/appmap-js/compare/@appland/appmap-v2.3.4...@appland/appmap-v3.0.0) (2021-08-05)


### Continuous Integration

* CLI now available as @appland/appmap ([bd99645](https://github.com/applandinc/appmap-js/commit/bd9964536056406181aab5b393800a7a8152ddbc))


### BREAKING CHANGES

* @appland/cli renamed to @appland/appmap

# [@appland/cli-v1.5.2](https://github.com/applandinc/appmap-js/compare/@appland/cli-v1.5.1...@appland/cli-v1.5.2) (2021-08-04)


### Bug Fixes

* Reword instructions for agent install ([edeacf6](https://github.com/applandinc/appmap-js/commit/edeacf6e11da1d1aad39e985c2c8be8d81307fa3))

# [@appland/cli-v1.5.1](https://github.com/applandinc/appmap-js/compare/@appland/cli-v1.5.0...@appland/cli-v1.5.1) (2021-08-03)


### Bug Fixes

* Import PythonAgentInstaller properly ([f59da43](https://github.com/applandinc/appmap-js/commit/f59da43ae0b52a18a6d0a5bda5b9913747881ca8))

# [@appland/cli-v1.5.0](https://github.com/applandinc/appmap-js/compare/@appland/cli-v1.4.0...@appland/cli-v1.5.0) (2021-08-03)


### Features

* Add python support to install-agent command ([9316233](https://github.com/applandinc/appmap-js/commit/9316233b3c703b43ecb277c6ec41f539a3a8a544))

# [@appland/cli-v1.4.0](https://github.com/applandinc/appmap-js/compare/@appland/cli-v1.3.2...@appland/cli-v1.4.0) (2021-07-29)


### Features

* Install ruby or java agent via CLI ([4d8cf37](https://github.com/applandinc/appmap-js/commit/4d8cf37a06eef6aa5aa7bf82fa4d15d52be25166))

# [@appland/cli-v1.3.2](https://github.com/applandinc/appmap-js/compare/@appland/cli-v1.3.1...@appland/cli-v1.3.2) (2021-07-06)


### Bug Fixes

* Fix parent tree assignment in canonicalization ([fd54afa](https://github.com/applandinc/appmap-js/commit/fd54afa722166ce1ac022cbd649827ac2fa84b53))

# [@appland/cli-v1.3.1](https://github.com/applandinc/appmap-js/compare/@appland/cli-v1.3.0...@appland/cli-v1.3.1) (2021-07-02)


### Bug Fixes

* Find all matching events in each AppMap ([de578c7](https://github.com/applandinc/appmap-js/commit/de578c73864e10c6b815ac460fb94b8a0b4eab92))

# [@appland/cli-v1.3.0](https://github.com/applandinc/appmap-js/compare/@appland/cli-v1.2.0...@appland/cli-v1.3.0) (2021-07-02)


### Bug Fixes

* Don't emit trigrams with no caller and no callee ([65be7e5](https://github.com/applandinc/appmap-js/commit/65be7e5c03c3cd8a233c77bbb85c5ca54a563e07))
* Only show progress bars in interactive mode ([6436a3b](https://github.com/applandinc/appmap-js/commit/6436a3b7bff79eafcfef554eb27dd581113bd9a0))
* Refine JSON output of inspect command ([101e97e](https://github.com/applandinc/appmap-js/commit/101e97e3014ac41eda49b96b2f5a4a080bbf7f07))
* Remove unused functions ([fe03064](https://github.com/applandinc/appmap-js/commit/fe030646ed6e85ecf3afc7a5f36948988e37e39e))
* Update the AppMap index before the 'inspect' command runs ([1983813](https://github.com/applandinc/appmap-js/commit/19838133180ece16879af622bf3ccb576fc6de27))


### Features

* Add 'inventory' CLI command ([8175fb0](https://github.com/applandinc/appmap-js/commit/8175fb0727b40fdfc35720ead7362ae46ea2d877))
* Add database_type to CodeObjectType.QUERY ([8787b2d](https://github.com/applandinc/appmap-js/commit/8787b2de0e05bce6753c90b3b6f08115c94e8cc7))
* Add fingerprint strategies ([066bf9e](https://github.com/applandinc/appmap-js/commit/066bf9e1d2cf4767ca105d6f794daf8f82acaed5))
* App.Land client ([775abb3](https://github.com/applandinc/appmap-js/commit/775abb3ad598031d9b95f20e7b12f88bd8d8da3b))
* Fingerprint classes and packages ([7448804](https://github.com/applandinc/appmap-js/commit/74488040e804a6f57a19878980fa3ace25d6feb4))
* Store the database_type in query classMap entries ([7a44af6](https://github.com/applandinc/appmap-js/commit/7a44af6504dc78574b3ba9eb5d1edb60d3124a44))

# [@appland/cli-v1.2.0](https://github.com/applandinc/appmap-js/compare/@appland/cli-v1.1.0...@appland/cli-v1.2.0) (2021-06-29)


### Features

* Search by package and class ([0b14a27](https://github.com/applandinc/appmap-js/commit/0b14a2727f9aadbb43b69ac14d53258f45b20cf5))
* Search for database:, http:, query: ([21df198](https://github.com/applandinc/appmap-js/commit/21df1983e47f3e77c2476dcf75fa8b8ee4ca5465))
* Show progress bar while loading 'inspect' results ([2e3c410](https://github.com/applandinc/appmap-js/commit/2e3c410ea5d60b69b6f0ea5ef035f30f289088b8))

# [@appland/cli-v1.1.0](https://github.com/applandinc/appmap-js/compare/@appland/cli-v1.0.4...@appland/cli-v1.1.0) (2021-06-16)


### Bug Fixes

* Remove 'example' because it adds so much noise ([17fb066](https://github.com/applandinc/appmap-js/commit/17fb066ba0e260911d4b204f6f6b4b310a13b7e1))


### Features

* Add 'swagger' command to the CLI ([3cb4380](https://github.com/applandinc/appmap-js/commit/3cb43808918dad92766b863326f0ff500cc235b2))
* Add version file and created time to the AppMap index ([7496e3c](https://github.com/applandinc/appmap-js/commit/7496e3ceaf1dee3f96028d64246d7ea34b314386))
* Find and print info about a named function ([544db5c](https://github.com/applandinc/appmap-js/commit/544db5ca402d9e3399326f28da7d3a43a606f5c4))
* Search AppMaps for tables and routes ([e78d5b9](https://github.com/applandinc/appmap-js/commit/e78d5b91686818001a28ac6aee93ff388ec754e8))

# [@appland/cli-v1.0.4](https://github.com/applandinc/appmap-js/compare/@appland/cli-v1.0.3...@appland/cli-v1.0.4) (2021-05-28)


### Bug Fixes

* Configure src/cli.js as the bin script for packages/cli ([0de396a](https://github.com/applandinc/appmap-js/commit/0de396a030c9451ee0f930a0f4a81281305ee312))
* In dependency analysis, read the file mtime properly as the value of the file ([3700e96](https://github.com/applandinc/appmap-js/commit/3700e96caa322969d25332a613d6a6645d7d5ca5))
* Remove dependency on yargs/helpers ([5e603d5](https://github.com/applandinc/appmap-js/commit/5e603d5b2c9e606ec82ae23ba2171f0327a7b658))

# [@appland/cli-v1.0.3](https://github.com/applandinc/appmap-js/compare/@appland/cli-v1.0.2...@appland/cli-v1.0.3) (2021-05-18)


### Bug Fixes

* Update local dependencies ([f0d3281](https://github.com/applandinc/appmap-js/commit/f0d328161499999ee98fbb3aec2d438b3095bd0f))
* Update yargs to v17.0 ([278f1da](https://github.com/applandinc/appmap-js/commit/278f1daab7bb6fc8371ac80bf210a1a6fce76f79))

# [@appland/cli-v1.0.2](https://github.com/applandinc/appmap-js/compare/@appland/cli-v1.0.1...@appland/cli-v1.0.2) (2021-05-11)


### Bug Fixes

* Add publish config ([118c54f](https://github.com/applandinc/appmap-js/commit/118c54f3db08f19de39bca7d67abd36a0071a20e))

# [@appland/cli-v1.0.1](https://github.com/applandinc/appmap-js/compare/@appland/cli-v1.0.0...@appland/cli-v1.0.1) (2021-05-11)


### Bug Fixes

* Flag package as public ([67e179c](https://github.com/applandinc/appmap-js/commit/67e179cd72ba247903764de25d8c86e0dd07bf9b))

# @appland/cli-v1.0.0 (2021-05-11)


### Features

* Initial release ([#195](https://github.com/applandinc/appmap-js/issues/195)) ([c4776a0](https://github.com/applandinc/appmap-js/commit/c4776a0514c333746846b8ffca88465f8c2739ee))
