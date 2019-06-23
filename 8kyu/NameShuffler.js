
function nameShuffler(str){
    const [first , surname] = str.split(' ')
    return `${surname} ${first}`
}

nameShuffler('john McClane'); => "McClane john"
