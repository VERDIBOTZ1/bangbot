/*
› Create By @chika bot md
› Base Ori @hisoka morou
› Kalau mau tambahin fitur di index.js
› Edit text menu di file language › help.js
*/

//gausah di apa² in!
const fs = require('fs')
const chalk = require('chalk')

//—————「 Website Apikey 」—————//
global.APIs = {
//gausah di apa² in!
zenz: 'https://zenzapis.xyz',
}

//—————「 Website Apikey 」—————//
global.APIKeys = {
//gausah di apa² in, udah free apikey :)
'https://zenzapis.xyz': 'BagasPrdn',
}

//—————「 Setting Owner 」—————//
global.owner = ['628570675450','6285706735450','6283869803330'] //ubah jadi nomor mu, note tanda ' gausah di hapus!
global.premium = ['6283869803330'] //ubah jadi nomor mu, note tanda ' gausah di hapus!
global.ownernomer = '6285706735450' //ubah jadi nomor mu, note tanda ' gausah di hapus!

//—————「 Set Nama Own & Bot 」—————//
global.ownername = 'VERDI' //ubah jadi nama mu, note tanda ' gausah di hapus!
global.botname = 'BANKEKAUBOT' //ubah jadi nama bot mu, note tanda ' gausah di hapus!
global.footer = 'VERDI' //ubah jadi nama mu, note tanda ' gausah di hapus!

//—————「 Set Kebutuhan Button & Kontak 」—————//
//ubah aja kalau ada yang gapunya gsh di hps anggap aja credits :), note tanda ' gausah di hapus!
global.youtube = 'blum buat yt banh:('
global.ig = 'https://instagram.com/VERDI_ZZ'
global.mygc = 'https://chat.whatsapp.com/DlbBRRvPR128DzqnFHlWAD'
global.myweb = 'https://github.com/VERDIBOTZ1'
global.email = 'okebang2022@gmail.com'
global.region = 'tokyo😆'

//—————「 Set Wm 」—————//
global.packname = '© mekimu-Md' //ubah jadi nama bot mu, note tanda ' gausah di hapus!
global.author = 'mekiy' //ubah jadi nama mu, note tanda ' gausah di hapus!

//—————「 Set Nama Session 」—————//
//gausah di apa² in!
global.sessionName = 'session'

//—————「 Set Limit 」—————//
//terserah mau ubah atau nggak, note : tanda ' gausah di hapus!
global.limitawal = {
premium: "Infinity",
free: 15,
}

//—————「 Set Image 」—————//
//terserah mau ubah apa nggak, menurut gua jangan di ubah!
global.thumb = fs.readFileSync('./image/chika.jpg')
global.veloriy = fs.readFileSync('./image/chika.mp4')

//—————「 Set Image Welcome 」—————//
//terserah mau ubah apa nggak, menurut gua jangan di ubah!
global.BgWelcLeav = 'https://telegra.ph/file/1a3eac3701775793618b3.jpg'

//—————「 Set Random Image Menu 」—————//
//gausah di apa² in!
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

//—————「 Set Prefix 」—————//
//gausah di apa² in!
global.prefa = ['','!','.','🐦','🐤','🗿']

//—————「 Set Simbol 」—————//
//terserah mai ubah atau nggak, note : tanda ' gausah di hapus!
global.sp = '⭔'

//—————「 Set Message 」—————//
//terserah mau ubah apa nggak, note : tanda ' gausah di hapus!
global.mess = {
success: '_Udh anjg._',
admin: '_lah kok tiba tiba jadi admin?!_',
botAdmin: '_Jadi in admin dulu bot nya anjg_',
owner: '_kamu bukan owner ku_',
group: '_Fitur Hanya bisa di pakek di grup asu!_',
private: '_Fitur Hanya bisa di pribadi njig!_',
bot: '_Fitur Khusus Penguna Bot Ya bang_',
wait: '_Lokayakanjg..._',
error: '_Error ajg, lu pikir bot bisa ga eror!_',
endLimit: '_Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12 ya anjg_',
}

//—————「 Batas Akhir 」—————//
//gausah si apa² in!
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update'${__filename}'`))
delete require.cache[file]
require(file)
})
