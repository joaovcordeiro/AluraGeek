const products = [
  {
    id: 1111111,
    name: "Caneca StormTrooper",
    price: 30,
    category: "Star Wars",
    image:
      "https://s3-alpha-sig.figma.com/img/7288/617c/839c11fc3105027e126215f3647fa5b0?Expires=1665964800&Signature=VO2t9u2Bd1oWMqybx1~VbdQzKFCcrNL7EdZ0xXYgk3wWBwgXAxhySXEBHEwHeknRoui1Dt6hUoqxng3use~s77VqkKsIiWNesF7XyyfFsIAzUj-sHsJ4Yla17QKdfuZjrqYCAHRf0P6vw7nP28nCkG-T5SU0zEZji5-6Es2yY-IJWlZj2y4K4isuI9fGnf61K-N598QrnjOjZGLUvFK-UImUxX1djlLf8~pZxAruOFZiyTXHWaedWHQJnc1sNMpQ8NgC2G8jTLM0IQNEt3WaWzLzSQ5YL13KuGLuGKjTWWnwg~yg-UlUp4lLzin6E7q72SUGDyDv0rcoCh3C8WHDkQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
  },
  {
    id: 1111112,
    name: "Busto Lego",
    category: "Star Wars",

    image:
      "https://s3-alpha-sig.figma.com/img/8238/111b/31785f700a9fb63c75604c23eb944720?Expires=1665964800&Signature=QBhqxzEE2mPQu~XdZjSvq4wIbifirE2Zv5sIS2W9ue6ZtmEK~2pdkU2IhsJxiUN8Vrvptpat4n86M~rpYwpR7HcLkqlsiN6zIJWWvutkftSv1IKTr1IicFhu42WK9DnbssabARf0raEvSSm2-Z3L2RHWULppzF5FmEDoy2MnNCv4zlOfH~Vf0fC9t4B7SEUYq2bc8V1Ccu1AhW-PCND1SNUsYwmMk7HLpuaftyBncvVNNaUFGgCX-Wy1GYRrHuj4m4vitX~SYoL0n9o-3tRthQTZ3hQ9h-le4k2Ff~su4gDkAKqiOrWqi783UtwNoV75hba46dwBuhl0ZcA51gdhHQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    price: 90,
  },
  {
    id: 1111113,
    name: "Figure Yoda",
    category: "Star Wars",

    image:
      "https://s3-alpha-sig.figma.com/img/42e5/511d/c4cea6462e083470202684c700aa5a07?Expires=1665964800&Signature=Nm5k7Eitx2OsGDIdces0tDqceL64eTv7mccBg6NcJD1vWZmENXV9VIKoRFCXkuWlpyvjRX2OrdoJYascSGycTr8wgBUmW02qTxq-N6zapGyUQTgiER-DsBklM2Pcwpk~fvHMOFpv5r7Pp947mb4JaTMLm37INh8~bfigLxKAPg4S2Tlo4HNWCZwFyldNKEdTjYZPK-Dxd5p8FscgIkH8CLi6B58gtGsPyA1GJ7EPKkSDPL~aXNv9E8~JDlw3iap6KcLZeeBd9Pxxsd9ASJjqANREhsZ0vwtha-8EjmRzDVXWvQikJfRyBmWjLIuAkratbX~NrvJJ973XGG~eTjXhow__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    price: 120,
  },
  {
    id: 1111114,
    name: "Figure StormTrooper",
    category: "Star Wars",

    image:
      "https://s3-alpha-sig.figma.com/img/661c/f689/2af26846110fb131c9617e7af1a8d724?Expires=1665964800&Signature=GwHb2Az9p1Bi1YuxZtBbgHTqFsD1zH5aUBa9Mv5KZu4HXB~F-Crz2hPKuaCueJdK6cyPAJbOZcW3D1INxyhqqN2MW02PSPUSFqNYQSMSVwZXsS9LjakXHOwJX6rpcFMyZU6tS2Mn7ZpVRkVxQlbFiaZCBv9cYOAsd3NVbyc0FOWLw6dR~QAY8Lr3yk6Wb9j1l5O6P8mgvvDBzNFeSlw-Gw7-C5cDKqKjUJAZpbL3e3gZw22aV15afSqtfujPh5JjGHB05DHP1vNrUG~~wdwG8mlr-8oRRY0J3I2Q0wQmwfO7cl4RnKETdANetaBUaT4yqYy1mrua0ZIQhbidSw9Hjg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    price: 100,
  },
  {
    id: 1111115,
    name: "Baby Yoda",
    category: "Star Wars",

    image:
      "https://s3-alpha-sig.figma.com/img/fefb/73c8/2b6531c3fd26bbe8299385f559b4306c?Expires=1665964800&Signature=EIXEJi8wqi3Ym41QaeA4WH~2SRA6t3n6yktQxvV0NSV9zm~97o5oJYlv81776ubEEp5dXTuIRRfx7OrBIrq3iDa3z9Z9ywRlpWWGaovEwPKCRmW6xHl~CZLo61wHCa698qHdcQPxi1w1Z3b~2azNrf8hMNC0SUNiWW1-QWeC2~-b-7dxmyNdLICpwiymHpuq~3VyIjns-JUf-4oRqm6RpnCuJp7heZ0LyyrX6Xn9pLXVNRPukxkJ-9YfW0c6emmuwD2vuq0cYLpy13RlBpuwhrsIJb2RzhB5J2hm0c6~6oo69mn~tH0koUyI9sLJTTQFEnQa6M-J5gOJbB6mG3aU0A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    price: 90,
  },
  {
    id: 1111116,
    name: "Figure Kaylo Ren",
    category: "Star Wars",

    image:
      "https://s3-alpha-sig.figma.com/img/5b94/5911/f59c8fc93dd4c73cda3d0cb7a0c758a8?Expires=1665964800&Signature=Ykj42z97zfUj01cyUPCnsvtBXlQH~9Xcin9HFLW5r89kLiM-A7BGxiMn2MN8E-QF0wwn9MlEiE-2HV-W9xsH18XDJ7u~2Jw1lzvMVAO3sw~T9si2F6wWFpRXMd66~uD8CN9GzOjBWfNQwTb8Qz525jEanOpeiZ4AyK9HUjN~v7U1dZVtlgopW~9RpGl4YxNpxKElAgd7OvJcTuQlKxSB8vMENpwBIxOu--4LeeePnmLsDRPKs3THLbWMCjnPlzgDPKdYzlGulIyGkgS3f8pVEpa0n3AbC2kmFn~v4s66MsoGgcqZRQ4-FSITQvXeEtxlY5o9-oX2FvYpgTUqlKgPQA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    price: 130,
  },
  {
    id: 1111117,
    name: "Controle Xbox",
    category: "Consoles",
    image:
      "https://s3-alpha-sig.figma.com/img/1e72/1227/31dc07f0bd170bd07820a8ad8c4d6c05?Expires=1665964800&Signature=AXcen2Y2QZ-pJag3uBsljOApf0lsN-8-KxNSPsc7dc~TOKejRIxn7ZIrIe1H8kdhe2U9b1vYs6yO4RtONSna5~LI2K74vaRpTGF~irRhtxa~fC65ZMvXG~lHai10zfwQa7JEMpX7XzPmbM4waWryVb-8Bo~S0XXIo8ZChWDg2i~2AH4pJjSA9FzU7ifex-xIWH0oe78sOQ~cNtygDIHPkD98L6CvcdyIqV~ScEqAX10YyhAAZGdb6K7USEDGA8nqtQQujgXGh1nmZqJ-ssJkVBcFgtxY7sERVoGBGlN~y41xUXFN0whsLW6RxLpecWcWEjYKAvo94BzdFFKsjAN14g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    price: 200,
  },
  {
    id: 1111118,
    name: "Playstation 5",
    category: "Consoles",

    image:
      "https://s3-alpha-sig.figma.com/img/cc7d/474f/a4eddf64c90f448cb65a46f215b8c95f?Expires=1665964800&Signature=DVbxbfBpweDHhu9fRByJgh0ibNh9DrNSYcHLTk99RwXeJL3WcowoNPxsWAtgQQ6UkSB03B23lM~WP6t0~28HJjwH73WWE4bOvzepFkOAQwLbtCDcgKidM27xD8h0IDLpNCDFZi-R9rqa~IkGgWZiAVSYNqjVwlQzPwqaqxtp3SpAuD2xBk0dbzUsxDlnZcqWuHyo5g75SLFftu393fR3eqjL-Epm8HOWvRnYgO3UUQZ8L2Gr~3Gyw2Iyy5KPxJ2i4vPuyXhDktkSTov0H~tZb4P6aOAuG~Hg45CdtjHN8fsDIVVhtgRlnGdxT6S7H-Vq1ueONlUa9GyxJH00l1vMPQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    price: 4000,
  },
  {
    id: 1111119,
    name: "Super Nintendo",
    category: "Consoles",

    image:
      "https://s3-alpha-sig.figma.com/img/b61c/d345/6cb0da71b58dd125552190b5838f5637?Expires=1665964800&Signature=SuboY4pE8z5Ia2RZ9iVTHzR9USV937SvMeU5mSPb4xp1Y7XWsXZJW2wDd-9jO0uVrnPbKjS4YYvuBG4shdlwJc8FZ4vkxSNrfahtxvTTojN28R6k7RJ6bEhdtnsw0jOqNqhWPniynnclCz301TWej8Qxd0bEMjM7fTzG7BqJOn~vKXbOFmKu1pZiimjPtuUfwsDh8VUerWJ7wezUhVFxpf1Rq7bULaP2U52L2U2EOxkQ02vU~pez~zwCkLv~gMDFLzxtHV4yBQqbKvsx~R5bGzsSBxHl5yJiJc2gzmlGW5YkVzwtRBhATa9VuMpnD~qtmD71kmlQRZKAPj--oU~HOg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    price: 400,
  },
  {
    id: 1111120,
    name: "Controle Nintendo Switch",
    category: "Consoles",

    image:
      "https://s3-alpha-sig.figma.com/img/f067/8e21/a7b1853365912e7aa9705a7b2821e696?Expires=1665964800&Signature=TuzRbbjGEV2rAlPnfWQ2O19wUHm4UANx7xPWhSi0Ku3KTN6QmhZGPzmf5WUTPQ-Fa3jmvgiOmA6UVCknOsdIxdtWxcgR1pz-5css~dfQmCodDy4zBBxQCX5wSyaAEvHN-bVL8FEFPEUsD3G7ExmvNiwsqiK4lv5q89rsgyeYPPiUM0OLTOdtllzDdP1RcZidTAXXYI1qvUeU9Y-YfZNJq05ulnX70g~ONnozqXJdYvyhJ6PzFwfS00v4TTtBlBwQC2AnpJjs74e0LrbUXe7R~nYDy8vtpyQhdkKyCnHhoBDxPgZIcVu1lL5ojoQgXl6reA4j-BOQsPreuhpE2UEIkQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    price: 300,
  },
  {
    id: 1111121,
    name: "Xbox One X",
    category: "Consoles",

    image:
      "https://s3-alpha-sig.figma.com/img/100b/e5cb/f8a0cc589b7af608f23bcd20106f6fa3?Expires=1665964800&Signature=VW01k6Y1HihG9DDox~ZxUwnR3~EXJi1atJkzk98SmfKFoItHUM2Yaa-PPDmV~1V6tmcCWkKgI0rbpTfnO3wluKC6S4Kn8lr0geyjwClO4yGG5AhNwsnETSXjTUtaEBibyEKPkp5-Lo~jpFOpxSc1mFO-n8B12gKpUUUNYyERR0Afms2AA~9yFezQNRIhDJN42kitUIPHYRqX47JPMS9i0httfVNgx1xJuEeAF4cRUNi8hZM5Cc0j4rbsWGyH7S4JyphLqi3aQOrsOMxDTF41p7TWS8Vf3swnR3XrDc5o9u75-MrI56LVXloqatACAtNwkooFuCa-nDWpamyeOccEPg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    price: 2500,
  },
  {
    id: 1111122,
    name: "Game Boy",
    category: "Consoles",

    image:
      "https://s3-alpha-sig.figma.com/img/3954/a3d3/e570bc8755e09021b38fc7a3a9840f80?Expires=1665964800&Signature=e93NjOh7XBYBkvLi9tSexJx~Ta7MWU-vLKW1KPQZKqpJEzH-t3KqPcT0lzeUuJIr~HIsgyh6V-~gpvdp6gRdIAX4EHZRCO0LwOHRMQkSnNjpnJKep9xlW764dojJXxHVQk5DGl3NOlfvVf1QIWnFKePdl3B1RIKfemnvniMvrLfQGXkLEuwVkrKe6kajOS-UHU8kDZT~AW33WAJB59SoZQi041kqI0JdJdlvd4CjBe0y6~AtmQyL~a~C4AVSifk~h3ncgJhFYbFABD1MyEY2vaWNDxs6NHKNOX5Ot3sulXahizvfGfIbyl~dmnW12r3SGJUVZ9ppvyYTCC3otkdvmg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    price: 200,
  },
  {
    id: 1111123,
    name: "Camisa Atari",
    category: "Diversos",
    image:
      "https://s3-alpha-sig.figma.com/img/9480/fb66/90a0dcbd12570f85e3cb01254c7221f5?Expires=1665964800&Signature=DKzOHLxSUesKopyKvEhZ3kwVWv3JUjmKT4Hy1RYrlBxN~4XYqSc4j7Hashp7GVwTe7AosyINu6TiMlyjaNzX7Xl1tzKa9S35Y~Kza4aUDhqy8nibBSe89ZucvKaFvaQGpEDrPhfhuYkXkr9ufZyzguLNHcvBkYaP1zFF1XRisvAqbyKulJfy22JprEV02kw0CLrEPsvMUqqJVj4K82mmz5Zz9LZf4AEjMXLYlNCsc1FyNQheXBkJ5Il46T1Lme9uJJJwlbLG3G~b~4sRoHD1-8TWloEHnqEAho1diSNuuQ-qgt0XgnC0z~jCnDm0jxshd~VK~rK4z0mkuKjWSJ42OQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    price: 80,
  },
  {
    id: 1111124,
    name: "Camisa SNES",
    category: "Diversos",

    image:
      "https://s3-alpha-sig.figma.com/img/493d/6142/e62958a50f8950209a4e73f8f281586b?Expires=1665964800&Signature=IFwh7Z-1~Z5qrbQVOHqHGabmvluwfNWZr85DPNZQIGjws1IhPn9yPcUVuTvWpFHR3cGsby0d6pnMZbq-swhfDh3fHQQElfs-u5T5KwWxLS~q-viLT1WjoKtPQERQC5louyfOhmeJQ844UUSNkwuBFWdc~dJ2s5CRZgK5X~DXVUB4-2OwritLlgPrWOm~EfX-BzWXSQWda9TXHXg353-2luPNRYzdONIlD5~j5XaioN9Q0yQeLQrAGSaHVNaw1b0wTw8FgAUJT2x-FuY7aitYdGsYHYa2Q9wdoz~J0wQxhWzKMuwOnxRM5~loJwz6iebjK37qBcGfXswOmYvo5Gl5HA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    price: 80,
  },
  {
    id: 1111125,
    name: "Figure Sonic",
    category: "Diversos",

    image:
      "https://s3-alpha-sig.figma.com/img/ead5/4f1a/2e68ded1f8a4b87f715a5698d23e78bd?Expires=1665964800&Signature=b4NeSkKQukYAkxl8RBldUZ~nPUl8bLIOmGzE5DEDSNxu0T~qJvoIf0KisKCecWPzPbedV66cDiqprvb1hNVAslnDfu3hBncFvFT9ii07Y5PgA1R0E9fwsd5KBDRSO1Yp3v8f2sUpuLE830tb6PXcNwG6twzCVwcoVb0a6b0Iqm~zXyB2mrXCr9VY-VBfoKdIZR68y0qq44TwyuT8YzJljbAR1jQIvLdQcDmxtj1TljitXUBqy3Ahxbparyb93Md~WjyTUjFso2o3yARPU76ArW5tCbu6rW569VthZ5ApPU~GFS~G6X9GnszxfluxLYvPOxFGKcWegjYJlQgr5R5~FA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    price: 40,
  },
  {
    id: 1111126,
    name: "Radio Analogico",
    category: "Diversos",

    image:
      "https://s3-alpha-sig.figma.com/img/8407/a102/3dbd2090c50fb3e36c54947c985f1820?Expires=1665964800&Signature=CacmerZcreN2K0ezgQBQbQMODLxIwHAd-dFNcyZkXs~f~Ruo6G0DQ4d4LAu~ik9jisN4-Iyb18qat1SUV7Hmtw8traowq4uLCW1F2nWf0FMw8NPEMhhFDcXf-xrmN7jTm1DPxmlkpwiIC3XK2CITd1we173PziIoeh8xZCtM-vKFuRU3IpoG6i5Ule9pM~aASZpOOppfZGaAGcLR4GSaZYMhULFOEr3JLc-VqvN1iM--7pt45HGMlNO9VrxN4DQHR4xQj7zk3sVpeOzCMv4tbqhwIdm4Bd3W5pghw-hhrbBrH3eY3ZtvucrvTQj7rlINiz8JtyDp1KvVVU4dtAHVCA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    price: 100,
  },
  {
    id: 1111127,
    name: "Oculos VR",
    category: "Diversos",

    image:
      "https://s3-alpha-sig.figma.com/img/235b/6bc7/daa13645ac1c7ceed6a220f0929fc13b?Expires=1665964800&Signature=gnYadXg4o6dY2SDnrPS5r564skTGOARySrhgz3JOQSBGU-O8cIrXHemTdIySk-T9XyXqXT3mFMeNKVjOsmaGUzs1sjKDcNDkqiO7jq59WkhSpWd2h0OaYpqUJbyh~57nIH1kTbMcFBN~f-GPj4U6SN7i04oIkGDsVSxJeZ8e0Dv00lqTXNjk-0yEa4QqRTtVKIeKshz5q4nEnwxG-K7fKUzpTf6f1cDbzi9UqS58Ddaxul5ORGf0wGgpjVi0JXi8h4-jdDhiq4c9Xqqusu85lyAM8Mh~523fSM0bae72iBdhp7oXzt0bYm-JRmukyGWl7k1cNqRo8res3WlBNmRIWQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    price: 400,
  },
  {
    id: 1111128,
    name: "Fantasia Pikachu",
    category: "Diversos",

    image:
      "https://s3-alpha-sig.figma.com/img/d7ea/7cc6/aecdbd47699e06f6134380744d43394f?Expires=1665964800&Signature=AnWFjUbnrjUprcBnEZaowmad57netBw8Wbat8s8cuVLnCTA5N4HuVmsjyl8ynSk8NQ1jvgSHbesKVeshFkxX4yUi4iKaJk9ErCGJD3fP~v4PgNj2zJNbIoM3-0CiOVPexBM7TzxyiubJYjUsxR9C06qngeTmsEVqHKJKZozI4Z6acuPZfvU18bEJ5l-sgq1DRgMitn1Da0K940nP29rB2i0aSHw2pG7kDoC-HV~1EMnZcCQlaIANEBni4NFgKslLJ21ltn~BoFgb-5faYAr3bnAVGKFaLhwQrtjVTJAuL8XKXdQ0UYlBCKaEYZFasb5pVo1x-a1VmHSBuSId8NHCAw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    price: 300,
  },
];

export default products;
