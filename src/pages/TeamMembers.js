import React from 'react';
import './TeamMembers.css';
import Cards from './Cards';


function TeamCards() {
    return (
        <div>
        <h1 className="team-title">Meet the Team</h1>
        <div className="grid-container">
            <Cards 
    facebookLink="https://www.facebook.com/profile.php?id=100061674476821" 
    instagramLink="https://www.instagram.com/immortalcreati0n/" 
    name="Tushar Yadav" 
    jobTitle="Director General" 
    backgroundImage="./assets/tushar.jpg"
/>
            <Cards 
      
    instagramLink="https://www.instagram.com/whyecwhy/" 

    name="Epshita Chakravarty" 
    jobTitle="Secretary General" 
     backgroundImage="./assets/epshitha1.jpg"
/>
<Cards 
    facebookLink="https://www.facebook.com/diya.sutar.56" 
    name="Diya Sutar" 
    jobTitle="International Press Head" 
     backgroundImage="./assets/diya.jpg"
/>
            <Cards 
    facebookLink="https://www.facebook.com/pushpal.ghodaskar" 
    instagramLink="https://www.instagram.com/pushpal__g/" 

    name="Pushpal Ghodaskar" 
    jobTitle="Head of the Organizing Committee" 
     backgroundImage="./assets/pushpal1.jpg"
/>
           
            
<Cards 
    facebookLink="https://www.facebook.com/profile.php?id=100012941355984" 
    instagramLink="https://www.instagram.com/sakshimishra_sm/" 

    name="Sakshi" 
    jobTitle="Director of Commitee Affairs" 
     backgroundImage="./assets/sakshi2.jpg"
/>

<Cards 
    facebookLink="https://www.facebook.com/archit.lall" 
    instagramLink="https://www.instagram.com/archit_lall/" 

    name="Archit Lall" 
    jobTitle="Director of Commitee Affairs" 
     backgroundImage="./assets/archit.jpg"
/>


           
            <Cards 
    facebookLink="https://www.facebook.com/sou.bis.9" 
    instagramLink="https://www.instagram.com/_soumiik_" 

    name="Soumik Biswas" 
    jobTitle="Deputy Director General" 
     backgroundImage="./assets/soumik.jpeg"
/>
            <Cards 
    facebookLink="https://www.facebook.com/navneet.berwal.58" 
    instagramLink="https://www.instagram.com/navneet_berwal/?utm_source=qr" 

    name="Navneet Berwal" 
    jobTitle="Under Secretary General" 
     backgroundImage="./assets/navneet.jpg"
/>
            <Cards 
    facebookLink="https://facebook.com/100015495341184" 
    instagramLink="https://www.instagram.com/ab._.hi._.sh._.ek" 

    name="Abhishek Prusty" 
    jobTitle="Under Secretary General" 
     backgroundImage="./assets/abhishek1.jpg"
/>
            <Cards 
    facebookLink="https://facebook.com/100078722296049" 
    instagramLink="https://www.instagram.com/iam.kshitiz._" 

    name="Kshitiz Chadha" 
    jobTitle="Under Secretary General" 
     backgroundImage="./assets/kshitiz.jpg"
/>

<Cards 
     
    instagramLink="https://www.instagram.com/_7ayush_7" 

    name="Ayush Raj" 
    jobTitle="Editor-in-Chief" 
     backgroundImage="./assets/ayush.jpg"
/>
            <Cards 
    facebookLink="https://facebook.com/100024698449929" 
    

    name="Rishav Mishra" 
    jobTitle="Editor-in-Chief" 
     backgroundImage="./assets/rishav.jpg"
/>
            
             
        </div>
        </div>
    );
}

export default TeamCards;