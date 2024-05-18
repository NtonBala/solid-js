// Single Responsibility Principle

// Creates some news
class News {
  constructor(title, text) {
    this.title = title;
    this.text = text;
    this.modified = false;
  }

  update(text) {
    this.text = text;
    this.modified = true;
  }
}

const news = new News(
  'Why invest in CLEAN architecture?',
  'Cost/benefit argument is the main reason why doing this. The goal of the architect is to minimize the cost of creating and maintaining the software architecture while maximize the benefit (that is the business value that the software provides). The overall goal is to maximize ROI (the return on investment)...'
);

console.log(news);
