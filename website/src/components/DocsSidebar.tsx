import Activity from '@sourcegraph/icons/lib/Activity'
import DatacenterIcon from '@sourcegraph/icons/lib/City'
import ComputerIcon from '@sourcegraph/icons/lib/Computer'
import DocumentIcon from '@sourcegraph/icons/lib/Document'
import GearIcon from '@sourcegraph/icons/lib/Gear'
import GlobeIcon from '@sourcegraph/icons/lib/Globe'
import ListIcon from '@sourcegraph/icons/lib/List'
import SearchIcon from '@sourcegraph/icons/lib/Search'
import ServerIcon from '@sourcegraph/icons/lib/Server'
import SignOutIcon from '@sourcegraph/icons/lib/SignOut'
import Link from 'gatsby-link'
import { MagnifyIcon } from 'mdi-react'
import * as React from 'react'
import DocsSidebarItem from './DocsSidebarItem'

interface SidebarItemDetails {
    title: string
    href?: string
    header?: boolean
    child?: boolean
    neverHighlight?: boolean
}

interface SidebarProps {
    items: SidebarItemDetails[]
    tutorialsItems?: SidebarItemDetails[]
    changeSidebar?: () => void
}
/**
 * Sidebar for docs pages
 */
export default class DocsSidebar extends React.Component<SidebarProps, any> {
    public render(): JSX.Element | null {
        return (
            <div className="sidebar">
                <div className="list-group">
                    <div className="tab-pane">
                        <div className="d-flex align-items-center doc-search">
                            <input type="text" id="algolia" placeholder="Search…" />
                            <MagnifyIcon className="material-icons" />
                        </div>
                        <div className="list-group">
                            {this.props.items.map((item, i) => (
                                <DocsSidebarItem
                                    key={i}
                                    title={item.title}
                                    href={item.href}
                                    header={item.header}
                                    child={item.child}
                                    neverHighlight={item.neverHighlight}
                                    changeSidebar={this.props.changeSidebar}
                                />
                            ))}
                        </div>
                        {this.props.tutorialsItems && (
                            <div className="list-group" style={{ marginTop: '1rem' }}>
                                <button className="sidebar__item sidebar__item-action list-group-item list-group-item-action disabled parent">
                                    <span>Tutorials</span>
                                </button>

                                {this.props.tutorialsItems.map((item, i) => (
                                    <DocsSidebarItem
                                        key={i}
                                        title={item.title}
                                        href={item.href}
                                        header={item.header}
                                        child={item.child}
                                        neverHighlight={item.neverHighlight}
                                        changeSidebar={this.props.changeSidebar}
                                    />
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        )
    }
}
