/*
  nmo is used for backend tasks and should only be usefull to a few advanced
  users
  
  jsonld is the object most plugin developers will be interested in as it contains
  the results from previous plugins. These plugins may include text extraction or
  social media scraping meaning that the jsonld will contain the text to be processed
  or the interaction statistics to be examined. If you are creating a plugin which is the
  first in a pipeline this will be "None" and you should create a jsonld to return
  
  The url is for processing of non-document files. When a plugin is designed to
  process an image or a pdf this url will be a link to that file. The developer should
  grab the image and then perform their processing
*/

export async function processMessage(meta, jsonLd, url) {
  return jsonLd;
}
