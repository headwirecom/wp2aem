const Renderer = require('@atjson/renderer-hir').default
const classify = require('@atjson/renderer-hir').classify

class AemCoreCompontentsRender extends Renderer {
  
  *root() {
    return (yield)
  }

  *Paragraph() {
    const text = (yield).join('')
    const html = `<p>${text}</p>\n`
    const textComponent = {
      'jcr:createdBy': 'admin',
        'jcr:primaryType': 'nt:unstructured',
        'sling:resourceType': 'core/wcm/components/text/v2/text',
        'text': html,
        'textIsRich': true,
    }
    return textComponent
  }

  *Heading(heading) {
    let text = (yield).join('')
    let level = heading.attributes.level
    const type = `h${level}`
    const titleComponent  = {
      'jcr:createdBy': 'admin',
      'jcr:primaryType': 'nt:unstructured',
      'sling:resourceType': 'core/wcm/components/title/v2/title',
      'jcr:title': text,
      'type': type,
    }
    return titleComponent
  }

  *Link(link) {
    let text = (yield).join('')
    let url = link.attributes.url
    return `<a href="${url}">${text}</a>`
  }

  *Bold(bold) {
    let text = (yield).join('')
    return `<strong>${text}</strong>`
  }

  *Italic(italic) {
    let text = (yield).join('')
    return `<em>${text}</em>`
  }

  *Image(image) {
    const html = `<img src="${image.attributes.url}"></img>`
    const textComponent = {
      'jcr:createdBy': 'admin',
        'jcr:primaryType': 'nt:unstructured',
        'sling:resourceType': 'core/wcm/components/text/v2/text',
        'text': html,
        'textIsRich': true,
    }
    return textComponent
  }

 *VideoEmbed(videoEmbed) {
    // TODO
    /*
    let video = {
      'jcr:primaryType': "nt:unstructured",
      'sling:resourceType': 'wp2aem/components/embed',
      'type': 'html',
      'html': `<iframe  src="${videoEmbed.attributes.url}"></iframe>`
    }
    return video
    */

    return `<iframe  src="${videoEmbed.attributes.url}" width="640" height="360" frameborder="0" allowfullscreen></iframe>`
  }
}
module.exports = AemCoreCompontentsRender
