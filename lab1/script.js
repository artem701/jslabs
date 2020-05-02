
function len(words)
{
   return words.join(' ').length;
}

function dispart(text, k)
{
   if (k < 1)
      return -1;
   
   if (text.length == 0)
      return [];
   
   let words = text.split(' ');
   let msg = [], msgs = [];
   
   let errflag = 0;
   
   msgs = words.reduce((messages, word) =>
   {
      if ((errflag == 0) && (word != ""))
      {
         if (word.length > k)
         {  
            errflag = -2;
            return [];
         }
         let newmsg = msg.concat([word]);
         if (len(newmsg) <= k)
         {
            msg = newmsg;
         }
         else
         {
            messages.push(msg.join(' '));
            msg = [word];
         }
      }
      return messages;
   }, []);
   
   if (errflag != 0)
      return errflag;
   
   msgs.push(msg.join(' '));
   return msgs;
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
