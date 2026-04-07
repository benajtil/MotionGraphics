import React from "react";
import { COLORS, FONTS } from "../styles/theme";

export const TitleBlock = ({
    eyebrow,
    title,
    subtitle,
    align = "left",
    maxWidth = 860,
    style = {},
    titleSize = 104,
}) => {
    return (
        <div
            style={{
                position: "absolute",
                maxWidth,
                textAlign: align,
                ...style,
            }}
        >
            {eyebrow ? (
                <div
                    style={{
                        fontFamily: FONTS.body,
                        letterSpacing: "0.34em",
                        textTransform: "uppercase",
                        color: COLORS.primary,
                        fontSize: 22,
                        fontWeight: 700,
                        marginBottom: 18,
                    }}
                >
                    {eyebrow}
                </div>
            ) : null}

            <div
                style={{
                    fontFamily: FONTS.display,
                    fontWeight: 800,
                    textTransform: "uppercase",
                    letterSpacing: "0.02em",
                    lineHeight: 0.93,
                    fontSize: titleSize,
                    color: COLORS.text,
                    textShadow: "0 12px 30px rgba(0,0,0,0.30)",
                    whiteSpace: "pre-line",
                }}
            >
                {title}
            </div>

            {subtitle ? (
                <div
                    style={{
                        marginTop: 24,
                        fontSize: 30,
                        lineHeight: 1.35,
                        color: COLORS.muted,
                        maxWidth: maxWidth - 80,
                    }}
                >
                    {subtitle}
                </div>
            ) : null}
        </div>
    );
};