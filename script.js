const quotes = {
  "Zümer Suresi, 53.Ayet": '"Ey kendi aleyhlerine olarak günahta haddi aşan kullarım! Allah’ın rahmetinden ümit kesmeyin. Allah (dilerse) bütün günahları bağışlar; doğrusu O çok bağışlayıcı, çok merhametlidir."',
  "Al-i İmran Suresi, 139.Ayet": '"Gevşeklik göstermeyin, üzülmeyin; eğer inanmışsanız şüphesiz en üstün olan sizsiniz."',
  "Yûsuf Suresi, 87.Ayet": '"...Çünkü Allah`ın rahmetinden ümidi sadece kâfirler güruhu keser."',
  "Talak Suresi, 2.Ayet": '"…Kim Allah’a karşı gelmekten sakınırsa, Allah ona bir çıkış yolu açar."',
  "Talak Suresi, 3.Ayet": '"Onu beklemediği yerden rızıklandırır. Kim Allah’a tevekkül ederse, O kendisine yeter."',
  "Tevbe, Suresi, 51.Ayet": '"De ki: “Bizim başımıza ancak, Allah’ın bizim için yazdığı şeyler gelir. O, bizim mevlâmızdır. Öyleyse mü’minler, yalnız Allah’a güvensinler."',
  "Âl-i İmran Suresi; 200. Ayet": '"Ey İnananlar! Sabredin, düşmanlarınızdan daha sabırlı olun, cihada hazır bulunun, Allah’a karşı gelmekten sakının ki başarıya erişebilesiniz."',
  "En'am Suresi; 17. Ayet": '"Eğer Allah seni bir zarara uğratırsa, onu kendisinden başka giderecek yoktur. Ve eğer sana bir hayır verirse, (bunu da geri alacak yoktur). Şüphesiz O her şeye kadirdir."',
  "Mü'min Suresi; 51. Ayet": '"Şüphesiz peygamberlerimize ve iman edenlere, hem dünya hayatında, hem şahitlerin şahitlik edecekleri günde yardım ederiz."',
  "Meryem Suresi; 96. Ayet": '""İman edip de iyi davranışlarda bulunanlara gelince, onlar için çok merhametli olan Allah, (gönüllerde) bir sevgi yaratacaktır."  "',
  "İsra Suresi; 9. Ayet": '"Şüphesiz ki bu Kur’an en doğru yola iletir; iyi davranışlarda bulunan müminlere, kendileri için büyük bir mükâfat olduğunu müjdeler."',
  "İnşirah Suresi": '"Senin göğsünü açıp genişletmedik mi? Belini büken yükünü üzerinden kaldırmadık mı? Senin şânını ve ününü yüceltmedik mi? Şüphesiz güçlükle beraber bir kolaylık vardır. Gerçekten, güçlükle beraber bir kolaylık vardır. Öyleyse, bir işi bitirince diğerine koyul. Ancak Rabbine yönel ve yalvar."',
  "Bakara Suresi, 153. Ayet": '"Ey iman edenler, sabırla ve namazla yardım dileyin. Gerçekten Allah, sabredenlerle beraberdir."',
  "Bakara Suresi, 155. Ayet": '"Andolsun, Biz sizi biraz korku, açlık ve bir parça mallardan, canlardan ve ürünlerden eksiltmekle imtihan edeceğiz. Sabır gösterenleri müjdele."',
  "Al-i İmran Suresi, 200. Ayet": '"Ey iman edenler, sabredin ve sabırda yarışın, (sınırlarda) nöbetleşin. Allah’tan korkun. Umulur ki kurtulursunuz."',
  "Hud Suresi, 11. Ayet": '"Sabredenler ve salih amellerde bulunanlar başka. İşte, bağışlanma ve büyük ecir bunlarındır."',
  "Casiye Suresi, 30. Ayet": '"Artık iman edip salih amellerde bulunanlara gelince; Rableri onları Kendi rahmetine sokar. İşte apaçık olan büyük mutluluk ve kurtuluş budur."',
  "Yunus Suresi, 109. Ayet": '"Sana vahyolunana uy ve Allah hükmünü verinceye kadar sabret. O, hükmedenlerin en hayırlısıdır."',
  "Al-i İmran Suresi, 125. Ayet": '"Eğer siz sabredip Allah’a karşı gelmekten sakınırsanız, o anda düşmanlarınız ansızın üstünüze geliverseler bile, Rabbiniz size nişanlı beş bin melekle yardım edecektir."',
  "Al-i İmran Suresi, 120. Ayet": '"Size bir iyilik dokununca tasalanırlar, size bir kötülük isabet ettiğindeyse buna sevinirler. Eğer siz sabreder ve sakınırsanız, onların hileli düzenleri size hiçbir zarar veremez."',
  "İnsân Suresi, 24.Ayet ": '"Öyleyse Rabbinin hükmüne sabret; onlardan hiçbir günahkâra yahut nanköre boyun eğme."',
  "Hud Suresi, 115.Ayet": '"Ve sabret.Gerçekten Allah, iyilik yapanların ecrini kaybetmez. "',
  "Tevbe sûresi, 21.Ayet": '"Rableri onları, kendisinden bir rahmet, sonsuz hoşnutluk ve içinde kendileri için tükenmez nimetler bulunan cennetlerle müjdeler."',
  "Zümer Suresi, 36.Ayet": '"Allah kuluna kâfi değil mi?"',
  "Yunus Suresi, 2. Ayet": '"İman edenleri Rableri katında yüksek mertebe ile müjdele."',
  
};


document.querySelector("#generate").addEventListener("click", () => {
  generate();
  });
  
  function generate(){
  // grab all the keys in the dictionary (authors) and store in an array
  const authors = Object.keys(quotes);
  // grab a random key (author) and store it in author
  const author = authors[Math.floor(Math.random() * authors.length)];
  // grab the value(quote) that belongs to that key
  const quote = quotes[author]
  
  document.querySelector("#quote").textContent = quote;
  document.querySelector("#author").textContent = author;
  }
  
  window.onload = function(){
  generate()
  }