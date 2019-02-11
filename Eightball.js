let userName = "Cameron"
//input your name in the above string
userName ? console.log('true') : console.log('false');

const userQuestion = 'Will I ever be good at coding?';
//input your question in the above string
console.log(`${userName} asked: ${userQuestion}`);

const randomNumber = Math.floor(Math.random() * 8);

let eightBall = "";

switch(randomNumber) {
  case 0:
    eightBall = 'It is certain';
    break;
  case 1:
    eightBall = 'It is decidedly so';
    break;
  case 2:
    eightBall = 'Perhaps';
    break;
  case 3:
    eightBall = 'Reply hazy try again';
    break;
      case 4:
    eightBall = 'Cannot predict now';
    break;
  case 5:
    eightBall = 'Do not count on it';
    break;
      case 6:
    eightBall = 'My sources say no';
    break;
  case 7:
    eightBall = 'Outlook not so good';
	 break;
}
console.log(`The eight ball answered: ${eightBall}`);
