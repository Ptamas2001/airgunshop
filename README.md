# airgunshop
airgunshop

Az oldal témája légfegyverek értékesítése
de gyakorlatilag bármilyen más termék értékesítésére alkalmas lehet
Az oldalt React javascript nyelv segítségével valósítottam meg
A projektnek ez csak a harmadrészt kész állapota.
A weboldal kipróbálásához szüksége lesz a Visual studio-ra lásd --> https://code.visualstudio.com
Valamint szükséges egy adatbáziskezelő szoftverre (XAMP) lásd --> https://www.apachefriends.org/hu/index.html
A xampon belül indítsa el az Apache és MySql szervert majd hozzon létre egy adatbázist airgunWebpage néven UTF-8 kódolással
majd importálja az sql airgunwebpage.sql fájlt
A visual studio segítségével nyissa meg az airgunsop3 nevű mappát 

Győződjön meg róla hogy mind a 3 mappa tartalmazza a node-modules mappát, ha esetleg hiányzik akkor telepítse azt

Eztkövetően a terminalon keresztül :
cd server 
npm start

egy másik terminálban pedig:
cd webshop-user
cd client
cd src
npm start

majd egy harmadik terminálban
cd webshop-admin
cd client
cd src
npm start

