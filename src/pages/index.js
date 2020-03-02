import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Scroller from "../components/scroller"
import PortfolioModal from "../components/portfolio/modal"
import PortfolioCarousel from "../components/portfolio/carousel"

export default class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    Scroller.handleAnchorScroll = Scroller.handleAnchorScroll.bind(this)
    this.state = {
      modalShow: false,
      modalCurrent: 0
    }
    this.handlePortfolioClick = this.handlePortfolioClick.bind(this);
    this.setModal = this.setModal.bind(this);
  }

  handlePortfolioClick(index, e) {
    e.preventDefault();
    this.setModal(true, index);
  }

  setModal(isShown, current) {
    this.setState({
      modalShow: isShown,
      modalCurrent: current
    });
  }

  render() {
    return (
      <Layout>
        <SEO title="Home" />
        <section className="page-section bg-primary" id="about">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center">
                <h2 className="text-white mt-0">
                  From C-Suite to "boiler room".
                </h2>
                <hr className="divider light my-4" />
                <p className="text-white-50 mb-4">
                  Need project-saving triage in an IT deparment? Need
                  organizational and digital transformation to build a
                  competitive edge? In industries ranging from financial, health
                  care and retail, Brent Arias has the battle-hardened
                  experience to "turn the ship". As a hands-on Chief Architect
                  consultant, he maps out the technology and process while
                  engaging with key stakeholders and technical leads throughout implementation.
                </p>
                <a
                  className="btn btn-light btn-xl js-scroll-trigger"
                  href="#services"
                  onClick={Scroller.handleAnchorScroll}
                >
                  Get Started!
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="page-section" id="services">
          <div className="container">
            <h2 className="text-center mt-0">Services</h2>
            <hr className="divider my-4" />
            <div className="row">
              <div className="col-lg-3 col-md-6 text-center">
                <div className="mt-5">
                  <i className="fas fa-4x fa-cloud text-primary mb-4"></i>
                  <h3 className="h4 mb-2">Cloud Migration</h3>
                  <p className="text-muted mb-0">
                    Data center analysis and sizing, cost projections, tech
                    selection (e.g. serverless, SaaS, PaaS) and implementation.
                    BC/DR design and IaC.
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 text-center">
                <div className="mt-5">
                  <i className="fas fa-4x fa-tachometer-alt text-primary mb-4"></i>
                  <h3 className="h4 mb-2">Scaling and Perf</h3>
                  <p className="text-muted mb-0">
                    Elastic computation design, performance testing,
                    maintainable and expandable coding practices.
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 text-center">
                <div className="mt-5">
                  <i className="fas fa-4x fa-bolt text-primary mb-4"></i>
                  <h3 className="h4 mb-2">App Modernization</h3>
                  <p className="text-muted mb-0">
                    Code refactoring for containerization or PaaS. DB migration
                    to cloud native storage. Microservice design and
                    implementation.
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 text-center">
                <div className="mt-5">
                  <i className="fas fa-4x fa-database text-primary mb-4"></i>
                  <h3 className="h4 mb-2">Data Engineering</h3>
                  <p className="text-muted mb-0">
                    EAI, ODS and data lake design and build-out. Telemetry and
                    mass-scale, event-driven processing.
                  </p>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-3 col-md-6 text-center">
                <div className="mt-5">
                  <i className="fas fa-4x fa-lock text-primary mb-4"></i>
                  <h3 className="h4 mb-2">Security & Compliance</h3>
                  <p className="text-muted mb-0">
                    Security-by-design and privacy-by-design. IAM design and
                    configuration. SIEM/SOAR instrumentation. Encryption in
                    transit and at rest.
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 text-center">
                <div className="mt-5">
                  <i className="fas fa-4x fa-users-cog text-primary mb-4"></i>
                  <h3 className="h4 mb-2">Digital Transformation</h3>
                  <p className="text-muted mb-0">
                    Operations and business strategy re-invention.
                    Organizational alignment and education. Technology selection
                    and roll-out.
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 text-center">
                <div className="mt-5">
                  <i className="fas fa-4x fa-sync text-primary mb-4"></i>
                  <h3 className="h4 mb-2">CI/CD & Automation</h3>
                  <p className="text-muted mb-0">
                    Performance and test automation. Infrastructure as Code
                    (IaC). Pipeline as code. Ephemeral test environments.
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 text-center">
                <div className="mt-5">
                  <i className="fas fa-4x fa-globe-americas text-primary mb-4"></i>
                  <h3 className="h4 mb-2">Internationalization</h3>
                  <p className="text-muted mb-0">
                    Textual, temporal and numismatic guidance, tool selection
                    and implementation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="page-section bg-dark text-white" id="clients">
          <div className="container">
            <h2 className="text-center mt-0">AxisCode Clients</h2>
            <hr className="divider my-4" />
            <div className="row">
              <div className="col-lg-2 col-md-6 text-center">
                <div className="mt-5">
                  <i className="fab fa-4x fa-cc-amex text-primary mb-4"></i>
                  <h3 className="h4 mb-2">Amex</h3>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 text-center">
                <div className="mt-5">
                  <i className="fab fa-4x fa-microsoft text-primary mb-4"></i>
                  <h3 className="h4 mb-2">Microsoft</h3>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 text-center">
                <div className="mt-5">
                  <i className="fab fa-4x fa-font-awesome text-primary mb-4"></i>
                  <h3 className="h4 mb-2">Silicon Valley Bank</h3>
                </div>
              </div>              
              <div className="col-lg-2 col-md-6 text-center">
                <div className="mt-5">
                  <i className="fab fa-4x fa-font-awesome text-primary mb-4"></i>
                  <h3 className="h4 mb-2">Circle K</h3>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 text-center">
                <div className="mt-5">
                  <i className="fab fa-4x fa-font-awesome text-primary mb-4"></i>
                  <h3 className="h4 mb-2">Christian Care Ministry</h3>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 text-center">
                <div className="mt-5">
                  <i className="fab fa-4x fa-font-awesome text-primary mb-4"></i>
                  <h3 className="h4 mb-2">GameStop</h3>
                </div>
              </div>              
            </div>
          </div>
        </section>

        <section className="page-section" id="contact">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6 text-center">
                <h2 className="mt-0">Let's Get In Touch!</h2>
                <hr className="divider my-4" />
                <p className="text-muted mb-5">
                  Ready to start your next project with AxisCode? You can reach Brent Arias by phone
                  or e-mail.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 ml-auto text-center mb-5 mb-lg-0">
                <i className="fas fa-phone fa-3x mb-3 text-muted"></i>
                <div>+1 (602) 692-8088</div>
              </div>
              <div className="col-lg-4 mr-auto text-center">
                <i className="fas fa-envelope fa-3x mb-3 text-muted"></i>
                <a className="d-block" href="mailto:barias@axiscode.com">
                  barias@axiscode.com
                </a>
              </div>
            </div>
          </div>
        </section>
        <PortfolioModal
          show={this.state.modalShow}
          onHide={() => this.setModal(false, 0)}
        >
          <PortfolioCarousel
            images={this.props.data.images.edges}
            current={this.state.modalCurrent}
          />
        </PortfolioModal>
      </Layout>
    )
  }
}


export const imageData = graphql`
  query {
    images: allFile(filter: {relativePath: {glob: "portfolio/fullsize/*.jpg"}}, sort: {fields: name}) {
      edges {
        node {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    } 
  }
`
