
function dispart(text, k)
{
   if (k < 1)
      return -1;
   
   if (text.length == 0)
      return [];
   
   let messages = [];
   
   let words = text.split(' ');
   let msg = [];
   
   for (let word of words)
   {
      if (word.length > k)
         return -2;
      
      let newmsg = msg + ((msg == "")?'':' ') + word;
      if (newmsg.length <= k)
         msg = newmsg;
      else
      {
         messages.push(msg);
         msg = word;
      }
   }
   
   messages.push(msg);
   
   return messages;
}

function main()
{
   let t = prompt("Введите текст");
   let k = prompt("Введите максимальную длину блока");
   
   let msg = dispart(t, k);
   
   if (msg == -1)
   {
      alert("Еггог: введён параметр К меньше 0");
      return;
   }
   if (msg == -2)
   {
      alert("Еггог: невозможно разбить текст при указанном К");
      return;
   }
   
   for (s of msg)
   {
      console.log(s + "\n\n");
   }
   
   alert("Кол-во постов: " + msg.length);
}

main();
