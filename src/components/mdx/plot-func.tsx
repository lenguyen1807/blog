"use client"

import functionPlot from "function-plot";
import { useEffect } from "react";

interface PlotFuncProps {
    id: string,
    fn: string,
    width?: number,
    height?: number
    xrange?: number[],
    yrange?: number[],
    xlabel?: string,
    ylabel?: string,
}

export default function MdxPlotFunc({
    id, fn, width, height, xrange, yrange, xlabel, ylabel
} : PlotFuncProps) {

    // f**k my life: https://github.com/mauriciopoppe/function-plot/issues/278

    useEffect(() => {
        try {
            functionPlot({
                target: `#${id}`,
                width: width === undefined ? 700 : width,
                height: height === undefined ? 300 : height,
                data: [{
                    fn: fn
                }],
                yAxis: {
                    label: ylabel === undefined ? "y" : ylabel,
                    domain: yrange === undefined ? [0, 10] : yrange
                },
                xAxis: {
                    label: xlabel === undefined ? "x" : xlabel,
                    domain: xrange === undefined ? [0, 10] : xrange
                },
                disableZoom: true,
                grid: true
            })
        } catch (e) {}
    }, [id, fn, width, height, xrange, yrange, xlabel, ylabel])

    return (
        <div id={id} className="lg:block hidden"/>
    )
}