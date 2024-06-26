const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;
const CUSTOMERS = 'customers', PRODUCTS = 'products', CATEGORIES = 'products/categories';

// initialize woocommerce
const woo = new WooCommerceRestApi({
    url: 'https://www.donghouiters.id.vn',
    consumerKey: 'ck_691e782be3110f70ad8de11120476c34c47f2ef0',
    consumerSecret: 'cs_07b4ca6f7747cdce54319ad68387d17763c0f280',
    version: 'wc/v3',
    queryStringAuth: true
});

exports.getProducts = async (options = {}) => await woo.get(PRODUCTS, options);

exports.createProduct = async (data = {}) => await woo.post(PRODUCTS, data);

exports.deleteProduct = async (productId) => await woo.delete(`${PRODUCTS}/${productId}`);

exports.updateProduct = async (productId, data) => await woo.put(`${PRODUCTS}/${productId}`, data);

exports.getProduct = async (productId) => await woo.get(`${PRODUCTS}/${productId}`);

exports.createCategory = async (data = {}) => await woo.post(CATEGORIES, data);

exports.getCategory = async () => await woo.get(CATEGORIES);

exports.getCustomers = async () => await woo.get(CUSTOMERS);

exports.createCustomer = async (data = {}) => await woo.post(CUSTOMERS, data);