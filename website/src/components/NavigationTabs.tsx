import Link from 'gatsby-link'
import { CityIcon, FormatListNumbersIcon, MagnifyIcon, PowerPlugIcon, TelevisionGuideIcon, WebIcon } from 'mdi-react'
import * as React from 'react'
import { eventLogger } from '../EventLogger'

interface TabsProps {
    activeTab: string
}
export default class NavigationTabs extends React.Component<any, any> {
    constructor(props: any) {
        super(props)
    }

    public render(): JSX.Element | null {
        return (
            <div className="container">
                <div className="row">
                    <ul className="nav nav-tabs col" style={{ backgroundColor: '#f2f4f8' }}>
                        <div className="nav-item">
                            <Link
                                className={`nav-link ${this.props.activeTab === 'Server' ? 'active' : ''}`}
                                to="/docs"
                                onClick={this.serverTabClicked}
                            >
                                <WebIcon className="material-icons" />
                                Sourcegraph
                                <span />
                            </Link>
                        </div>
                        <div className="nav-item">
                            <Link
                                className={`nav-link ${this.props.activeTab === 'DataCenter' ? 'active' : ''}`}
                                to="/docs/datacenter"
                                onClick={this.dataCenterTabClicked}
                            >
                                <CityIcon className="material-icons" />
                                Data Center
                                <span />
                            </Link>
                        </div>
                        <div className="nav-item">
                            <Link
                                className={`nav-link ${this.props.activeTab === 'Integrations' ? 'active' : ''}`}
                                to="/docs/integrations"
                                onClick={this.integrationsTabClicked}
                            >
                                <PowerPlugIcon className="material-icons" />
                                Integrations
                                <span />
                            </Link>
                        </div>
                    </ul>
                    {/* <div className="nav-item buttons">
                        <Link className="docs-nav-button" to="/changelog" onClick={this.changelogButtonClicked}>
                         Changelog
                        </Link>
                    </div> */}
                </div>
            </div>
        )
    }

    private serverTabClicked = () => {
        eventLogger.trackDocsServerTabClicked()
    }
    private dataCenterTabClicked = () => {
        eventLogger.trackDocsDataCenterTabClicked()
    }
    private integrationsTabClicked = () => {
        eventLogger.trackDocsIntegrationsTabClicked()
    }
    private changelogButtonClicked = () => {
        eventLogger.trackChangelogClicked('docs-navbar')
    }
}
