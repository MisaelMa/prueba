interface ReadInfo {
    start: number,
    end: number
}
const bufferFake: (number | string)[] = []
let i = 0;

function makeid(length: number) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() *
            charactersLength));
    }
    return result;
}
// generate buffer
while (i < 4096) {
    let r_boolean = Math.random() < 0.5;

    r_boolean ? bufferFake.push(1) : bufferFake.push(makeid(Math.random()))

    i++;
}

const reads: ReadInfo[] = [{ start: 1, end: 5 }, { start: 4, end: 7 }, { start: 3, end: 5 }]
const callbakc = (value: number | string, index: number, array: (number | string)[]): any => {
    console.log(`
        value ${value},
        length ${array.length}
    `)
    return value
}

export const myFunctionRead = (list: ReadInfo, call: (...args: any) => void) => {
    const read = bufferFake.slice(list.start, list.end);
    return read.map(call)
}



export const exeFunction = () => {
    // request example
    for (const read of reads) {
        console.log(myFunctionRead(read, callbakc))
    }
}