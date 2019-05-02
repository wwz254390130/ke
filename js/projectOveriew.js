$(function(){
  var  mountData =[{
    item: '已完成',
    count: 70,
    percent: 0.7
  }, {
    item: '进行中',
    count: 10,
    percent: 0.10
  }, {
    item: '已关闭',
    count: 20,
    percent: 0.20
  }];
  
  var chart = new G2.Chart({
    container: 'mountNode',
    forceFit: true,
    width:450,
    height:300,
  });
  chart.source(this.mountData, {
    percent: {
      formatter: function formatter(val) {
        val = val * 100 + '%';
        return val;
      }
    }
  });
  chart.coord('theta', {
    radius: 1,
    innerRadius: 0.6
  });
  chart.tooltip({
    showTitle: false,
    itemTpl: '<li><span style="background-color:{color};" class="g2-tooltip-marker"></span>{name}: {value}</li>'
  });
  // hart.tooltip(false)
   
  // 辅助文本
  chart.guide().html({
    position: ['50%', '50%'],
    html: '<div style="color:#8c8c8c;font-size: 14px;text-align: center;width: 10em;">主机<br><span style="color:#8c8c8c;font-size:20px">200</span>台</div>',
    alignX: 'middle',
    alignY: 'middle'
  });
  // var interval = chart.intervalStack().position('percent').color('item',['#88da76','#cf2929','#f4a300']).label('percent', {
  //   formatter: function formatter(val, item) {
  //     return item.point.item + ': ' + val;
  //   }
  // }).style({
  //   lineWidth: 1,
  //   stroke: '#fff'
  // });
  chart.render();
      
})