import Link from 'gatsby-link'
import { ChevronRightIcon } from 'mdi-react'
import * as React from 'react'
import Helmet from 'react-helmet'
import { eventLogger } from '../EventLogger'

export default class Pricing extends React.Component<any, any> {
    public render(): JSX.Element | null {
        return (
            <div>
                <Helmet>
                    <title>Sourcegraph - Pricing</title>
                    <meta name="twitter:title" content="Sourcegraph - Pricing" />
                    <meta property="og:title" content="Sourcegraph - Pricing" />
                    <meta
                        name="twitter:description"
                        content="Sourcegraph is always free for public and open-source code. Start using it for private code with a paid plan."
                    />
                    <meta
                        property="og:description"
                        content="Sourcegraph is always free for public and open-source code. Start using it for private code with a paid plan."
                    />
                    <meta
                        name="description"
                        content="Sourcegraph is always free for public and open-source code. Start using it for private code with a paid plan."
                    />
                    <link rel="icon" type="image/png" href="https://about.sourcegraph.com/favicon.png" />
                </Helmet>
                <div>
                    <div className="pricing">
                        <div className="hero-section">
                            <div className="container">
                                <div className="row">
                                    <div className="col-12">
                                        <h1>Sourcegraph Pricing</h1>
                                        <p>
                                            Sourcegraph is a fast code navigation engine. Get code intelligence and code
                                            search; ready to use for teams of all sizes. We believe code intelligence
                                            can help bring the future sooner, and you can get started, right away, by
                                            setting up Sourcegraph for free.
                                        </p>
                                        <a
                                            className="btn btn-secondary btn-lg"
                                            role="button"
                                            href="/docs"
                                            onClick={this.trackInstallSourcegraphServerClicked}
                                        >
                                            Download Sourcegraph
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-6 lg-12">
                                    <div className="pricing__card card card-body">
                                        <div className="pricing__card-list">
                                            <div className="pricing__card-list-heading">
                                                <h2>Grow your deployment.</h2>
                                                <h1>Team</h1>
                                            </div>
                                            <div className="row">
                                                <div className="col-7 features">
                                                    <p>SSO</p>
                                                    <p>Advanced Code Intelligence</p>
                                                    <p>Deploy via G Suite</p>
                                                    <p>Specialized Support</p>
                                                    <p>&nbsp;</p>
                                                </div>
                                                <div className="col-5 md-12 contact">
                                                    <h3>$49</h3>
                                                    <p>
                                                        <small>/USER/YEAR</small>
                                                    </p>
                                                    <a
                                                        className="btn btn-pricing btn-lg justify-content-center text-center"
                                                        role="button"
                                                        href="/contact/sales"
                                                        onClick={this.trackInstallSourcegraphServerClicked}
                                                    >
                                                        Contact Us
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 lg-12">
                                    <div className="pricing__card card card-body">
                                        <div className="pricing__card-list">
                                            <div className="pricing__card-list-heading">
                                                <h2>Power your company.</h2>
                                                <h1>Enterprise</h1>
                                            </div>
                                            <div className="row">
                                                <div className="col-7 features">
                                                    <p>Internal–Only Extensions</p>
                                                    {/* <p>Advanced SSO with Groups and ACLs</p> */}
                                                    <p>Advanced SSO</p>
                                                    <p>High-Availability Cluster</p>
                                                    <p>Backup and Recovery </p>
                                                    <p>Premium Support with Custom SLA</p>
                                                </div>
                                                <div className="col-5 md-12 contact">
                                                    <h3>
                                                        <nobr>$199</nobr>
                                                    </h3>
                                                    <p>
                                                        <small>/USER/YEAR</small>
                                                    </p>
                                                    <a
                                                        className="btn btn-pricing btn-lg justify-content-center text-center"
                                                        role="button"
                                                        href="/contact/sales"
                                                        onClick={this.trackInstallSourcegraphServerClicked}
                                                    >
                                                        Contact Us
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    private trackInstallSourcegraphServerClicked = () => {
        eventLogger.trackContactUsCTAClicked('ContactUs')
    }
    private trackContactUsClickedButton = () => {
        eventLogger.trackContactUsCTAClicked('ContactUsButton')
    }
}
