const timeformat =(minutes)=>{
    return `${Math.floor(minutes/60)}h :${minutes%60}m `
}

export default timeformat