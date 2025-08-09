package beanfiles;

public class Purchase {
    private int purchaseId;
    private String purchaseDate;
    private Product product; 

    public Purchase(int purchaseId, String purchaseDate, Product product) {
        this.purchaseId = purchaseId;
        this.purchaseDate = purchaseDate;
        this.product = product;
    }

    public void displayPurchase() {
        System.out.println("Purchase ID: " + purchaseId);
        System.out.println("Purchase Date: " + purchaseDate);
        System.out.println("---- Product Details ----");
        product.displayProduct();
    }
}
