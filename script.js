const pesan = {
  Sjheford: "buat keluarga Sjheford, lu semua tempat gua balik pas capek sama semuanya. gak ribet, gak banyak drama, tapi selalu ada. thank you, real talk. buat Eillet, Kazuma, Nighty, Sonne, Roissant, Pranaditya, Nadastara, Ciennroel, Ezhael, Kendrick, Luista, dan yang lainnya kalian tuh vibe gua banget. tiap orang punya cara sendiri buat bikin gua stay. Sonne, lu diem tapi dalem. gua liat itu. thanks for sticking around. Gua gak selalu bilang, tapi gua hargain kalian semua. dan happy new year, semoga selalu disehatkan semua dan harus tetap solid anjay surinjay well well well -KajfZayn",
  
  Morphniac: "makasih ya bre udh mau temenan ama gua selama hampir 4 tahun ini (?) btw jangan asing dulu ya:) #semoggakdorothy walaupun kalian sibuk in real life, sering-seringlah mabar kek dulu wkwkwk. dan selamat tahun baru hore semoga di sehatkan selalu. tapi jujur, gua bersyukur banget punya lu pada. gak semua orang bisa bertahan sejauh ini, dan lu salah satu yang paling berarti. thanks for sticking around, for real. lu pada udh keluarga kedua bagi gua di rp maupun rl. -KajfZayn",
  
  Rosaeri: "well, well, well, it’s kinda wild how we just met like a week ago (maybe?), tapi rasanya kayak udah temenan lama. you’re chill, easy to talk to, and honestly? glad our paths crossed. thanks for being good vibes since day one. hope this friendship goes on and stays seru terus. and happy new year, may this year bring health, peace, and togetherness to us. may God bless every step our family takes. amen. -KajfZayn",
  
  Javi: "i don’t say this often, but i really appreciate you. dari dulu lu selalu ada ngedengerin curhat random gua, kasih saran kayak abang sendiri, dan selalu support tanpa banyak tanya. you're not just a friend, you're like the big brother i never had. kadang lu ngejagain tuh subtle, tapi kerasa banget. thanks for being that constant presence in my life. you matter more than you know. udah hampir setahun kita temenan anjay selebewww cihuyyy. and happy new year, semoga sehat selalu dan panjang umur selalu yeah. amen. -KajfZayn ",
  
  Lily: "makasih udah mau temenan ama gua, maaf kalau gua ada salah wkwk. happy new year, btw. hopefully this year we will always be blessed by God. amen. i just wanna say thank you so much. lu udah jadi bagian dari hari-hari gua (walaupun gak setiap hari sih wkwk) selama ini. mungkin gua gak selalu perfect, but you stayed. you listened, you cared, dan lu tetap ada even when things got tough. gua benar-benar appreciate that. semoga apapun yang lu hadapi nanti, lu nggak pernah ngerasa sendirian. you got this, always. #LilyxKajf_Bffsahabatselamanya2k27 -KajfZayn"
};

function tampilkanPesan() {
  const user = document.getElementById("yourName").value;
  const target = document.getElementById("targetName").value;
  const messageDiv = document.getElementById("message");

  if (user === "" || target === "") {
    messageDiv.innerHTML = "Select both names first.";
    return;
  }

  if (user === target) {
    messageDiv.innerHTML = `<p class="show">${pesan[target]}</p>`;
  } else {
    messageDiv.innerHTML = `<p class="blocked">You are not allowed to see this message.</p>`;
  }
}