const lib = require("lib");
const cards = require("./_data/cards.json");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("css/**/*.css");
  eleventyConfig.addPassthroughCopy("css/**/*.ejs");
  eleventyConfig.addPassthroughCopy("img/**/*");
  eleventyConfig.addPassthroughCopy("js/**/*");
  eleventyConfig.addPassthroughCopy("assets/**/*");

  eleventyConfig.addGlobalData("responsive", lib.libData);

  eleventyConfig.addShortcode("container", lib.container);
  eleventyConfig.addShortcode("endContainer", lib.endContainer);
  eleventyConfig.addShortcode("column_100_50_50_50_50", lib.column_100_50_50_50_50);
  eleventyConfig.addShortcode("column_100_50_25_25_25", lib.column_100_50_25_25_25);
  eleventyConfig.addShortcode("column_100_100_33_33_33", lib.column_100_100_33_33_33);
  eleventyConfig.addShortcode("column_100_100_66_66_66", lib.column_100_100_66_66_66);
  eleventyConfig.addShortcode("column_100_75_75_75_75", lib.column_100_75_75_75_75);
  eleventyConfig.addShortcode("column_100_25_25_25_25", lib.column_100_25_25_25_25);
  eleventyConfig.addShortcode("column_100_25_50_50_50", lib.column_100_25_50_50_50);
  eleventyConfig.addShortcode("column_100_75_50_50_50", lib.column_100_75_50_50_50);
  eleventyConfig.addShortcode("column_100_25_66_66_66", lib.column_100_25_66_66_66);
  eleventyConfig.addShortcode("column_100_33_33_33_33", lib.column_100_33_33_33_33);
  eleventyConfig.addShortcode("column_100_25_100_100_100", lib.column_100_25_100_100_100);
  eleventyConfig.addShortcode("column_75_35_50_50_50", lib.column_75_35_50_50_50);
  eleventyConfig.addAsyncShortcode("card", card);
  eleventyConfig.addAsyncShortcode("tecnologyCard", tecnologyCard);
  eleventyConfig.addAsyncShortcode("servicesCard", servicesCard);


  // new columns
  eleventyConfig.addShortcode("column_100_50_33_33_33", lib.column_100_50_33_33_33);
  eleventyConfig.addShortcode("column_100_100_25_25_25", lib.column_100_100_25_25_25);
  eleventyConfig.addShortcode("column_100_100_75_75_75", lib.column_100_100_75_75_75);

  eleventyConfig.addShortcode("column_100_20_40_40_40", lib.column_100_20_40_40_40);
  eleventyConfig.addShortcode("column_100_80_60_60_60", lib.column_100_80_60_60_60);
  eleventyConfig.addShortcode("column_100_20_25_25_25", lib.column_100_20_25_25_25);
  eleventyConfig.addShortcode("column_100_80_55_55_55", lib.column_100_80_55_55_55);
  eleventyConfig.addShortcode("column_100_100_20_20_20", lib.column_100_100_20_20_20);
  eleventyConfig.addShortcode("column_100_85_45_45_45", lib.column_100_85_45_45_45);
  eleventyConfig.addShortcode("column_100_15_10_10_10", lib.column_100_15_10_10_10);
  eleventyConfig.addShortcode("column_100_20_55_55_55", lib.column_100_20_55_55_55);
  eleventyConfig.addShortcode("column_100_55_35_35_35", lib.column_100_55_35_35_35);
  eleventyConfig.addShortcode("column_100_25_10_10_10", lib.column_100_25_10_10_10);
  eleventyConfig.addShortcode("column_100_80_75_75_75", lib.column_100_80_75_75_75);
  eleventyConfig.addShortcode("column_100_55_100_100_100", lib.column_100_55_100_100_100);
  eleventyConfig.addShortcode("column_100_45_100_100_100", lib.column_100_45_100_100_100);
  eleventyConfig.addShortcode("column_100_100_70_70_70", lib.column_100_100_70_70_70);
  eleventyConfig.addShortcode("column_50_40_30_30_30", lib.column_50_40_30_30_30);
  eleventyConfig.addShortcode("column_100_80_50_50_50", lib.column_100_80_50_50_50);
  eleventyConfig.addShortcode("column_100_60_55_55_55", lib.column_100_60_55_55_55);
  eleventyConfig.addShortcode("column_100_20_20_20_20", lib.column_100_20_20_20_20);
  eleventyConfig.addShortcode("column_100_70_35_35_35", lib.column_100_70_35_35_35);
  eleventyConfig.addShortcode("column_100_10_10_10_10", lib.column_100_10_10_10_10);
  eleventyConfig.addShortcode("column_100_10_100_100_100", lib.column_100_10_100_100_100);
  eleventyConfig.addShortcode("column_100_90_85_85_85", lib.column_100_90_85_85_85);
  eleventyConfig.addShortcode("column_100_100_15_15_15", lib.column_100_100_15_15_15);

  eleventyConfig.addShortcode("column_10_25_25_25_25", lib.column_10_25_25_25_25);
  eleventyConfig.addShortcode("column_90_75_75_75_75", lib.column_90_75_75_75_75);
  eleventyConfig.addShortcode("column_10_20_40_40_40", lib.column_10_20_40_40_40);
  eleventyConfig.addShortcode("column_70_80_60_60_60", lib.column_70_80_60_60_60);
  eleventyConfig.addShortcode("column_20_20_25_25_25", lib.column_20_20_25_25_25);
  eleventyConfig.addShortcode("column_55_80_55_55_55", lib.column_55_80_55_55_55);
  eleventyConfig.addShortcode("column_25_100_20_20_20", lib.column_25_100_20_20_20);
  eleventyConfig.addShortcode("column_10_20_25_25_25", lib.column_10_20_25_25_25);
  eleventyConfig.addShortcode("column_70_80_55_55_55", lib.column_70_80_55_55_55);
  eleventyConfig.addShortcode("column_20_100_20_20_20", lib.column_20_100_20_20_20);
  eleventyConfig.addShortcode("column_80_80_75_75_75", lib.column_80_80_75_75_75);
  eleventyConfig.addShortcode("column_40_40_55_55_55", lib.column_40_40_55_55_55);
  eleventyConfig.addShortcode("column_60_60_35_35_35", lib.column_60_60_35_35_35);
  eleventyConfig.addShortcode("column_20_10_10_10_10", lib.column_20_10_10_10_10);
  eleventyConfig.addShortcode("column_10_10_25_25_25", lib.column_10_10_25_25_25);
  eleventyConfig.addShortcode("column_90_90_75_75_75", lib.column_90_90_75_75_75);
  eleventyConfig.addShortcode("column_70_60_55_55_55", lib.column_70_60_55_55_55);
  eleventyConfig.addShortcode("column_25_20_20_20_20", lib.column_25_20_20_20_20);
  eleventyConfig.addShortcode("column_50_50_25_25_25", lib.column_50_50_25_25_25);

  eleventyConfig.addShortcode("column_5_10_100_100_100", lib.column_5_10_100_100_100);
  eleventyConfig.addShortcode("column_5_100_15_15_15", lib.column_5_100_15_15_15);
  eleventyConfig.addShortcode("column_90_90_85_85_85", lib.column_90_90_85_85_85);

  eleventyConfig.addShortcode("colorBlock", lib.designSystem.colorBlock);
  eleventyConfig.addShortcode("endColumn", lib.endColumn);
  eleventyConfig.addShortcode("buffer", lib.buffer);
  eleventyConfig.addShortcode("responsiveBuffer", lib.responsiveBuffer);
  eleventyConfig.addShortcode("endBuffer", lib.endBuffer);
  eleventyConfig.addAsyncShortcode("picture", lib.picture);
  eleventyConfig.addAsyncShortcode("pictureSvgPng", lib.pictureSvgPng);
  eleventyConfig.addShortcode("debug", lib.debug);

  async function card(responsive, src, alt, title, description) {
    let card = `
      <div class="card-1">
        <div class="responsive-blocks-container">
        ${(lib.column_55_55_100_100_100.call(this, responsive))}
        <div class="card-1__img" role="presentation" aria-hidden="true">
          ${(lib.buffer.call(this, responsive))}
            ${(await lib.picture.call(this, responsive, src, alt))}
          ${(lib.endBuffer.call(this))}
        </div>
        ${(lib.endColumn.call(this))}
        ${(lib.column_45_45_100_100_100.call(this, responsive))}
        ${(lib.endColumn.call(this))}
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

  async function tecnologyCard(responsive, src, alt, title, description) {
    
    let card = `
    <div class="card-2">
      <div class="card-2__img" role="presentation" aria-hidden="true">
        <div class="responsive-blocks-container">
          ${(lib.column_30_35_50_50_50.call(this, responsive))}
            ${(lib.buffer.call(this, responsive))}
              ${(await lib.picture.call(this, responsive, src, alt))}
            ${(lib.endBuffer.call(this))}
          ${(lib.endColumn.call(this))}
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

  async function servicesCard(responsive, src, alt, title, description) {
    lib.pushGap(this.page, cards.CARD_3.GAP);

    let card = `
    ${(lib.buffer.call(this, responsive))}
    <div class="card-3">
      <div class="responsive-blocks-container">
        ${(lib.column_50_40_30_30_30.call(this, responsive))}
          <div class="card-3__img">
            ${(lib.buffer.call(this, responsive))}
              ${(await lib.picture.call(this, responsive, src, alt))}
            ${(lib.endBuffer.call(this))}
          </div>
        ${(lib.endColumn.call(this))}
        ${(lib.column_100_100_70_70_70.call(this, responsive))}
          <h3 class="big-title">
            ${title}
          </h3>
          <div class="spacer-48"></div>
          <p>
          ${description}
          </p>
        ${(lib.endColumn.call(this))}
      </div>
    </div>
    ${(lib.endBuffer.call(this))}
    `;
    lib.popFromStack(this.page);
    return card;
  }
}