
function jokee() {
  let joke = ["Since the coronavirus outbreak, my 47-year-old son has been washing his hands religiously. In fact, he said, “I’ve been washing my hands so much, I found the answers to an...", "“I make mistakes; I’ll be the second to admit it.” —Jean Kerr, author", "I tried having my mother’s phone disconnected, but the customer-service rep told me that since the account was in my dad’s name, he’d have to be the one to put...", "I loved the dress that I bought at a flea market. It fit perfectly, and the skirt was a swirl of intricate pleats. I wore it confidently to an evening...", "During World War II, my father often found himself stuck with KP duty. One day, convinced he could improve things, he told the head cook, “If you give me a...", "What I remember most about my dad’s jokes is my mother’s reaction. While everyone else was howling at one of his punch lines, my mom would always respond, “Bernard, no...", "My dad used to sing little ditties. This was my favorite: There was a young lady named Mabel. She danced on the dining room table. Her face grew red, When...", "Here’s my favorite dad joke, with me as the dad: Every Sunday on the way to church, we would have to stop at a railroad crossing. And each time, I’d...", "If it was a blustery day, you could be sure to hear my dad remark, “It was so windy today, I had to wrinkle my forehead and screw my cap...", "My dad was not a jokester, but his fun side did come out once in a while. When I was 12, he took me to a Chicago White Sox game..."]

  let random = Math.floor(Math.random() * 10)
  let string = document.getElementById("joke")
  string.innerHTML = joke[random]
}
