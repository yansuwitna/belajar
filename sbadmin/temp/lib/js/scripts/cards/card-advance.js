"use strict";
function enterChat(a) {
  var e = $(".message").val();
  if (/\S/.test(e)) {
    var o = '<div class="chat-content"><p>' + e + "</p></div>";
    $(".chat:last-child .chat-body").append(o),
      $(".message").val(""),
      $(".user-chats").scrollTop($(".user-chats > .chats").height());
  }
}
$(window).on("load", function () {
  var a,
    e,
    o,
    r,
    t,
    s,
    l,
    i,
    d,
    n,
    h,
    w = "#e9ecef",
    c = document.querySelector(".employee-task-chart-primary-1"),
    p = document.querySelector(".employee-task-chart-danger"),
    g = document.querySelector(".employee-task-chart-success"),
    u = document.querySelector(".employee-task-chart-secondary"),
    y = document.querySelector(".employee-task-chart-warning"),
    m = document.querySelector(".employee-task-chart-primary-2"),
    k = document.querySelector(".state-chart-primary"),
    b = document.querySelector(".state-chart-warning"),
    C = document.querySelector(".state-chart-secondary"),
    B = document.querySelector(".state-chart-info"),
    O = document.querySelector(".state-chart-danger"),
    f = $(".user-chats");
  if ($.app.menu.is_touch_device()) f.css("overflow", "scroll");
  else if (f.length > 0) new PerfectScrollbar(f[0], { wheelPropagation: !1 });
  (a = {
    chart: { height: 30, width: 30, type: "radialBar" },
    grid: {
      show: !1,
      padding: { left: -15, right: -15, top: -12, bottom: -15 },
    },
    colors: [window.colors.solid.primary],
    series: [45],
    plotOptions: {
      radialBar: {
        hollow: { size: "22%" },
        track: { background: w },
        dataLabels: {
          showOn: "always",
          name: { show: !1 },
          value: { show: !1 },
        },
      },
    },
    stroke: { lineCap: "round" },
  }),
    new ApexCharts(c, a).render(),
    (e = {
      chart: { height: 30, width: 30, type: "radialBar" },
      grid: {
        show: !1,
        padding: { left: -15, right: -15, top: -12, bottom: -15 },
      },
      colors: [window.colors.solid.danger],
      series: [65],
      plotOptions: {
        radialBar: {
          hollow: { size: "22%" },
          track: { background: w },
          dataLabels: {
            showOn: "always",
            name: { show: !1 },
            value: { show: !1 },
          },
        },
      },
      stroke: { lineCap: "round" },
    }),
    new ApexCharts(p, e).render(),
    (o = {
      chart: { height: 30, width: 30, type: "radialBar" },
      grid: {
        show: !1,
        padding: { left: -15, right: -15, top: -12, bottom: -15 },
      },
      colors: [window.colors.solid.success],
      series: [60],
      plotOptions: {
        radialBar: {
          hollow: { size: "22%" },
          track: { background: w },
          dataLabels: {
            showOn: "always",
            name: { show: !1 },
            value: { show: !1 },
          },
        },
      },
      stroke: { lineCap: "round" },
    }),
    new ApexCharts(g, o).render(),
    (r = {
      chart: { height: 30, width: 30, type: "radialBar" },
      grid: {
        show: !1,
        padding: { left: -15, right: -15, top: -12, bottom: -15 },
      },
      colors: [window.colors.solid.secondary],
      series: [35],
      plotOptions: {
        radialBar: {
          hollow: { size: "22%" },
          track: { background: w },
          dataLabels: {
            showOn: "always",
            name: { show: !1 },
            value: { show: !1 },
          },
        },
      },
      stroke: { lineCap: "round" },
    }),
    new ApexCharts(u, r).render(),
    (t = {
      chart: { height: 30, width: 30, type: "radialBar" },
      grid: {
        show: !1,
        padding: { left: -15, right: -15, top: -12, bottom: -15 },
      },
      colors: [window.colors.solid.warning],
      series: [65],
      plotOptions: {
        radialBar: {
          hollow: { size: "22%" },
          track: { background: w },
          dataLabels: {
            showOn: "always",
            name: { show: !1 },
            value: { show: !1 },
          },
        },
      },
      stroke: { lineCap: "round" },
    }),
    new ApexCharts(y, t).render(),
    (s = {
      chart: { height: 30, width: 30, type: "radialBar" },
      grid: {
        show: !1,
        padding: { left: -15, right: -15, top: -12, bottom: -15 },
      },
      colors: [window.colors.solid.primary],
      series: [80],
      plotOptions: {
        radialBar: {
          hollow: { size: "22%" },
          track: { background: w },
          dataLabels: {
            showOn: "always",
            name: { show: !1 },
            value: { show: !1 },
          },
        },
      },
      stroke: { lineCap: "round" },
    }),
    new ApexCharts(m, s).render(),
    (l = {
      chart: { height: 30, width: 30, type: "radialBar" },
      grid: {
        show: !1,
        padding: { left: -15, right: -15, top: -12, bottom: -15 },
      },
      colors: [window.colors.solid.primary],
      series: [54.4],
      plotOptions: {
        radialBar: {
          hollow: { size: "22%" },
          track: { background: w },
          dataLabels: {
            showOn: "always",
            name: { show: !1 },
            value: { show: !1 },
          },
        },
      },
      stroke: { lineCap: "round" },
    }),
    new ApexCharts(k, l).render(),
    (i = {
      chart: { height: 30, width: 30, type: "radialBar" },
      grid: {
        show: !1,
        padding: { left: -15, right: -15, top: -12, bottom: -15 },
      },
      colors: [window.colors.solid.warning],
      series: [6.1],
      plotOptions: {
        radialBar: {
          hollow: { size: "22%" },
          track: { background: w },
          dataLabels: {
            showOn: "always",
            name: { show: !1 },
            value: { show: !1 },
          },
        },
      },
      stroke: { lineCap: "round" },
    }),
    new ApexCharts(b, i).render(),
    (d = {
      chart: { height: 30, width: 30, type: "radialBar" },
      grid: {
        show: !1,
        padding: { left: -15, right: -15, top: -12, bottom: -15 },
      },
      colors: [window.colors.solid.secondary],
      series: [14.6],
      plotOptions: {
        radialBar: {
          hollow: { size: "22%" },
          track: { background: w },
          dataLabels: {
            showOn: "always",
            name: { show: !1 },
            value: { show: !1 },
          },
        },
      },
      stroke: { lineCap: "round" },
    }),
    new ApexCharts(C, d).render(),
    (n = {
      chart: { height: 30, width: 30, type: "radialBar" },
      grid: {
        show: !1,
        padding: { left: -15, right: -15, top: -12, bottom: -15 },
      },
      colors: [window.colors.solid.info],
      series: [4.2],
      plotOptions: {
        radialBar: {
          hollow: { size: "22%" },
          track: { background: w },
          dataLabels: {
            showOn: "always",
            name: { show: !1 },
            value: { show: !1 },
          },
        },
      },
      stroke: { lineCap: "round" },
    }),
    new ApexCharts(B, n).render(),
    (h = {
      chart: { height: 30, width: 30, type: "radialBar" },
      grid: {
        show: !1,
        padding: { left: -15, right: -15, top: -12, bottom: -15 },
      },
      colors: [window.colors.solid.danger],
      series: [8.4],
      plotOptions: {
        radialBar: {
          hollow: { size: "22%" },
          track: { background: w },
          dataLabels: {
            showOn: "always",
            name: { show: !1 },
            value: { show: !1 },
          },
        },
      },
      stroke: { lineCap: "round" },
    }),
    new ApexCharts(O, h).render();
});
