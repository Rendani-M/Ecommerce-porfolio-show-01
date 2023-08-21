'use strict';
const Stripe = require('stripe').default;
const stripe = new Stripe(process.env.STRIPE_KEY, {
  apiVersion: '2022-11-15',
});

/**
 * order controller
 */

const { createCoreController } = require('@strapi/strapi').factories;
// module.exports = createCoreController('api::order.order');
module.exports = createCoreController('api::order.order', ({ strapi }) => ({
  async create(ctx) {
    const products = ctx.request.body.data.products;
    try {
      const lineItems = await Promise.all(
        products.map(async (product) => {
          const item = await strapi
            .service("api::product.product")
            .findOne(product.id);

          return {
            price_data: {
              currency: "zar",
              product_data: {
                name: item.title,
              },
              unit_amount: Math.round(item.price * 100),
            },
            quantity: product.quantity,
          };
        })
      );

      const session = await stripe.checkout.sessions.create({
        shipping_address_collection: {allowed_countries: ['ZA','US', 'CA']},
        payment_method_types: ["card"],
        mode: "payment",
        success_url: process.env.CLIENT_URL+"?success=true",
        cancel_url: process.env.CLIENT_URL+"?success=false",
        line_items: lineItems,
      });

      await strapi
        .service("api::order.order")
        .create({ data: {  products, stripeId: session.id } });
      console.log("first", products);
      return { stripeSession: session };

    } catch (error) {
      console.error(error.message);
      console.error(error.stack);
      ctx.response.status = 500;
      return { error };
    }
  },
}));
