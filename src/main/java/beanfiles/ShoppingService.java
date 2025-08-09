package beanfiles;

public class ShoppingService {

    public void addToCart(String item) {
        System.out.println("Item added to cart: " + item);
    }

    public void makePayment(double amount) {
        if (amount <= 0) {
            throw new IllegalArgumentException("Amount must be greater than 0.");
        }
        System.out.println("Payment of ₹" + amount + " successful.");
    }

    public void placeOrder() {
        System.out.println("Order placed successfully.");
    }
}
