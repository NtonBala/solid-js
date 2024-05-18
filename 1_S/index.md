# Single Responsibility Principle

SRP principle states that a class should have only one area of responsibility.

The idea behind is that as the app is growing a developer will need to add more and more functionality. And a developer may find himself in situation when he needs to add to a class some functionality that may confuse class initial behavior. This will break SRP principle as SRP states that if a class owns some responsibility, that responsibility is of this particular class.

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

So our `News` class constructor accepts a couple of elements: `title` and `text`. It also sets by default `modified` flag to `false` (it says if the news has been changed). Also each news has an `update` method that can change its text and sets `modified` flag to `true`.
