axis         = require 'axis'
rupture      = require 'rupture'
autoprefixer = require 'autoprefixer-stylus'
js_pipeline  = require 'js-pipeline'
css_pipeline = require 'css-pipeline'
contentful   = require 'roots-contentful'
marked       = require 'marked'

module.exports =
  ignores: ['readme.md', '**/layout.*', '**/_*', '.gitignore', 'ship.*conf']

  extensions: [
    js_pipeline(files: 'assets/js/*.coffee'),
    css_pipeline(files: 'assets/css/*.styl'),
    contentful(
      access_token: 'be9fbdc8c52ddb1998142cde9ef294a2d604f1afb7bd154c64776b533c9df4f5',
      space_id: '2zktrm0vi1yp'
      content_types:
        sitedefaults:
          id: 'sitedefaults',      
        games:
          id: 'games',
          filters: {
            'order': 'sys.createdAt'
          }
    )
  ]

  locals:
    markdown: marked

  stylus:
    use: [axis(), rupture(), autoprefixer()]
    sourcemap: true

  'coffee-script':
    sourcemap: true

  pug:
    pretty: true
