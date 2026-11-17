import{Xi as e,n as t}from"./use-container-breakpoints-BRQtTkid.js";import{_ as n,a as r,i,r as a}from"./templates-B-af1_qX.js";import{n as o,t as s}from"./area-chart-APnMbtVx.js";import{t as c}from"./code-snippet-LJ3EpSCb.js";var l=e(),u=(0,l.jsxs)(n,{size:`s`,children:[(0,l.jsx)(t,{variant:`span`,children:`In the old area chart the tooltip features a total value row. In the new area chart the total row can be added as a custom tooltip footer, but it is not available by default.`}),(0,l.jsx)(c,{content:`let areaChart = (
  <CartesianChart
    tooltip={{
      footer(detail) {
        return (
          <div style={{ display: "flex", justifyContent: "space-between", gap: "16px" }}>
            <span>Total</span>
            <span>{numberFormatter(detail.items.reduce((sum, item) => sum + (item.y ?? 0), 0))}</span>
          </div>
        );
      },
    }}
    {...otherChartProps}
  />
);`})]});function d(){return(0,l.jsx)(i,{title:`Migration: Area charts`,children:(0,l.jsx)(r,{docs:{implementation:{bullets:[{content:u}]}},children:(0,l.jsx)(a,{examples:[{old:(0,l.jsx)(o,{hideFilter:!0}),new:(0,l.jsx)(s,{}),containerHeight:450}]})})})}export{d as default};
//# sourceMappingURL=cartesian-chart-type-area.page-wDNTdtE4.js.map