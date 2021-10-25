const db = require('./connection');
const { User, Product, Service } = require('../models');

db.once('open', async () => {
  await Service.deleteMany();

  const services = await Service.insertMany([
    { name: 'Hair Treatment' },
    { name: 'Hair Regiment' },
    { name: 'Style' },
    { name: 'Youth' },
    { name: 'Toys' }
  ]);

  console.log('services seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: 'Custom Color',
      description:
        'custom crafted hair color made especially for you to deliver your dream color, while keeping your hair healthy',
      image: 'customcolor.jpg',
      service: services[0]._id,
      price: 65,
      quantity: 1000
    },
    {
      name: 'Blow Dry Styling',
      description:
        'Praesent sed lacinia mauris. Nulla congue nibh magna, at feugiat nunc scelerisque quis. Donec iaculis rutrum vulputate. Suspendisse lectus sem, vulputate ac lectus sed, placerat consequat dui.',
      image: 'BlowDry.jpg',
      service: services[0]._id,
      price: 65,
      quantity: 1000
    },
    {
      name: 'Brazilian Blowout',
      service: services[1]._id,
      description:
        'Give your hair a fuller and glossier look with our Brazilian Blowout.',
      image: 'BrazillianBlowout.jpg',
      price: 235,
      quantity: 1000
    },
    {
      name: 'Hydrating Treatment',
      service: services[1]._id,
      description:
        'A deep-hydrating masque that transforms even the driest, most over-it hair, leaving it supremely soft and irresistibly touchable.',
      image: 'HydratingTreatment.jpg',
      price: 20,
      quantity: 1000
    },
    {
      name: 'Protein Treatment',
      service: services[1]._id,
      description:
        'Restorative Hair Mask for weakened and damaged hair',
      image: 'ProteinTreatment.jpg',
      price: 20,
      quantity: 1000
    },
    {
      name: 'Scalp Treatment',
      service: services[2]._id,
      description:
        'Healthy hair starts at the scalp. Our professional-strength scalp care soothes skin and regulates oil production.',
      image: 'ScalpTreatment.jpg',
      price: 30,
      quantity: 1000
    },
    {
      name: 'Natural Styling',
      service: services[2]._id,
      description:
        'Embrace your natural hair and enjoy freedom wash-and-go with confidence to rule the world.',
      image: 'naturalstyling.jpg',
      price: 100,
      quantity: 1000
    },
    {
      name: 'Protective Styling',
      service: services[3]._id,
      description:
        'Great style that allow your hair to be healthy, ready to go on a moments notice.',
      image: 'BoxBraids.jpg',
      price: 180,
      quantity: 100
    },
    {
      name: 'Protective Styling with flair',
      service: services[4]._id,
      description: 'Great style with a bite of flair that allow your hair to be healthy, ready to go on a moments notice.',
      image: 'crochet.jpg',
      price: 120,
      quantity: 1000
    },
    {
      name: 'Gents Haircut',
      service: services[4]._id,
      description:
        'a Standard cut by shears or clipers for a clean fresh look.',
      image: 'gentsHaircuts.jpg',
      price: 35,
      quantity: 1000
    },
    {
      name: 'Ladies Haircut',
      service: services[4]._id,
      description:
        'Reinvent yourself with a new look that sure to catch the eye, as well as increase your confidence.',
      image: 'LadiesHaircuts.jpg',
      price: 45,
      quantity: 1000
    },
    {
      name: 'Gents Full Service Haircut',
      service: services[4]._id,
      description:
        'Enjoy a facial wash with a mosturizer treatment ending with a warm tower, shave or shape up of beard, and haircut.',
      image: 'GFSHC.jpg',
      price: 60,
      quantity: 1000
    },
    {
      name: 'The Ulitmate Identity',
      service: services[4]._id,
      description:
        'Enjoy a facial wash with a mosturizer treatment ending with a warm tower, shave or shape up of beard, and haircut. Inclusive of a custom color beard, hair, or both',
      image: 'TheUltimateIdentity.jpg',
      price: 120,
      quantity: 1000
    },
    {
      name: 'Youth Haircut',
      service: services[4]._id,
      description:
        'a Standard cut by shears or clipers for a clean fresh look, with a small design.',
      image: 'YouthHaircuts.jpg',
      price: 25,
      quantity: 1000
    },
    {
      name: 'Styling',
      service: services[4]._id,
      description:
        'Create an everyday look that can easily tranform into evening play',
      image: 'styling.jpg',
      price: 60,
      quantity: 1000
    }
  ]);

  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Pamela',
    lastName: 'Washington',
    email: 'pamela@testmail.com',
    password: 'password12345',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id]
      }
    ]
  });

  await User.create({
    firstName: 'Elijah',
    lastName: 'Holt',
    email: 'eholt@testmail.com',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
});
