// мэр города с указами. нужен посредник для оповещения жителей

class Mer {
    constructor(newspaper) {
        this.MersNewspaper = newspaper;
    }

    createUkaz(ukaz) {
        this.MersNewspaper.notify(ukaz);
    }
}

class Citizen {
    getNews(news) {
        console.log('news', news);
    }
}

class Newspaper {
    subscribers = [];

    notify(news) {
        this.subscribers.forEach((s) => s(news))
    }

    subscribe(cb) {
        this.subscribers.push(cb);
        return () => {
            const index = this.subscribers.indexOf(cb)
            this.subscribers.splice(index, 1);
        }
    }


}

const newspaper = new Newspaper();
const  mer = new Mer(newspaper);
const a = new Citizen();
const b = new Citizen();
const c = new Citizen();
const d = new Citizen();
const e = new Citizen();
const f = new Citizen();

newspaper.subscribe(a.getNews);
newspaper.subscribe(b.getNews);
newspaper.subscribe(c.getNews);
newspaper.subscribe(d.getNews);
newspaper.subscribe(e.getNews);
newspaper.subscribe(f.getNews);

mer.createUkaz(",fldkf");

