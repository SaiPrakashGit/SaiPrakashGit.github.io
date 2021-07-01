const prevBtn = document.getElementById('prev') ;
const playBtn = document.getElementById('play') ;
const nextBtn = document.getElementById('next') ;
const audio = document.getElementById('audio') ;
const title = document.getElementById('title') ;
const progress = document.getElementById('progress') ;
const progressContainer = document.getElementById('progresscontainer') ;
const musicContainer = document.getElementById('musiccontainer') ;

const songs = ['1. Ay Pilla', '2. Evo Evo Kalale', '3. Nee Chitram Choosi', '4. Sarangadariya', '5. NEFFEX - Flirt (Bonus)'] ;

let songindex = 0 ;

// Load Song
function loadSong(song) {
    title.innerText = song ;
    audio.src = `music/${song}.mp3` ;
}

// Initial Song load
loadSong(songs[songindex]) ;

// Play Song
function playSong() {
    musicContainer.classList.add('play') ;
    playBtn.querySelector('i.fas').classList.remove('fa-play');
    playBtn.querySelector('i.fas').classList.add('fa-pause');
    audio.play();
}

// Pause Song
function pauseSong() {
    musicContainer.classList.remove('play') ;
    playBtn.querySelector('i.fas').classList.add('fa-play');
    playBtn.querySelector('i.fas').classList.remove('fa-pause');
    audio.pause();
}

// prevSong
function prevSong() {
    songindex-- ;
    if(songindex<0){ 
        songindex = songs.length - 1 ;
        // alert('This is the beginning of Songs Queue.. Do you want to go to the end of Queue instead ?') ;
    }
    loadSong(songs[songindex]) ;
    playSong() ;
}

// nextSong
function nextSong() {
    songindex++ ;
    if(songindex>songs.length - 1) { 
        songindex = 0 ;
        // alert('End of the Queue Reached.. Shall we loop the songs again ?') ;
    }
    loadSong(songs[songindex]) ;
    playSong() ;
}
// Event Listeners from User clicks
playBtn.addEventListener('click', () => {
    const playstate = musicContainer.classList.contains('play') ;

    if (playstate) { pauseSong() ; }
    else { playSong() ; }
});

prevBtn.addEventListener('click', prevSong) ;
nextBtn.addEventListener('click', nextSong) ;
// Call nextSong after a song ends
audio.addEventListener('ended', nextSong) ;
// Update progress
audio.addEventListener('timeupdate', updateProgress) ;
// Update Time
audio.addEventListener('timeupdate', updateTime) ;
// Update Progress bar
progressContainer.addEventListener('click', setProgress) ;
// 
