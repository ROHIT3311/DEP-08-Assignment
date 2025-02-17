class Node {
  constructor(data) {
    this.data = data;
    this.back = null;
    this.next = null;
  }
}

class Broweser {
  constructor(currPage) {
    this.currPage = new Node(currPage);
  }
  visit(url) {
    let newNode = new Node(url);
    newNode.back = this.currPage;
    this.currPage.next = newNode;
    this.currPage = newNode;
  }

  back(steps) {
    while (steps && this.currPage.back) {
      this.currPage = this.currPage.back;
      steps--;
    }

    return this.currPage.data;
  }

  forward(steps) {
    while (steps && this.currPage.next) {
      this.currPage = this.currPage.next;
      steps--;
    }

    return this.currPage.data;
  }
}

let homepage = new Broweser("Google.com");
homepage.forward(2);
homepage.forward("hello2.com");
homepage.forward("hello2.com");