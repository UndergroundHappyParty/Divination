 // 获取每月总天数
 function getAllDaysOfMonth(year,month) {
  return new Date(year,month,0).getDate();
}
// 获取每月第一天是星期几
function getFirstDayOfMonth(year,month) {
  return new Date(year, month - 1, 1).getDay();
}
// 创建日历列表
function creatDateList(year,month) {
  let dateList = []
  let firstDay = getFirstDayOfMonth(year, month)
  let lastDay = getAllDaysOfMonth(year, month - 1)

  for (let i = 0; i < firstDay; i++) {
    dateList.unshift( 'x' + lastDay--)
  }
  let allDay = getAllDaysOfMonth(year, month)
  for (let i = 0; i< allDay; i++) {
    dateList.push(i+1)
  }
  let futureDay = 1
  while(dateList.length < 42) {
    dateList.push( 'x' + futureDay++)
  }
  return dateList
}

export default creatDateList