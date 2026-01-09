const lengthpassword=document.getElementById("lengthpassword");
const result = document.getElementById("result");


function randompassword( length, includelowercase,includeuppercase,includenumbers,includesymbols){
  const lowerchars = "abcdefghijklmnopqrstuvwxyz";
  const upperchars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numberchars="0123456789";
  const symbolchars="~!@#$%^&*()_+?><";
  let allowedchars ="";
  let password = "";
  allowedchars+=includelowercase ? lowerchars: "";
  allowedchars+=includeuppercase ? upperchars:"";
  allowedchars+=includenumbers ? numberchars : "";
  allowedchars += includesymbols ? symbolchars : "";
  if (length <=0){
      return result.textContent="password lenght must be at least 1";
  } 
  for (let i=0; i<length; i++){
   const randomIndex  = Math.floor(Math.random()*allowedchars.length);
  password+=allowedchars[randomIndex];
  }
  return password;
}

let includelowercase=true;
let includeuppercase=true;
let includenumbers=true;
let includesymbols=true;
function generate() {
    const length = Number(lengthpassword.value);

    const includeuppercase = UpperCase.checked;
    const includelowercase = LowerCase.checked;
    const includenumbers = Numbers.checked;
    const includesymbols = Symbols.checked;

    if (!includeuppercase && !includelowercase && !includenumbers && !includesymbols) {
        result.textContent = "Please choose at least one option!";
        return;
    }

    const password = randompassword(
        length,
        includelowercase,
        includeuppercase,
        includenumbers,
        includesymbols
    );

    result.textContent = `Generated password: ${password}`;

}
