export function generateRanges(valor, divisor) {
    const ranges = [];
    const step = valor / divisor;
    const rest = valor % divisor === 0 ? false : true;
  
    const param = rest ? 0.1 : 1;
  
    let prev = 0;
    let next = 0;
  
    for (let i = 1; i <= divisor; i++) {
      prev = i === 1 ? next : next + param;
      next = i === 1 ? next + step - param : step + next;
  
      const interval = `De ${i === 1 ? prev : prev.toFixed(rest ? 1 : 0)} a ${
        i === divisor ? valor : next.toFixed(rest ? 1 : 0)
      }\n`;
      ranges.push(interval);
    }
  
    return ranges;
  }
  