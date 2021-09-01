var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg", "http://www.wikihow.com/images/8/81/Draw-a-Boy-Step-14.jpg", "https://i.postimg.cc/JnL6wtrd/sister.jpg", "https://clipground.com/images/dad-with-kids-clip-art-20.jpg", "https://i.postimg.cc/bw5W5zSK/mother.jpg"];
var names = ["Family Book", "Sanjay Rajendran", "Tanisha Rajendran", "Rajendran Dhanasekaran", "Prabavathi Muthaiyan"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 4
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    console.log(names)

    var updatedImage = images[i]; 
    var updatedName = names[i];
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
