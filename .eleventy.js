const path = require("path");
const cards = require("./_data/cards.json");
const responsive_blocks_data = require("./_data/responsive_blocks.json");
const container_data = require("./_data/container.js");
const buffer_data = require("./_data/buffer.json");
const Image = require("@11ty/eleventy-img");
const responsive_data = require("./_data/responsive.json");

const SCREENS = responsive_data.SCREEN_WIDTHES;

function compareNumeric(a, b) {
  if (a > b) return 1;
  if (a == b) return 0;
  if (a < b) return -1;
}

function getWidthStack(page) {
  if (!page.screenWidthStack) {
    page.screenWidthStack = [];
  }
  return page.screenWidthStack;
}

function pushOnWidthStack(page, params) {
  let stack = getWidthStack(page);
  stack.push(params);
  // console.log('stack', stack)
}

function popFromWidthStack(page) {
  let stack = getWidthStack(page);
  if (stack.length) {
      stack.length--;
  }
  // console.log('stack', stack)
}

function pushGapOnWidthStack(page, unusedSpaceWidth) {
  if(typeof(unusedSpaceWidth) === 'object') {
    let obj = JSON.parse(JSON.stringify(unusedSpaceWidth)); 
    // console.log('obj', obj);
    for (let key in obj) {
      // console.log('key', key);
        for (let gap in obj[key]) {
          // console.log('gap', gap);
          // console.log('obj[key][gap]', obj[key][gap]);
          if (typeof obj[key][gap] == 'number') {
            obj[key][gap] *= 2;
          }
        }
    }
    pushOnWidthStack(page, {gap: obj});
  } else {
    pushOnWidthStack(page, {gap: unusedSpaceWidth*2});
  }
}

function pushMaxWidthOnWidthStack(page, maxWidth) {
  pushOnWidthStack(page, {maxWidth: maxWidth});
}

function pushAdaptiveOnWidthStack(page, coefficients) {
  pushOnWidthStack(page, { adaptive: coefficients });
}

function responsive_block (params) {
  pushAdaptiveOnWidthStack(this.page, responsive_blocks_data[params]);
  return `<div class="responsive-block-${params}">`;
}

function end_responsive_block() {
  popFromWidthStack(this.page);
  return `</div>`;
}

function buffer(classes) {
  pushGapOnWidthStack(this.page, buffer_data.GAP);
  let output = '';

  if(classes) {
    output = `<div class="buffer ${classes}">`
  } else {
    output = `<div class="buffer">`
  }

  return output;
}

function end_buffer() {
  popFromWidthStack(this.page);
  return `</div>`;
}

function max_width() {
  pushMaxWidthOnWidthStack(this.page, container_data.MAX_WIDTH);
  pushGapOnWidthStack(this.page, container_data.GAP);
  return `<div class="container">`;
}

function end_max_width() {
  popFromWidthStack(this.page); // padding
  popFromWidthStack(this.page); // max-width
  return `</div>`;
}

function calcWidthes(media, operations) {
  // console.log('media', media);
  // console.log('operations', operations);


  let localWidthes = SCREENS.slice();
  let maxWidthArray = operations.filter(op => op.maxWidth);
  let maxWidth = null;

  if(maxWidthArray.length > 0 && maxWidthArray.length <= 1) {
    maxWidth = maxWidthArray[0].maxWidth;
  } else if ( maxWidthArray.length > 1){
    maxWidth = maxWidthArray.reduce(function(res, obj) {
      return (obj.maxWidth < res.maxWidth) ? obj.maxWidth : res.maxWidth;
    });
  }

  if(maxWidth) {
    for(let i = 0; i < localWidthes.length; i++) {
      if(localWidthes[i] >= maxWidth) {
        localWidthes[i] = maxWidth;
        localWidthes = localWidthes.slice(0, i+1);
      }
    }
  }

  let mediaRange = 0;

  for(width of localWidthes) {
    if(width < 768) {
      mediaRange++;
    }
  }

  let localWidthesProcessed = localWidthes.slice();

  for(let i = 0; i < localWidthesProcessed.length; i++) {
    for(let op of operations) {    
      if(op.gap) {
        let gap = 0;
        if(typeof(op.gap) === 'object') {

          if(localWidthes[i] < media.phone) {
            gap = op.gap.default.x;
          } else if(localWidthes[i] < media.tablet) {
            gap = op.gap.phone.x;
          } else if(localWidthes[i] < media.laptop) {
            gap = op.gap.tablet.x;
          } else if(localWidthes[i] < media.desktop) {
            gap = op.gap.laptop.x;
          } else {
            gap = op.gap.desktop.x;
          }
        } else {
          gap = op.gap;
        }
        localWidthesProcessed[i] -= gap;
      }
  
      if(op.adaptive) {

        if(localWidthes[i] < media.phone) {
          localWidthesProcessed[i] *= op.adaptive.default;
        } else if(localWidthes[i] < media.tablet) {
          localWidthesProcessed[i] *= op.adaptive.phone;
        } else if(localWidthes[i] < media.laptop) {
          localWidthesProcessed[i] *= op.adaptive.tablet;
        } else if(localWidthes[i] < media.desktop) {
          localWidthesProcessed[i] *= op.adaptive.laptop;
        } else {
          localWidthesProcessed[i] *= op.adaptive.desktop;
        }
        localWidthesProcessed[i] = Math.round(localWidthesProcessed[i]);
      }
    }
  }

  maxWidth = localWidthesProcessed[localWidthesProcessed.length - 1];
  let count = localWidthesProcessed.length;

  for(let i = 0; i < count; i++) {
    let width = localWidthesProcessed[i];
    if(i < mediaRange) {
      localWidthesProcessed.push(width*2);
      localWidthesProcessed.push(width*3);
    } else {
      localWidthesProcessed.push(Math.round(width*1.5));
      localWidthesProcessed.push(width*2);
    }
  }

  localWidthesProcessed.sort(compareNumeric);
  localWidthesProcessed.splice(localWidthesProcessed.indexOf(maxWidth), 1);
  localWidthesProcessed.push(maxWidth);

  return localWidthesProcessed;
}

function calcSizes(media, operations) {
  // console.log('op', operations);
  let sizesDefault = '100vw';
  let maxWidth = '';
  let sizes = {
    phone: sizesDefault,
    tablet: sizesDefault,
    laptop: sizesDefault,
    desktop: sizesDefault,
    default: sizesDefault
  };

  for(let op of operations) {
    if(op.maxWidth) {
      maxWidth = op.maxWidth;
      sizes.maxWidth = op.maxWidth;
    }

    if(op.adaptive) {
      if(op.adaptive.phone < 1) {
        sizes.phone = `(${sizes.phone} * ${(op.adaptive.phone).toFixed(2)})`;
        if(maxWidth < media.phone) {
          sizes.maxWidth = Math.round(sizes.maxWidth * (op.adaptive.phone));
        }
      }

      if(op.adaptive.tablet < 1) {
        sizes.tablet = `(${sizes.tablet} * ${(op.adaptive.tablet).toFixed(2)})`;
        if (maxWidth >= media.phone && maxWidth < media.tablet) {
          sizes.maxWidth = Math.round(sizes.maxWidth * (op.adaptive.tablet));
        }
      }
      
      if(op.adaptive.laptop < 1) {
        sizes.laptop = `(${sizes.laptop} * ${(op.adaptive.laptop).toFixed(2)})`;
        if (maxWidth >= media.tablet && maxWidth < media.laptop) {
          sizes.maxWidth = Math.round(sizes.maxWidth * (op.adaptive.laptop));
        }
      }
 
      if(op.adaptive.desktop < 1) {
        sizes.desktop = `(${sizes.desktop} * ${(op.adaptive.desktop).toFixed(2)})`;
        if (maxWidth >= media.laptop && maxWidth < media.desktop) {
          sizes.maxWidth = Math.round(sizes.maxWidth * (op.adaptive.desktop));
        }
      }

      if(op.adaptive.default < 1) {
        sizes.default = `(${sizes.default} * ${(op.adaptive.default).toFixed(2)})`;
        if (maxWidth >= media.desktop) {
          sizes.maxWidth = Math.round(sizes.maxWidth * (op.adaptive.default));
        }
      }
    }


    if(op.gap) {
      if(typeof(op.gap) === 'object') {
        sizes.default = `(${sizes.default} - ${op.gap.default.x}px)`;
        sizes.phone = `(${sizes.phone} - ${op.gap.phone.x}px)`;
        sizes.tablet = `(${sizes.tablet} - ${op.gap.tablet.x}px)`; 
        sizes.laptop = `(${sizes.laptop} - ${op.gap.laptop.x}px)`;
        sizes.desktop = `(${sizes.desktop} - ${op.gap.desktop.x}px)`;
      } else {
        sizes.default = `(${sizes.default} - ${op.gap}px)`;
        sizes.phone = `(${sizes.phone} - ${op.gap}px)`;
        sizes.tablet = `(${sizes.tablet} - ${op.gap}px)`; 
        sizes.laptop = `(${sizes.laptop} - ${op.gap}px)`;
        sizes.desktop = `(${sizes.desktop} - ${op.gap}px)`;
      }

      if(sizes.maxWidth) {
        if(typeof(op.gap) === 'object') {
          if(maxWidth < media.phone) {
            sizes.maxWidth -= op.gap.default.x;
          }
          if (maxWidth >= media.phone && maxWidth < media.tablet) {
            sizes.maxWidth -= op.gap.phone.x;
          }
          if (maxWidth >= media.tablet && maxWidth < media.laptop) {
            sizes.maxWidth -= op.gap.tablet.x;
          }
          if (maxWidth >= media.laptop && maxWidth < media.desktop) {
            sizes.maxWidth -= op.gap.laptop.x;
          }
          if (maxWidth >= media.desktop) {
            sizes.maxWidth -= op.gap.desktop.x;
          }
        } else {
          sizes.maxWidth -= op.gap;
        }
      }
    }
  }

  let result = '';

  for(let size in sizes) {
    if(size === 'maxWidth') {
      result = `(min-width: ${maxWidth}px) ${Math.round(sizes[size])}px, ` + result;
    }
    
    if(size  === 'default') {
      result = `calc(${sizes[size]})` + result;
    }

    if(size  === 'phone') {
      result = `(min-width: ${media.phone}px) calc(${sizes[size]}), ` + result;
    }
    
    if(size  === 'tablet') {
      result = `(min-width: ${media.tablet}px) calc(${sizes[size]}), ` + result;
    }
    
    if(size  === 'laptop') {
      result = `(min-width: ${media.laptop}px) calc(${sizes[size]}), ` + result;
    }

    if(size  === 'desktop') {
      result = `(min-width: ${media.desktop}px) calc(${sizes[size]}), ` + result;
    }

  }
  return result;
}

async function picture(src, alt) {
  let media = responsive_data.MEDIA;
  const isTEST = false;
  const extension = path.extname(src);
  const name = path.basename(src, extension);
  let operationStack = getWidthStack(this.page);

  let result = '';
  let srcset = calcWidthes(media, operationStack);
  let sizes = calcSizes(media, operationStack);

  // console.log('operationStack', operationStack);
  // console.log('widthes', srcset);
  // console.log('sizes', sizes);

  if(extension == '.svg') {
    let metadata = await Image(src, {
      svgAllowUpscale: true,
      widths: [srcset[srcset.length - 1]],
      formats: ['png'],
      outputDir: './_site/img',
      filenameFormat: function (id, src, width, format, options) {
        return `${name}-${[srcset[srcset.length - 1]]}w.png`;
      }
    });

    if(isTEST) {
      result = `<picture>
                  <source type="image/svg+xml" srcset="https://picture.softevol.com/svg/image-${metadata.png[0].width}x${Math.round(metadata.png[0].width / 16 * 9)}.svg ${metadata.png[0].width}w">
                  <img src="https://picture.softevol.com/svg/image-${metadata.png[0].width}x${Math.round(metadata.png[0].width / 16 * 9)}.svg" alt="${alt}" width="${metadata.png[0].width}" height="${Math.round(metadata.png[0].width / 16 * 9)}">
                </picture>`
    
    } else {
      result = `<picture>
      <source type="image/svg+xml" srcset="/${src}">
      <img src="${metadata.png[0].url}" alt="${alt}" width="${metadata.png[0].width}" height="${metadata.png[0].height}">
    </picture>`;
    }
  } else if (extension == '.png') {
    let metadata = await Image(src, {
      widths: srcset,
      formats: ['webp'],
      outputDir: './_site/img/',
      filenameFormat: function (id, src, width, format, options) {
        return `${name}-${width}w.${format}`;
      }
    });

    // console.log('srcset[srcset.length - 1]', srcset[srcset.length - 1]);

    let fallbackMetadata = await Image(src, {
      widths: [srcset[srcset.length - 1]],
      formats: ['png'],
      outputDir: './_site/img/',
      filenameFormat: function (id, src, width, format, options) {
        return `${name}-${width}w.${format}`;
      }
    });

    // console.log('fallbackMetadata.png', fallbackMetadata.png);

    if(isTEST) {
      result  = 
      `<picture>
        <source sizes="${sizes}" type="image/svg+xml" srcset="\n`;
      result += metadata['webp'].map(webp => `      https://picture.softevol.com/svg/image-${webp.width}x${Math.round(webp.width / 16 * 9)}.svg ${webp.width}w`).join(",\n");
      result += `">\n`;
      result += `<!-- TODO add img -->\n`;
      result += `  <img src="https://picture.softevol.com/svg/image-${fallbackMetadata.png[0].width}x${Math.round(fallbackMetadata.png[0].width / 16 * 9)}.svg" alt="${alt}" width="${fallbackMetadata.png[0].width}" height="${Math.round(fallbackMetadata.png[0].width / 16 * 9)}">\n`;
      result += `</picture>`;    
    } else {
      let fallbackWidth;
      let fallbackHeight;

      if(srcset[srcset.length - 1] !== fallbackMetadata.png[0].width) {
        fallbackWidth = srcset[srcset.length - 1];
        fallbackHeight = Math.round((fallbackWidth/fallbackMetadata.png[0].width)*fallbackMetadata.png[0].height);
      } else {
        fallbackWidth = fallbackMetadata.png[0].width;
        fallbackHeight = fallbackMetadata.png[0].height;
      }

      result  = 
      `<picture>
        <source sizes="${sizes}" type="image/webp" srcset="\n`;
      result += metadata['webp'].map(webp => `      ${webp.srcset}`).join(",\n");
      result += `">\n`;
      result += `<!-- TODO add img -->\n`;
      result += `  <img src="${fallbackMetadata.png[0].url}" alt="${alt}" width="${fallbackWidth}" height="${fallbackHeight}">\n`;
      result += `</picture>`;
    }
  } else if (extension == '.jpg' || extension == '.jpeg') {
    let metadata = await Image(src, {
      widths: srcset,
      formats: ['webp'],
      outputDir: './_site/img/',
      filenameFormat: function (id, src, width, format, options) {
        return `${name}-${width}w.${format}`;
      }
    });

    
    let fallbackMetadata = await Image(src, {
      widths: [srcset[srcset.length - 1]],
      formats: ['jpeg'],
      outputDir: './_site/img/',
      filenameFormat: function (id, src, width, format, options) {
        return `${name}-${width}w.${format}`;
      }
    });

    if(isTEST) {
      let array = [];

      for(let i = 100; i <= 1500; i++) {
        array.push(i);
      }

      result  = 
      `<picture>
        <source sizes="${sizes}" type="image/svg+xml" srcset="\n`;
      // result += metadata['webp'].map(webp => `      https://picture.softevol.com/svg/image-${webp.width}x${Math.round(webp.width / 16 * 9)}.svg ${webp.width}w`).join(",\n");
      result += array.map(v => `      https://picture.softevol.com/svg/image-${v}x${Math.round(v / 16 * 9)}.svg ${v}w`).join(",\n");
      result += `">\n`;
      result += `<!-- TODO add img -->\n`;
      result += `  <img src="https://picture.softevol.com/svg/image-${fallbackMetadata.jpeg[0].width}x${Math.round(fallbackMetadata.jpeg[0].width / 16 * 9)}.svg" alt="${alt}" width="${fallbackMetadata.jpeg[0].width}" height="${Math.round(fallbackMetadata.jpeg[0].width / 16 * 9)}">\n`;
      result += `</picture>`;    
    } else {
      let fallbackWidth;
      let fallbackHeight;

      if(srcset[srcset.length - 1] !== fallbackMetadata.jpeg[0].width) {
        fallbackWidth = srcset[srcset.length - 1];
        fallbackHeight = Math.round((fallbackWidth/fallbackMetadata.jpeg[0].width)*fallbackMetadata.jpeg[0].height);
      } else {
        fallbackWidth = fallbackMetadata.jpeg[0].width;
        fallbackHeight = fallbackMetadata.jpeg[0].height;
      }

      result  = 
      `<picture>
        <source sizes="${sizes}" type="image/webp" srcset="\n`;
      result += metadata['webp'].map(webp => `      ${webp.srcset}`).join(",\n");
      result += `">\n`;
      result += `<!-- TODO add img -->\n`;
      result += `  <img src="${fallbackMetadata.jpeg[0].url}" alt="${alt}" width="${fallbackWidth}" height="${fallbackHeight}">\n`;
      result += `</picture>`;
    }
  } else {
    throw new Error('Unsupported file format');
  }
  return result;
}

async function pictureSvgPng(src, alt, width, height) {
  if(alt === undefined) {
      // You bet we throw an error on missing alt (alt="" works okay)
      throw new Error(`Missing \`alt\` on responsiveimage from: ${src}`);
  }
  
  let metadata = await Image(src, {
      formats: ['png', 'svg'],
      outputDir: './_site/img'
  });

  // TODO: figure out that loading="lazy" decoding="async"
  // TODO: set image name like param
  
  return `<picture>
              <source type="image/svg+xml" srcset="${metadata.svg[0].url}">
              <img src="${metadata.png[0].url}" width="${width}" height="${height}" alt="${alt}">
          </picture>`;
}

function colorBlock(theme, color, label) {
  let colorBlock = `<div class="color-block">
                <div style="background-color: ${ color }; color: ${ label };">
                  <div class="color-block__buffer">
                    <p class="color-block__label">
                      ${ theme }
                    </p>
                    <div class="spacer-40"></div>
                    <p class="color-block__hex">
                      ${ color }
                    </p>
                  </div>
                </div>
              </div>
  `;
  return colorBlock;
}

function debug(obj) {
  return `<pre><code>${JSON.stringify(obj, null, 2)}</code></pre>`
}

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("css/**/*.css");
  eleventyConfig.addPassthroughCopy("css/**/*.ejs");
  eleventyConfig.addPassthroughCopy("img/**/*");
  eleventyConfig.addPassthroughCopy("js/**/*");
  eleventyConfig.addPassthroughCopy("assets/**/*");

  eleventyConfig.addShortcode("max_width", max_width);
  eleventyConfig.addShortcode("end_max_width", end_max_width);
  eleventyConfig.addShortcode("responsive_block", responsive_block);
  eleventyConfig.addShortcode("end_responsive_block", end_responsive_block);
  eleventyConfig.addShortcode("buffer", buffer);
  eleventyConfig.addShortcode("end_buffer", end_buffer);

  eleventyConfig.addShortcode("colorBlock", colorBlock);

  eleventyConfig.addAsyncShortcode("picture", picture);
  eleventyConfig.addAsyncShortcode("pictureSvgPng", pictureSvgPng);

  eleventyConfig.addShortcode("debug", debug);

  async function card(src, alt, title, description) {

    let card = `
      <div class="card-1">
        <div class="responsive-blocks-container">
        ${(responsive_block.call(this, "55_55_100_100_100"))}
        <div class="card-1__img" role="presentation" aria-hidden="true">
          ${buffer.call(this)}
            ${(await picture.call(this, src, alt))}
          ${end_buffer.call(this)}
        </div>
        ${end_responsive_block.call(this)}
        ${responsive_block.call(this, "45_45_100_100_100")}
        ${end_responsive_block.call(this)}
        </div>
        <div class="spacer-36"></div>
        <h3 class="primary-500 text-uppercase text-center-lp">
          ${title}
        </h3>
        <div class="spacer-6"></div>
        <p class="text-center-lp"> 
          ${description}
        </p>
        <div class="spacer-80"></div>
      </div>
    `;

    return card;
  }

  async function tecnologyCard(src, alt, title, description) { 
    let card = `
    <div class="card-2">
      <div class="card-2__img" role="presentation" aria-hidden="true">
        <div class="responsive-blocks-container">
          ${responsive_block.call(this,"30_35_50_50_50")}
            ${buffer.call(this)}
              ${(await picture.call(this, src, alt))}
            ${end_buffer.call(this)}
          ${end_responsive_block.call(this)}
        </div>
        <div class="card-2__spacer"></div>
      </div>
      <h3 class="primary-500">
        <strong>${title}</strong>
      </h3>
      <div class="spacer-20"></div>
      <p> 
        ${description}
      </p>
      <div class="card-2__spacer-bottom"></div>
    </div>
    `;

    return card;
  }

  async function servicesCard(src, alt, title, description) {
    pushGapOnWidthStack(this.page, cards.CARD_3.GAP);

    let card = `
    ${buffer.call(this)}
    <div class="card-3">
      <div class="responsive-blocks-container">
        ${responsive_block.call(this, "50_40_30_30_30")}
          <div class="card-3__img">
            ${buffer.call(this)}
              ${(await picture.call(this, src, alt))}
            ${end_buffer.call(this)}
          </div>
        ${end_responsive_block.call(this)}
        ${responsive_block.call(this, "100_100_70_70_70")}
          <h3 class="big-title">
            ${title}
          </h3>
          <div class="spacer-48"></div>
          <p>
          ${description}
          </p>
        ${end_responsive_block.call(this)}
      </div>
    </div>
    ${end_buffer.call(this)}
    `;
    
   popFromWidthStack(this.page);
    return card;
  }

  eleventyConfig.addAsyncShortcode("card", card);
  eleventyConfig.addAsyncShortcode("tecnologyCard", tecnologyCard);
  eleventyConfig.addAsyncShortcode("servicesCard", servicesCard);
}