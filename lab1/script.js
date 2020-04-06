
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
   let t = prompt("������� �����");
   let k = prompt("������� ������������ ����� �����");
   
   let msg = dispart(t, k);
   
   if (msg == -1)
   {
      alert("�����: ����� �������� � ������ 0");
      return;
   }
   if (msg == -2)
   {
      alert("�����: ���������� ������� ����� ��� ��������� �");
      return;
   }
   
   for (s of msg)
   {
      console.log(s + "\n\n");
   }
   
   alert("���-�� ������: " + msg.length);
}

main();
