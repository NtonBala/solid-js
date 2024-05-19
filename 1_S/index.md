# Single Responsibility Principle

SRP principle states that a class should have only one area of responsibility.

The idea behind is that as the app is growing a developer will need to add more and more functionality. And a developer may find himself in situation when he needs to add to a class some functionality that may confuse class initial behavior. This will break SRP principle as SRP states: if a class owns some responsibility, that responsibility is of this particular class.

E.g. we have `News` class that creates some news:

```js
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
```

Our `News` class constructor accepts a couple of elements: title and text. It also sets `modified` flag to `false` by default (it says if the news has been changed). Also each news has an `update` method that changes its text and sets `modified` flag to `true`.

But to hold news as an object is not convenient - usually we want to display it in the browser. So we need to create some method that will format news object to the view that we need.
