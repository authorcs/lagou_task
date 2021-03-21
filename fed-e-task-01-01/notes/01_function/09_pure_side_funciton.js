// 副作用  :让一个函数变的不纯，如果函数依赖外部状态就无法保证相同的输出，就会带来副作用
    // 尽可能的控制在可控范围内


let min = 18;
// 返回值可能不同， 不是纯函数
function checkAge(age) {
  return age >= min
}


// 改造成纯函数
function checkage(age) {
  let min = 18;
  return age >= min
}