import{r as e}from"./rolldown-runtime-XKyaHtl9.js";import{Xi as t,n}from"./use-container-breakpoints-BRQtTkid.js";import{t as r}from"./cartesian-chart-U6gl1hxH.js";import{t as i}from"./highcharts-B2CaJckU.js";import{t as a}from"./accessibility-pBPNneLf.js";import{_ as o,a as s,i as c,r as l}from"./templates-B-af1_qX.js";import"./components-QtsH93vQ.js";import{r as u}from"./formatters-BV3m_7LW.js";import{t as d}from"./code-snippet-LJ3EpSCb.js";import{t as f}from"./mixed-line-bar-chart-CGFPc9xK.js";var p=e(i());a();var m=t(),h={series:[],ariaLabel:`Demo chart`,height:100,fitHeight:!0,hideFilter:!0,hideLegend:!0,xTitle:`X axis title`,yTitle:`Y axis title`},g={highcharts:p.default,series:[],ariaLabel:`Demo chart`,chartMinHeight:100,fitHeight:!0,legend:{enabled:!1},xAxis:{title:`X axis title`},yAxis:{title:`Y axis title`}};function _(){return(0,m.jsxs)(c,{title:`Migration: Axes and scales`,children:[(0,m.jsx)(s,{title:`Vertical axis title`}),(0,m.jsx)(s,{title:`Axes labels`,docs:{functional:{before:(0,m.jsxs)(n,{children:[`In the old charts, the vertical axis (usually Y-axis) title is on the chart's top. In the new charts, the label can be also displayed along the axis line (controlled with`,` `,(0,m.jsx)(n,{variant:`code`,children:`verticalAxisTitlePlacement`}),` property).`]})}},children:(0,m.jsx)(l,{examples:[{tags:[`y-axis title on top`],old:(0,m.jsx)(f,{...h,series:[{title:`S1`,type:`line`,data:[{x:0,y:1e4},{x:1,y:1e5}]}],xTickFormatter:u,yTickFormatter:u}),new:(0,m.jsx)(r,{...g,series:[{name:`S1`,type:`line`,data:[{x:0,y:1e4},{x:1,y:1e5}]}],xAxis:{...g.xAxis,valueFormatter:u},yAxis:{...g.yAxis,valueFormatter:u},verticalAxisTitlePlacement:`top`}),containerHeight:200},{tags:[`y-axis title on side`],old:null,new:(0,m.jsx)(r,{...g,series:[{name:`S1`,type:`line`,data:[{x:0,y:1e4},{x:1,y:1e5}]}],xAxis:{...g.xAxis,valueFormatter:u},yAxis:{...g.yAxis,valueFormatter:u},verticalAxisTitlePlacement:`side`}),containerHeight:200}]})}),(0,m.jsx)(s,{title:`Axes domain`,docs:{implementation:{before:(0,m.jsxs)(o,{size:`s`,children:[(0,m.jsxs)(n,{children:[`In the new charts the axes domain is set with `,(0,m.jsx)(n,{variant:`code`,children:`min`}),`,`,` `,(0,m.jsx)(n,{variant:`code`,children:`max`}),` on the corresponding axis. It is recommended to use`,` `,(0,m.jsx)(n,{variant:`code`,children:`tickInterval`}),` to improve ticks distribution.`]}),(0,m.jsx)(d,{content:`let oldChart = (
  <LineChart
    {...restProps}
    series={[
      {
        title: "S1",
        type: "line",
        data: [
          { x: 0, y: 0 },
          { x: 90_000, y: 90_000 },
        ],
      },
    ]}
    xTitle="X axis title"
    xDomain={[0, 80_000]}
    yTitle="Y axis title"
    yDomain={[0, 80_000]}
  />
);

let newChart = (
  <CartesianChart
    {...restProps}
    series={[
      {
        name: "S1",
        type: "line",
        data: [
          { x: 0, y: 0 },
          { x: 90_000, y: 90_000 },
        ],
      },
    ]}
    xAxis={{ title: 'X axis title', min: 0, max: 80_000 }}
    yAxis={{ title: 'Y axis title', min: 0, max: 80_000, tickInterval: 20_000 }}
  />
);`})]})}},children:(0,m.jsx)(l,{examples:[{tags:[],old:(0,m.jsx)(f,{...h,series:[{title:`S1`,type:`line`,data:[{x:0,y:0},{x:9e4,y:9e4}]}],xDomain:[0,8e4],yDomain:[0,8e4],xTickFormatter:u,yTickFormatter:u}),new:(0,m.jsx)(r,{...g,series:[{name:`S1`,type:`line`,data:[{x:0,y:0},{x:9e4,y:9e4}]}],xAxis:{...g.xAxis,min:0,max:8e4},yAxis:{...g.yAxis,min:0,max:8e4,tickInterval:2e4}}),containerHeight:200}]})}),(0,m.jsx)(s,{title:`Long labels and titles`,docs:{implementation:{before:(0,m.jsxs)(o,{size:`s`,children:[(0,m.jsxs)(n,{children:[`In both old and new charts charts the labels can be made multi-line by inserting `,`"\\n"`,` between formatted parts.`]}),(0,m.jsx)(d,{content:`let oldChart = (
  <LineChart
    {...restProps}
    xTickFormatter={(value) => \`\${value}\\nitem label\`}
    yTickFormatter={(value) => \`\${value}\\nitem label\`}
  />
);
        
let newChart = (
  <CartesianChart
    {...restProps}
    xAxis={{
      ...xAxisProps,
      valueFormatter: (value) => \`\${value}\\nitem label\`,
    }}
    yAxis={{
      ...yAxisProps,
      valueFormatter: (value) => \`\${value}\\nitem label\`,
    }}
  />
);`})]})}},children:(0,m.jsx)(l,{examples:[{tags:[],old:(0,m.jsx)(f,{...h,series:[{title:`S1`,type:`line`,data:[{x:0,y:0},{x:9e4,y:9e4}]}],xTitle:`Very very very long X-axis title, that can wrap`,yTitle:`Very very very long Y-axis title, that can wrap`,xTickFormatter:e=>`${e}\nitem label`,yTickFormatter:e=>`${e}\nitem label`}),new:(0,m.jsx)(r,{...g,series:[{name:`S1`,type:`line`,data:[{x:0,y:0},{x:1e5,y:1e5}]}],xAxis:{title:`Very very very long X-axis title, that can wrap`,valueFormatter:e=>`${e}\nitem label`},yAxis:{title:`Very very very long Y-axis title, that can truncate`,valueFormatter:e=>`${e}\nitem label`},verticalAxisTitlePlacement:`top`}),containerHeight:220},{tags:[],old:null,new:(0,m.jsx)(r,{...g,series:[{name:`S1`,type:`line`,data:[{x:0,y:0},{x:1e5,y:1e5}]}],xAxis:{title:`Very very very long X-axis title, that can wrap`,valueFormatter:e=>`${e}\nitem label`},yAxis:{title:`Very very very long Y-axis title, that can wrap`,valueFormatter:e=>`${e}\nitem label`},verticalAxisTitlePlacement:`side`}),containerHeight:220}]})}),(0,m.jsx)(s,{title:`Axes formatters and datetime scale`,docs:{implementation:{bullets:[`The "time"-scaled axis of the old charts requires values of type Date. In the new charts the corresponding "datetime" scale
              only supports numeric dates representation. The "datetime" scale type is supported on either axis.`,`In the new charts there are default formatter for numeric and date-time values. In the old charts the formatters must be explicitly passed.`],after:(0,m.jsx)(d,{content:`let oldChart = (
  <LineChart
    {...restProps}
    series={[
      {
        title: "S1",
        type: "line",
        data: [
          { x: new Date("2020-01-01"), y: 10_000 },
          { x: new Date("2021-01-01"), y: 100_000 },
          { x: new Date("2022-01-01"), y: 1_000_000 },
          { x: new Date("2023-01-01"), y: 10_000_000 },
        ],
      },
    ]}
    xTitle: "X axis title"
    xScaleType="time"
    yTitle: "Y axis title"
    yScaleType="log"
  />
);
        
let newChart = (
  <CartesianChart
    {...restProps}
    series={[
      {
        name: "S1",
        type: "line",
        data: [
          { x: new Date("2020-01-01").getTime(), y: 10_000 },
          { x: new Date("2021-01-01").getTime(), y: 100_000 },
          { x: new Date("2022-01-01").getTime(), y: 1_000_000 },
          { x: new Date("2023-01-01").getTime(), y: 10_000_000 },
        ],
      },
    ]}
    xAxis={{ title: 'X axis title', type: "datetime" }}
    yAxis={{ title: 'Y axis title', type: "logarithmic" }}
  />
);`})}},children:(0,m.jsx)(l,{examples:[{tags:[],old:(0,m.jsx)(f,{...h,series:[{title:`S1`,type:`line`,data:[{x:new Date(`2020-01-01`),y:1e4},{x:new Date(`2021-01-01`),y:1e5},{x:new Date(`2022-01-01`),y:1e6},{x:new Date(`2023-01-01`),y:1e7}]}],xScaleType:`time`,yScaleType:`log`}),new:(0,m.jsx)(r,{...g,series:[{name:`S1`,type:`line`,data:[{x:new Date(`2020-01-01`).getTime(),y:1e4},{x:new Date(`2021-01-01`).getTime(),y:1e5},{x:new Date(`2022-01-01`).getTime(),y:1e6},{x:new Date(`2023-01-01`).getTime(),y:1e7}]}],xAxis:{...g.xAxis,type:`datetime`},yAxis:{...g.yAxis,type:`logarithmic`},verticalAxisTitlePlacement:`top`}),containerHeight:200}]})}),(0,m.jsx)(s,{title:`Category scale`,docs:{implementation:{bullets:[`In the old charts, the "categorical" scale can be used with numeric, string, or Date tick- and domain types.
              In the new charts, the categories can only be strings, while x values are always indices.`],after:(0,m.jsx)(d,{content:`let oldChart = (
  <LineChart
    {...restProps}
    series={[
      {
        title: "S1",
        type: "line",
        data: [
          { x: new Date("2020-01-01"), y: 10_000 },
          { x: new Date("2021-01-01"), y: 100_000 },
          { x: new Date("2022-01-01"), y: 1_000_000 },
          { x: new Date("2023-01-01"), y: 10_000_000 },
        ],
      },
    ]}
    xScaleType="categorical"
    xDomain={[
      new Date("2020-01-01"),
      new Date("2021-01-01"),
      new Date("2022-01-01"),
      new Date("2023-01-01"),
    ]}
    xTickFormatter={(x) => x.getFullYear()}
    yScaleType="log"
  />
);

let newChart = (
  <CartesianChart
    {...restProps}
    series={[
      {
        name: "S1",
        type: "line",
        data: [
          { x: 0, y: 10_000 },
          { x: 1, y: 100_000 },
          { x: 2, y: 1_000_000 },
          { x: 3, y: 10_000_000 },
        ],
      },
    ]}
    xAxis={{ ...xAxisProps, type: "category", categories: ["2020", "2021", "2022", "2023"] }}
    yAxis={{ ...yAxisProps, type: "logarithmic" }}
  />
);`})}},children:(0,m.jsx)(l,{examples:[{tags:[],old:(0,m.jsx)(f,{...h,series:[{title:`S1`,type:`line`,data:[{x:new Date(`2020-01-01`),y:1e4},{x:new Date(`2021-01-01`),y:1e5},{x:new Date(`2022-01-01`),y:1e6},{x:new Date(`2023-01-01`),y:1e7}]}],xScaleType:`categorical`,xDomain:[new Date(`2020-01-01`),new Date(`2021-01-01`),new Date(`2022-01-01`),new Date(`2023-01-01`)],xTickFormatter:e=>e.getFullYear(),yScaleType:`log`}),new:(0,m.jsx)(r,{...g,series:[{name:`S1`,type:`line`,data:[{x:0,y:1e4},{x:1,y:1e5},{x:2,y:1e6},{x:3,y:1e7}]}],xAxis:{...g.xAxis,type:`category`,categories:[`2020`,`2021`,`2022`,`2023`]},yAxis:{...g.yAxis,type:`logarithmic`},verticalAxisTitlePlacement:`top`}),containerHeight:200}]})})]})}export{_ as default};
//# sourceMappingURL=cartesian-chart-axes-and-scales.page-BYXCEQHi.js.map