const HTMLSource = require('@atjson/source-html').default
const AemCoreCompontentsRender = require('../renders/AemCoreCompontentsRender')
const OffsetSource = require('@atjson/offset-annotations').default
const sanitizeHtml = require('sanitize-html')

module.exports = function(RED) {
  function firstNode(config) {
    RED.nodes.createNode(this, config);

    var context = this.context();
    var node = this;

    this.on('input', function(msg) {

      // TODO: Remove
      console.log(`HTML: ${msg.payload.content.rendered}`)

      let html = sanitizeHtml(msg.payload.content.rendered, {
        allowedTags: [ 'p', 'h1', 'h2', 'h3', 'b', 'i', 'em', 'strong', 'a' ],
        allowedAttributes: {
          'a': [ 'href' ]
        },
        allowedIframeHostnames: ['www.youtube.com']
      });

      // TODO: Remove
      console.log(`Sanitized HTML: ${html}`)

      try {
        msg.payload = AemCoreCompontentsRender.render(
          HTMLSource.fromRaw(html).convertTo(OffsetSource)
        );
      } catch (err) {
        console.log(err)
      }

      node.send(msg);
    });
  }
  RED.nodes.registerType("FirstNode", firstNode);
};
