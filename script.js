var quotes = [ 'The work will come. Enjoy the quiet moments and read up.',         
        'Entertain and be useful', 'Ask to help. Ask for help.', ' "Learn how to defend your work, but know when not to."',
        'Don\’t be afraid to crack a joke or give input.',      
        'You are hired for your thoughts so don\'t be afraid to say what you\'re thinking.',     
        '"Create two versions: the one you want to make, and the one the client wants to see. " ',      
        '"Meet people, make friends with co-workers outside of the building. " ',       
        'Focus on improving your craft while building up other skills.',       
        'Head down. Eyes forward.',        
        '""I get up. I walk. I fall down. Meanwhile, I keep dancing." - Daniel Hillel" ',     
        'There is nothing more fun than being yourself.',      
        'We are not in the business of art; we are in the art of business.',       
        'Always do too much.',    
        '"""It\'s either bullshit or brilliance."" - Deb Morrison "',      
        '"Take a hike. No really, leave the office when you\'re overwhlmed. Walk outside. Refresh your mind."',           
        ' "If you don\'t remember names, at least remember faces so you can say hi & smile in the hallway."',        
        ' "If you\'re bored, doing proactive work never hurts."',       
        'Be patient with yourself.',       
        'Have an outlet or two outside of work.',      
        'Explore your dreams even if it means falling.',       
        '"""You have the choice to make things matter. You get to decide what you want to be a part of."" - Jake Kahana"',     
        '"Be proactive, hungry, curious, happy, but most importatntly be present."',       
        '"The network is real, you never know who will get you a job. Don\'t burn bridges."',     
        'Have an opinion.',        
        'The stupidest question is the one that isn\'t asked.',     
        'Be a human. Make mistakes. Enjoy life outside of work.',      
        'Don\'t stress, have fun. We make ads for a living.',    
        'You will have to start at the bottom. It will take time. Bust your ass & enjoy the process.',     
        '"Finding a job is like finding a boyfriend (girlfriend), *dear god* don\'t be desparate."',       
        'Ask. Questions. During. Interviews. Otherwise you look foolish.',    
        '"Enjoy your last year of school - college never comes back, don\'t spend it stressed."',       
        'Accept criticism and use it to fuel your drive to succeed.',      
        '"If you think you\'re working hard, work harder."'       

]

function newQuote() {
    var randomNum = Math.floor(Math.random() * (quotes.length));
    document.getElementById('displayArea').innerHTML = quotes[randomNum]; 
}