import LogoApple from '@sourcegraph/icons/lib/LogoApple'
import LogoLinux from '@sourcegraph/icons/lib/LogoLinux'
import Save from '@sourcegraph/icons/lib/Save'
import Link from 'gatsby-link'
import * as React from 'react'

export default class DownloadCTA extends React.Component<any, any> {
    public render(): JSX.Element | null {
        return (
            <div>
                <div className="flex flex-column flex-row-l white center mw8 pt2 link">
                    <a
                        className="flex flex-column w-third-l"
                        href="https://sourcegraph-distro.appspot.com/latest/darwin/insider"
                    >
                        <div className="flex pa3 justify-between br2 bg-blue-7 mb3 mr3-l">
                            <div className="flex">
                                <div className="h2 w2 mr3 self-center">
                                    <span className="fill-light-12">
                                        <LogoApple />
                                    </span>
                                </div>
                                <div className="flex-column white">
                                    <div className="b">Mac</div>
                                    <div className="blue-3">MacOS 10.9+</div>
                                </div>
                            </div>
                            <div className="h2 w2 self-center ml2">
                                <span className="fill-blue-3">
                                    <Save />
                                </span>
                            </div>
                        </div>
                    </a>
                    <div className="flex flex-column w-third-l">
                        <a
                            className="flex bg-violet-7 mb3 pa3 br2 mr3-l justify-between"
                            href="https://sourcegraph-distro.appspot.com/latest/linux-deb-x64/insider"
                        >
                            <div className="flex">
                                <div className="h2 w2 mr3 self-center">
                                    <span className="fill-light-12">
                                        <LogoLinux />
                                    </span>
                                </div>
                                <div className="flex-column white">
                                    <div className="b">.deb</div>
                                    <div className="violet-3">Debian, Ubuntu</div>
                                </div>
                            </div>
                            <div className="h2 w2 self-center ml2">
                                <span className="fill-violet-3">
                                    <Save />
                                </span>
                            </div>
                        </a>
                        {/* <div className="mb3 blue center">
                    <div className="mt2">.zip | 32-bit version</div>
                </div> */}
                    </div>
                    <div className="flex flex-column w-third-l">
                        <a
                            className="flex pa3 br2 bg-grape-7 mr3-l justify-between"
                            href="https://sourcegraph-distro.appspot.com/latest/linux-rpm-x64/insider"
                        >
                            <div className="flex">
                                <div className="h2 w2 mr3 self-center">
                                    <span className="fill-light-12">
                                        <LogoLinux />
                                    </span>
                                </div>
                                <div className="flex-column white">
                                    <div className="b">.rpm</div>
                                    <div className="grape-3">Red Hat, Fedora, SUSE</div>
                                </div>
                            </div>
                            <div className="h2 w2 self-center ml2">
                                <span className="fill-grape-3">
                                    <Save />
                                </span>
                            </div>
                        </a>
                        {/* <div className="mb3 blue center">
                    <div className="mt2">.zip | 32-bit version</div>
                </div> */}
                    </div>
                </div>
                <div className="mt4 tc">
                    By downloading Sourcegraph you agree to the license terms and privacy statement.
                </div>
            </div>
        )
    }
}
