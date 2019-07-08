import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>iOS Developer @ Mobs (https://mobs.video)  <span>2018.7-present</span></h2>
                        <ul>
                          <li>Work on development of iOS application in Objective-C and Swift.</li>
                          <li>Deliver across the entire app life cycle: concept, design, build, deploy, test, release to app stores and support.</li>
                          <li>Works closely with product and UI/UX to design both practical and innovative native iOS application.</li>
                        </ul>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Software Engineer @ DynoSense Corp.<span>2015.5-2018.4</span></h2>
                        <ul>
                          <li>Work on development of iOS application in Swift.</li>
                          <li>Work within the full development life cycle of scaleable back-end Node.js applications.</li>
                          <li>Optimization of the application for maximum speed and scalability.</li>
                          <li>Design and implementation of Cassandra database procedures, solutions, and data security.</li>
                          <li>Support, maintain, and document software functionality.</li>
                          <li>Participate in code reviews, help maintain code quality, organization, and automatization.</li>
                          <li>Skilled and experienced in Agile Development process.</li>
                        </ul>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>iOS Developer @ Aryausa<span>2014.9-2014.12</span></h2>
                        <ul>
                          <li>Work on development of iOS application in Objective-C.</li>
                          <li>Developing rich, interactive and high performance native iOS mobile applications.</li>
                        </ul>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
