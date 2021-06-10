function listen() {
    var siri = new webkitSpeechRecognition();
    var listenedline = ""
    siri.onresult = evt => {
        listenedline = evt.results[0][0].transcript.toLowerCase();
        
        switch (listenedline) {
            case "open google":
                window.open('https://www.google.com');
                break
            case "open youtube":
                window.open('https://www.youtube.com');
                break
            case "open my website":
                window.open('https://riansh.github.io/rs/');
                break
            case "play soft music":
                window.open('https://www.youtube.com/watch?v=mWRsgZuwf_8');
                break
            case "open gaana":
                window.open('https://gaana.com/');
                break;
            case "open whatsapp":
                window.open('https://web.whatsapp.com/');
                break;
            case "i want to play a game":
                window.open('file:///C:/Users/sac/Documents/Rwebsite/game/index.html');
                break;
                case "play my favourite song":
                    window.open('https://www.youtube.com/watch?v=TGywiArffRQ');
                     break;
            case "hello":
                var a = "hey there"
                var synth = window.speechSynthesis;
                var utter = new window.SpeechSynthesisUtterance(a);
                synth.speak(utter)
                break
            case "how are you":
                var b = "i am fine   "
                var synth = window.speechSynthesis;
                var utter = new window.SpeechSynthesisUtterance(b);
                synth.speak(utter);

            case "":
                var l = "how are you"
                var synth = window.speechSynthesis;
                var utter = new window.SpeechSynthesisUtterance(l);
                synth.speak(utter);
                break;

            case "hai":
                var h = "hello"
                var synth = window.speechSynthesis;
                var utter = new window.SpeechSynthesisUtterance(h);
                synth.speak(utter)
                break;
            case "i am fine":
                var c = "thats great "
                var synth = window.speechSynthesis;
                var utter = new window.SpeechSynthesisUtterance(c);
                synth.speak(utter);
                break;
            case "you are very good":
                var d = "thankyou"
                var synth = window.speechSynthesis;
                var utter = new window.SpeechSynthesisUtterance(d);
                synth.speak(utter);;
                break;
            case "you are very bad":
                var e = " i am sorry "
                var synth = window.speechSynthesis;
                var utter = new window.SpeechSynthesisUtterance(e);
                synth.speak(utter);
                break;
            case "what is your name":
                var f = "i am jarvis whats your name"
                var synth = window.speechSynthesis;
                var utter = new window.SpeechSynthesisUtterance(f);
                synth.speak(utter);
                break;
            case "My name is Riansh":
                var g = "ok"
                var synth = window.speechSynthesis;
                var utter = new window.SpeechSynthesisUtterance(g);
                synth.speak(utter);
                break;
            case "hii":
                var h = "hello"
                var synth = window.speechSynthesis;
                var utter = new window.SpeechSynthesisUtterance(h);
                synth.speak(utter);
                break;
            case "what is your master name":
                var i = "my master name is Riansh Sharma"
                var synth = window.speechSynthesis;
                var utter = new window.SpeechSynthesisUtterance(i);
                synth.speak(utter);
                break;
            case "when is your birthday":
                var j = "my birth day is 26 march 2021"
                var synth = window.speechSynthesis;
                var utter = new window.SpeechSynthesisUtterance(j);
                synth.speak(utter);
                break;
            case "who is the prime minister of india":
                var k = "Narendra Modi is the prime minister india"
                var synth = window.speechSynthesis;
                var utter = new window.SpeechSynthesisUtterance(k);
                synth.speak(utter);
                break;
            case "who is the first prime minister of india":
                var m = "Jawaharlal Nehru is the first prime minister of india "
                var synth = window.speechSynthesis;
                var utter = new window.SpeechSynthesisUtterance(m);
                synth.speak(utter);
                break;
            case "write table of 2":
                document.getElementById('demo').innerHTML = "2 x 2 = 4 ,  2 x 3 = 6 , 2 x 4 = 8, 2 x 5 = 10, 2 x 6 = 12, 2 x 7 = 14, 2 x 8 = 16 , 2 x 9 = 18 , 2 x 10 = 20";
                break;
            case "what is your name":
                var n = "my name is Jarvis "
                var synth = window.speechSynthesis;
                var utter = new window.SpeechSynthesisUtterance(n);
                synth.speak(utter);
                break;
            case "what is the time":
                document.getElementById('demo').innerHTML = Date()
                break;
            case "hey jarvis":
                var o = " yes sir "
                var synth = window.speechSynthesis;
                var utter = new window.SpeechSynthesisUtterance(o);
                synth.speak(utter);
                break;
            case "i am not well":
                var p = "what is your body tempreeature in farenhite "
                var synth = window.speechSynthesis;
                var utter = new window.SpeechSynthesisUtterance(p);
                synth.speak(utter);
                break;
            case "98":
                var q = " ok you are perfect  "
                var synth = window.speechSynthesis;
                var utter = new window.SpeechSynthesisUtterance(q);
                synth.speak(utter);

            case "":
                var r = " take care "
                var synth = window.speechSynthesis;
                var utter = new window.SpeechSynthesisUtterance(r);
                synth.speak(utter);
                break;
            case "who are you":
                var s = "i am your persnel assistant "
                var synth = window.speechSynthesis;
                var utter = new window.SpeechSynthesisUtterance(s);
                synth.speak(utter);
                break;
            case "what is my brother's name":
                var t = " Yours brothers name is Vedansh sharma"
                var synth = window.speechSynthesis;
                var utter = new window.SpeechSynthesisUtterance(t);
                synth.speak(utter);
                break;
            case "what is my parents name":
                var u = " your mothers name is gyaneshwari Sharma and"
                var synth = window.speechSynthesis;
                var utter = new window.SpeechSynthesisUtterance(u);
                synth.speak(utter);

            case "":
                var v = "your fathers name is Sushil Sharma"
                var synth = window.speechSynthesis;
                var utter = new window.SpeechSynthesisUtterance(v);
                synth.speak(utter);
                break;
            case "what is the area of rectangle":
                var w = "length multiply breadth"
                var synth = window.speechSynthesis;
                var utter = new window.SpeechSynthesisUtterance(w);
                synth.speak(utter);
                break;
            case "Bye":
                var y = "bye "
                var synth = window.speechSynthesis;
                var utter = new window.SpeechSynthesisUtterance(y)
                synth.speak(utter)
                break;
                case "show all your command":
                  window.open('https://riansh.github.io/jarvis2/')
                break
                   













                default:
                    var x = "Sorry I dont know that "
                    var synth = window.speechSynthesis;
                    var utter = new window.SpeechSynthesisUtterance(x)
                    synth.speak(utter)
                console.log(listenedline)




        }
    }
    siri.start()
}