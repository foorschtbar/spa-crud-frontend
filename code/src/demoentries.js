import http from "./http-common";

export default function DemoEntries(props) {

    var members = [
        {
            "firstname": "Steffan",
            "lastname": "Ehrlichmann",
            "phone": "0421 63 07 21",
            "email": "s.ehrlichmann@gmail.com",
            "street": "Grolmanstraße 55",
            "city": "28329 Bremen Gartenstadt Vahr",
            "birthday": "1966-05-05"
        },
        {
            "firstname": "Patrick",
            "lastname": "Cole",
            "phone": "08031 48 91 77",
            "email": "PatrickCole@teleworm.us",
            "street": "Grolmanstraße 55",
            "city": "83055 Kolbermoor ",
            "birthday": "1975-12-07"
        },
        {
            "firstname": "Robert",
            "lastname": "Weiss",
            "phone": "05305 46 90 49",
            "email": "Robert.Weiss@web.de",
            "street": "Pohlstrasse 96",
            "city": "38173 Sickte",
            "birthday": "1946-07-18"
        },
        {
            "firstname": "Melanie",
            "lastname": "Müller",
            "street": "Jahnstrasse 24",
            "city": "83203 Prien",
            "birthday": "1965-08-31"
        },
        {
            "firstname": "Brigitte",
            "lastname": "Mahler",
            "phone": "",
            "email": "BrigitteMahler@rhyta.com ",
            "street": "Ziegelstr. 26",
            "city": "94160 Ringelai",
            "birthday": "1950-02-03"
        },
        {
            "firstname": "Suzanne",
            "lastname": "J. Chavarria",
            "phone": "443-752-2040",
            "email": "SuzanneJChavarria@rhyta.com",
            "street": "252 Green Gate Lane",
            "city": "Baltimore, MD 21202",
            "birthday": "1950-09-02"
        },
        {
            "firstname": "Brenda",
            "lastname": "Ebert",
            "phone": "724-562-6259",
            "email": "BrendaREbert@armyspy.com ",
            "street": "1351 Shinn Avenue",
            "city": "Gibsonia, PA 15044",
            "birthday": "1986-07-31"
        }

    ];

    members.forEach(element => {
        http.post('/member', element)
            .then((response) => {
                console.log('Success', response);
            })
            .catch((error) => {
                console.log('Error', error.message);
            });
    });

    return "blub"
}