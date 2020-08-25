import React from 'react';

export default function SkillsSection() {
  return (
    <React.Fragment>
      <section className="skills-section content-page-padding">
        <h1>Honing the gifts</h1>
        <div class="skills-content-1">
          <div>
            <h2>Web Slinging</h2>
            <ul class="skills-list no-list-style">
              <li>Fundamentals in HTML, CSS, and JS</li>
              <li>Component driven development</li>
              <li>Popular CMS tweaking: Wordpress, Shopify, etc.</li>
            </ul>
          </div>
          <div className="spider-web-wrap web-spin">
            <div class="web">
              <div class="outter outter-3">
                <div class="inner">
                </div>
              </div>
              <div class="outter outter-2">
                <div class="inner">
                </div>
              </div>
              <div class="outter">
                <div className="web-line"></div>
                <div className="web-line-2"></div>
                <div className="web-line-3"></div>
                <div className="web-line-4"></div>
                <div class="inner">
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="skills-content-2">
          <h2>Pixel Pushing</h2>
          <ul class="skills-list no-list-style">
            <li>Foundation in visual arts</li>
            <li>Making it happen with any program that has a pen tool</li>
            <li>Sketch it, scan it, add the magic</li>
          </ul>
        </div>
      </section>
    </React.Fragment>
  )
}
