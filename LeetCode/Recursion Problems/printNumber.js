function nTo1(n) {
  if (n == 1) {
    console.log(1);
    return;
  }
  console.log(n);
  nTo1(n - 1);
}

// nTo1(5);

function oneTon(n) {
  if (n == 1) {
    console.log(n);
    return;
  }

  oneTon(n - 1);
  console.log(n);
}

oneTon(5);
