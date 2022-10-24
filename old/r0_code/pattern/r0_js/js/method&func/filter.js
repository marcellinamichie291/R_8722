// for distinct
for (const i of names) r0.includes(i) ? 0 : r0.push(i);
// .filter((element,index,array)=>element!==array[index-1]);
.filter((e,i,a)=>e!==a[i-1]);
