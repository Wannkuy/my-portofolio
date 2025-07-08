import gsap from "gsap";

const splitText = (element) => {
  const childNodes = Array.from(element.childNodes);
  element.innerHTML = "";

  const createWordSpan = (word) => {
    const wordSpan = document.createElement("span");
    wordSpan.style.display = "inline-block";
    wordSpan.style.whiteSpace = "nowrap";
    wordSpan.innerHTML = word
      .split("")
      .map((char) =>
        char === ''
          ? `<span style="display:inline-block;text-transform:none;">&nbsp;</span>`
          : `<span style="display:inline-block;text-transform:none;">${char}</span>`
      )
      .join(""); // Memastikan join() digunakan dengan benar

    return wordSpan; // Mengembalikan elemen wordSpan
  };

  const processText = (text, parent) => {
    const words = text.split(/(\s+)/);
    words.forEach((word) => {
      if (word.trim() === "") {
        parent.innerHTML += word; // Menambahkan spasi kosong
      } else {
        const wordSpan = createWordSpan(word);
        parent.appendChild(wordSpan); // Menambahkan wordSpan ke parent
      }
    });
  };

  childNodes.forEach((node) => {
    if (node.nodeType === Node.TEXT_NODE) {
      processText(node.textContent, element); // Memproses teks
    } else if (node.nodeType === Node.ELEMENT_NODE) {
      const clonedNode = node.cloneNode(false); // Mengkloning elemen tanpa anak
      processText(node.textContent, clonedNode); // Memproses teks dari elemen yang dikloning
      element.appendChild(clonedNode); // Menambahkan elemen yang dikloning ke parent
    }
  });

  return element.querySelectorAll('span span'); // Mengembalikan semua span yang ada di dalam span
};

export const animateWavyText = (element, delay = 0) => {
  const letters = splitText(element); // Memanggil fungsi splitText untuk mendapatkan huruf

  gsap.fromTo(
    letters,
    { y: 50, opacity: 0, rotate: 10 }, // Properti awal
    { y: 0, opacity: 1, rotate: 0, duration: 1, ease: 'back.out(2)', stagger: 0.05, delay: delay } // Properti akhir
  );
};
