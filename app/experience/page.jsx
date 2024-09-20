"use client"

import { Fragment } from "react"
import { VerticalTimeline } from 'react-vertical-timeline-component';

import TimelineElement from "@/components/common/TimelineElement";
import { EXPERIENCE_DATA } from "@/lib/data";

const Experience = () => {
    return (
        <Fragment>
            <VerticalTimeline layout="2-columns">
                {EXPERIENCE_DATA.map((item, key) => {
                    return (
                        <TimelineElement
                            key={key}
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: item.bgColor, color: '#fff', opacity: 0.7 }}
                            contentArrowStyle={{ borderRight: '7px solid ' + item.bgColor }}
                            date={item.date}
                            iconStyle={{ background: item.bgColor, color: '#fff' }}
                            icon={item.icon}
                        >
                            <h3 className="vertical-timeline-element-title">{item.title}</h3>
                            <h4 className="vertical-timeline-element-subtitle text-sm">{item.subtitle}</h4>
                            <div className="text-sm">
                                {item.description}
                            </div>
                        </TimelineElement>
                    )
                })}
            </VerticalTimeline>
        </Fragment>
    )
}

export default Experience