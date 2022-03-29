import "../style/subcription.css";




function Subcription(props) {
    function kontrolet()
	{
	var mail = document.getElementById("textemail").value;
	var regex = /^[a-zA-Z0-9._-]+@([a-zA-Z0-9.-]+.)+([.])+[a-zA-Z0-9.-]{2,4}$/;
	if (regex.test(mail)==true)
	{alert("Mail adresi geçerli");}
	else
	{alert("Hata geçersiz mail adresi girdiniz!");}
	}
;
    return (
        <div className=" subcription">
            <div className="container sub">
                <div className="title-sub">
                    <h2>Newsletter Subscription</h2>
                    <h3>Subscription to our newsletter to get new freelance work and projects</h3>
                </div>
                <div className="mail-sub">
                    <input type="text" placeholder="Enter your email address" name="" id="textemail" />
                    <button id="emailButton" onClick={kontrolet}>Subscribe</button>
                    
                </div>
            </div>
        </div>
    )
}

export default Subcription;