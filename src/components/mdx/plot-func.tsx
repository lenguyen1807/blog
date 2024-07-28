"use client"

import functionPlot from "function-plot";
import { useEffect, memo, useRef } from "react";

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

// ref: https://github.com/mauriciopoppe/function-plot/issues/278
const MdxPlotFunc = memo(({
    id, fn, width, height, xrange, yrange, xlabel, ylabel
} : PlotFuncProps) => {
    const ref = useRef(null);
    useEffect(() => {
        try {
            functionPlot({
                target: ref.current,
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
        <div ref={ref} className="lg:block hidden"/>
    )
}, () => false);

MdxPlotFunc.displayName = 'MdxPlotFunc';

export default MdxPlotFunc;