
// একটি "যখন" লুপ কোডের একটি নির্দিষ্ট ব্লককে অজানা সংখ্যক বার পুনরাবৃত্তি করতে ব্যবহৃত হয়, যতক্ষণ না একটি শর্ত পূরণ হয়। উদাহরণস্বরূপ, যদি আমরা একজন ব্যবহারকারীকে 1 এবং 10 এর মধ্যে একটি সংখ্যা জিজ্ঞাসা করতে চাই, আমরা জানি না যে ব্যবহারকারী কতবার একটি বড় সংখ্যা লিখতে পারে, তাই আমরা জিজ্ঞাসা করতে থাকি "যদিও সংখ্যাটি 1 থেকে 10 এর মধ্যে না হয়"।

var num = 10

while ( num <15 )

{

    console.log (num)
    
    num++
}

// OUTPUT

// 10
// 11
// 12
// 13
// 14


