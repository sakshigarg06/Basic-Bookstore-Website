function hello(){
    var person= prompt("Greetings From Wisdom Books! Please Enter Your Name Below.","User");
    if (person==null || person=="") {
        document.getElementById("hello").innerHTML+="Hello User! Welcome To Wisdom Books.";
    }
    else {
        document.getElementById("hello").innerHTML+="Hello " + person + "! Welcome To Wisdom Books."
    }
}

function checkit(){
	var check= document.getElementById('checkbox');
	var text= document.getElementById('text');
	if (check.checked == true){
    text.style.display = "block";
  } else {
     text.style.display = "none";
  }
}

function viewcart(){
	var quan1= document.getElementById('qty1').value;
	var quan2= document.getElementById('qty2').value;
	var quan3= document.getElementById('qty3').value;
	var quan4= document.getElementById('qty4').value;
	var quan5= document.getElementById('qty5').value;
	var quan6= document.getElementById('qty6').value;
	var quan7= document.getElementById('qty7').value;
	var quan8= document.getElementById('qty8').value;
	var quan9= document.getElementById('qty9').value;
	var quan10= document.getElementById('qty10').value;
	var quan11= document.getElementById('qty11').value;
	var quan12= document.getElementById('qty12').value;
	var quan13= document.getElementById('qty13').value;
	var quan14= document.getElementById('qty14').value;
	var quan15= document.getElementById('qty15').value;
	var quan16= document.getElementById('qty16').value;
	var quan17= document.getElementById('qty17').value;
	var quan18= document.getElementById('qty18').value;
	var quan19= document.getElementById('qty19').value;
	var quan20= document.getElementById('qty20').value;
	var check= document.getElementById('checkbox');
	var Sub_Total= ((240*quan1)+(260*quan2)+(360*quan3)+(360*quan4)+(540*quan5)+(350*quan6)+(400*quan7)+(1399*quan8)+(450*quan9)+(260*quan10)+(999*quan11)+(370*quan12)+
		(450*quan13)+(410*quan14)+(1150*quan15)+(300*quan16)+(250*quan17)+(550*quan18)+(500*quan19)+(399*quan20));
	var Total= Sub_Total;

    document.getElementById('cart').innerHTML= "<br><h2 style= font-size:38px;>YOUR CART</h2>";
    
    if (quan1>0) {
    	document.getElementById('cart').innerHTML+= "<p style= font-size:20px;> The Alchemist&emsp;x " + (quan1) + "</p>";
    }
    if (quan2>0) {
    	document.getElementById('cart').innerHTML+= "<p style= font-size:20px;> The Fault In Our Stars&emsp;x " + (quan2) + "</p>";
    }
    if (quan3>0) {
    	document.getElementById('cart').innerHTML+= "<p style= font-size:20px;> A Game Of Thrones&emsp;x " + (quan3) + "</p>";
    }
    if (quan4>0) {
    	document.getElementById('cart').innerHTML+= "<p style= font-size:20px;> Find Me&emsp;x " + (quan4) + "</p>";
    }
    if (quan5>0) {
    	document.getElementById('cart').innerHTML+= "<p style= font-size:20px;> The Testaments&emsp;x " + (quan5) + "</p>";
    }
    if (quan6>0) {
    	document.getElementById('cart').innerHTML+= "<p style= font-size:20px;> And Then There Were None&emsp;x " + (quan6) + "</p>";
    }
    if (quan7>0) {
    	document.getElementById('cart').innerHTML+= "<p style= font-size:20px;> Deadly Waters&emsp;x " + (quan7) + "</p>";
    }
    if (quan8>0) {
    	document.getElementById('cart').innerHTML+= "<p style= font-size:20px;> Deadlock&emsp;x " + (quan8) + "</p>";
    }
    if (quan9>0) {
    	document.getElementById('cart').innerHTML+= "<p style= font-size:20px;> Girl Gone Mad&emsp;x " + (quan9) + "</p>";
    }
    if (quan10>0) {
    	document.getElementById('cart').innerHTML+= "<p style= font-size:20px;> Sherlock Holmes Vol. 1&emsp;x " + (quan10) + "</p>";
    }
    if (quan11>0) {
    	document.getElementById('cart').innerHTML+= "<p style= font-size:20px;> The Marvel Book&emsp;x " + (quan11) + "</p>";
    }
    if (quan12>0) {
    	document.getElementById('cart').innerHTML+= "<p style= font-size:20px;> Snug&emsp;x " + (quan12) + "</p>";
    }
    if (quan13>0) {
    	document.getElementById('cart').innerHTML+= "<p style= font-size:20px;> Adulthood Is A Myth&emsp;x " + (quan13) + "</p>";
    }
    if (quan14>0) {
    	document.getElementById('cart').innerHTML+= "<p style= font-size:20px;> Diary Of A Wimpy Kid&emsp;x " + (quan14) + "</p>";
    }
    if (quan15>0) {
    	document.getElementById('cart').innerHTML+= "<p style= font-size:20px;> Sheets&emsp;x " + (quan15) + "</p>";
    }
    if (quan16>0) {
    	document.getElementById('cart').innerHTML+= "<p style= font-size:20px;> The 5 AM Club&emsp;x " + (quan16) + "</p>";
    }
    if (quan17>0) {
    	document.getElementById('cart').innerHTML+= "<p style= font-size:20px;> Think And Grow Rich&emsp;x " + (quan17) + "</p>";
    }
    if (quan18>0) {
    	document.getElementById('cart').innerHTML+= "<p style= font-size:20px;> The Secret&emsp;x " + (quan18) + "</p>";
    }
    if (quan19>0) {
    	document.getElementById('cart').innerHTML+= "<p style= font-size:20px;> Who Moved My Cheese?&emsp;x " + (quan19) + "</p>";
    }
    if (quan20>0) {
    	document.getElementById('cart').innerHTML+= "<p style= font-size:20px;> Rich Dad Poor Dad&emsp;x " + (quan20) + "</p>";
    }
       
        document.getElementById('cart').innerHTML+= "<h3 style= font-size:23px; font-weight:bold;> Total Books :&emsp;" + ((1*quan1)+(1*quan2)+(1*quan3)+(1*quan4)+(1*quan5)+(1*quan6)+(1*quan7)+(1*quan8)+
        	(1*quan9)+(1*quan10)+(1*quan11)+(1*quan12)+(1*quan13)+(1*quan14)+(1*quan15)+(1*quan16)+(1*quan17)+(1*quan18)+(1*quan19)+(1*quan20)) + "</h3>";
        
    if (Sub_Total>0) {
        document.getElementById('cart').innerHTML+= "<h3 style= font-size:23px; font-weight:bold;> Sub-Total :&emsp;₹ " + (Sub_Total) + "</h3>";
    }

    if (Sub_Total>0) {
    if (check.checked == true) {
    	document.getElementById('cart').innerHTML+= "<h3 style=font-size:23px; font-weight:bold;> Gift-Wrapping Charges :&emsp;₹ 99 </p>";
    	Total+=99;
    }}

    if (Sub_Total>0){
    if (Sub_Total>=999) {
    	document.getElementById('cart').innerHTML+= "<h3 style=font-size:23px; font-weight:bold;> Delivery Charges :&emsp;<del style=color:red;>₹ 99 </del>&ensp;Free Delivery </h3>";
    }
    else {
    	document.getElementById('cart').innerHTML+= "<h3 style=font-size:23px; font-weight:bold;> Delivery Charges :&emsp;₹ 99 </h3>";
    	Total+=99;
    }}

        document.getElementById('cart').innerHTML+= "<h3 style=font-size:28px; font-weight:bold;> GRAND TOTAL :&emsp;₹ " + (Total) + "</h3>";
        document.getElementById('cart').innerHTML+= "<button onclick=location.href='details.html' style=font-size:25px;border-radius:100px;outline:none;font-family:montserrat;cursor:pointer;padding:10px;padding-right:40px;padding-left:40px;background-color:#99C6E9;><b> PLACE ORDER </b></button>";
        document.getElementById('cart').innerHTML+= "<p></p><br>";
        
    window.scrollBy(0,600);
}

function validatefirstname()
{
    var field=document.getElementById("firstname").value;
    var regex= /^[A-Za-z]{2,15}$/;
    if(regex.test(field))
    {
        document.getElementById("firstname").style.color="green";
    }
    else
    {
        document.getElementById("firstname").style.color="red";
    }
}

function validatelastname()
{
    var field=document.getElementById("lastname").value;
    var regex= /^[A-Za-z\s\'\-]{2,15}$/;
    if(regex.test(field))
    {
        document.getElementById("lastname").style.color="green";
    }
    else
    {
        document.getElementById("lastname").style.color="red";
    }
}

function validatemobileno()
{
    var field=document.getElementById("mobileno").value;
    var regex= /^\d{10}$/;
    if(regex.test(field))
    {
        document.getElementById("mobileno").style.color="green";
    }
    else
    {
        document.getElementById("mobileno").style.color="red";
    }
}

function validateemail()
{
    var field=document.getElementById("email").value;
    var regex= /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if(regex.test(field))
    {
        document.getElementById("email").style.color="green";
    }
    else
    {
        document.getElementById("email").style.color="red";
    }
}

function validatecode()
{
    var field=document.getElementById("code").value;
    var regex= /^\d{6}$/;
    if(regex.test(field))
    {
        document.getElementById("code").style.color="green";
    }
    else
    {
        document.getElementById("code").style.color="red";
    }
}

function payment()
{
    window.open("payment.html");
}

function opencredit()
{
    document.getElementById('credit').style.display="block";
    document.getElementById('cc').style.background="#FEC7C5";
    document.getElementById('gpay').style.display="none";
    document.getElementById('paytm').style.background="#F8F9F9";
    document.getElementById('net').style.display="none";
    document.getElementById('bank').style.background="#F8F9F9";
    document.getElementById('cod').style.background="#F8F9F9";
    document.getElementById('ondel').style.display="none";
}

    function openpay()
{
    document.getElementById('credit').style.display="none";
    document.getElementById('cc').style.background="#F8F9F9";
    document.getElementById('gpay').style.display="block";
    document.getElementById('paytm').style.background="#FEC7C5";
    document.getElementById('net').style.display="none";
    document.getElementById('bank').style.background="#F8F9F9";
    document.getElementById('cod').style.background="##F8F9F9";
    document.getElementById('ondel').style.display="none";
}

function netbanking()
{
    document.getElementById('credit').style.display="none";
    document.getElementById('cc').style.background="#F8F9F9";
    document.getElementById('gpay').style.display="none";
    document.getElementById('paytm').style.background="#F8F9F9";
    document.getElementById('net').style.display="block";
    document.getElementById('bank').style.background="#FEC7C5";
    document.getElementById('cod').style.background="##F8F9F9";
    document.getElementById('ondel').style.display="none";
}

function cod()
{
    document.getElementById('cod').style.background="#FEC7C5";
    document.getElementById('ondel').style.display="block";
    document.getElementById('credit').style.display="none";
    document.getElementById('cc').style.background="#F8F9F9";
    document.getElementById('gpay').style.display="none";
    document.getElementById('paytm').style.background="#F8F9F9";
    document.getElementById('net').style.display="none";
    document.getElementById('bank').style.background="#F8F9F9";
}

function ordered()
{
    alert("Order Placed Successfully. Happy Reading!");
}