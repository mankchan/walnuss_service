import React from "react";
import classes from "./UserExperience.module.css";
import {AkarIconsPeopleGroupIcon} from "./assets/AkarIconsPeopleGroupIcon";
import {AkarIconsChatBubbleIcon} from "./assets/AkarIconsChatBubbleIcon";
import {BxUpvoteIcon} from "./assets/BxUpvoteIcon";
import {IcBaselineGeneratingTokensIcon} from "./assets/IcBaselineGeneratingTokensIcon";
import {BxsUpvoteIcon} from "./assets/BxsUpvoteIcon";

export class FrameRightSide extends React.Component {
    render() {
        return <div className={classes.frameRightSide}>
            <div className={classes.frameAbout}>
                <div className={classes.frameAbout1}>
                    <div className={classes.about}>About</div>
                    <div className={classes.frameAbout2}>
                        <div className={classes.frameAboutEntry}>
                            <div className={classes.akarIconsPeopleGroup}>
                                <AkarIconsPeopleGroupIcon className={classes.icon}/>
                            </div>
                            <div className={classes._246Experts}>246 Experts</div>
                        </div>
                        <div className={classes.frameAboutEntry}>
                            <div className={classes.akarIconsChatBubble}>
                                <AkarIconsChatBubbleIcon className={classes.icon}/>
                            </div>
                            <div className={classes._100kQuestionsAndAnswers}>100k Questions and Answers</div>
                        </div>
                        <div className={classes.frameAboutEntry}>
                            <div className={classes.bxUpvote}>
                                <BxUpvoteIcon className={classes.icon}/>
                            </div>
                            <div className={classes._50kUpvotes}>50k Upvotes</div>
                        </div>
                        <div className={classes.frameAboutEntry}>
                            <div className={classes.icBaselineGeneratingTokens}>
                                <IcBaselineGeneratingTokensIcon className={classes.icon}/>
                            </div>
                            <div className={classes._145TokensAwarded}>145 Tokens Awarded</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.frameExperts}>
                <div className={classes.topExperts}>Top Experts</div>

                <div className={classes.frameUser}>
                    <div className={classes.avatar_portrait1}></div>
                    <div className={classes.frameUserFormat1}>
                        <div className={classes.pseudoNearExpert}>Pseudo Near Expert</div>
                        <div className={classes.frameUserFormat2}>
                            <div className={classes.frameUserFormat3}>
                                <div className={classes.numUpvotes}>95</div>
                                <BxsUpvoteIcon className={classes.bxsUpvote}/>
                            </div>
                            <div className={classes.collected}>collected</div>
                        </div>
                    </div>
                </div>

                <div className={classes.frameUser}>
                    <div className={classes.avatar_portrait1}></div>
                    <div className={classes.frameUserFormat1}>
                        <div className={classes.pseudoNearExpert}>Near Expert</div>
                        <div className={classes.frameUserFormat2}>
                            <div className={classes.frameUserFormat3}>
                                <div className={classes.numUpvotes}>95</div>
                                <BxsUpvoteIcon className={classes.bxsUpvote}/>
                            </div>
                            <div className={classes.collected}>collected</div>
                        </div>
                    </div>
                </div>

                <div className={classes.frameUser}>
                    <div className={classes.avatar_portrait1}></div>
                    <div className={classes.frameUserFormat1}>
                        <div className={classes.pseudoNearExpert}>Bitcoin Maxi</div>
                        <div className={classes.frameUserFormat2}>
                            <div className={classes.frameUserFormat3}>
                                <div className={classes.numUpvotes}>95</div>
                                <BxsUpvoteIcon className={classes.bxsUpvote}/>
                            </div>
                            <div className={classes.collected}>collected</div>
                        </div>
                    </div>
                </div>

                <div className={classes.frameUser}>
                    <div className={classes.avatar_portrait1}></div>
                    <div className={classes.frameUserFormat1}>
                        <div className={classes.pseudoNearExpert}>Ethereum Maxi</div>
                        <div className={classes.frameUserFormat2}>
                            <div className={classes.frameUserFormat3}>
                                <div className={classes.numUpvotes}>95</div>
                                <BxsUpvoteIcon className={classes.bxsUpvote}/>
                            </div>
                            <div className={classes.collected}>collected</div>
                        </div>
                    </div>
                </div>

                <div className={classes.frameUser}>
                    <div className={classes.avatar_portrait1}></div>
                    <div className={classes.frameUserFormat1}>
                        <div className={classes.pseudoNearExpert}>Polkadot Maxi</div>
                        <div className={classes.frameUserFormat2}>
                            <div className={classes.frameUserFormat3}>
                                <div className={classes.numUpvotes}>95</div>
                                <BxsUpvoteIcon className={classes.bxsUpvote}/>
                            </div>
                            <div className={classes.collected}>collected</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>;
    }
}