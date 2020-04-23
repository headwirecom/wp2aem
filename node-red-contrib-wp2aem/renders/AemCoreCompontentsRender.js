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
    return `<img src="${image.attributes.url}"></img>`
  }

}
module.exports = AemCoreCompontentsRender
