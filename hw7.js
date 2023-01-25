// function delay(ms) {
//    return new Promise((resolve, reject) =>{
//         setTimeout(resolve, ms)
//    });
//   }
  
//   delay(3000).then(() => alert('выполнилось через 3 секунды'));


  let promise = new Promise(function(resolve, reject) {
    resolve(1);
  
    setTimeout(() => resolve(2), 1000);
  });
  
  promise.then(alert);

  ///Выедет 1 так как после resolve(1) код сразу пойдет на строчку 16
  ///Promise получил свой ответ в виде resolve(1)

  promise.then(f1).catch(f2);
  promise.then(f1, f2);
  //значение resolve передается then - это наш результат
  //значение reject передается catch - это наша ошибка
  //в обоих случаях если промис возвращает resolved result вывод один и тот же
  //в случае, когда промис возвращает реджект, то then(f1, f2) не 
  //вернет эррор в f2 а будет возвращать значение в f1