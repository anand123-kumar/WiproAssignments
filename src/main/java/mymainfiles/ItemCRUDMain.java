package mymainfiles;

import mypojos.Item;
import mydaofiles.ItemDAO;

import java.util.List;
import java.util.Scanner;

public class ItemCRUDMain {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        ItemDAO dao = new ItemDAO();
        int choice;

        do {
            
            System.out.println("Hibernate Item CRUD");
            System.out.println("-------------------------------");
            System.out.println("1. Add\n2. View All\n3. Update\n4. Delete\n5. Get by ID\n0. Exit");
            System.out.print("Choose option: ");
            choice = sc.nextInt();

            switch (choice) {
                case 1:
                    sc.nextLine();
                    System.out.print("Enter name: ");
                    String name = sc.nextLine();
                    System.out.print("Enter price: ");
                    double price = sc.nextDouble();
                    Item item = new Item();
                    item.setName(name);
                    item.setPrice(price);
                    dao.addItem(item);
                    System.out.println("Item added.");
                    break;

                case 2:
                    List<Item> items = dao.getAllItems();
                    for (Item i : items) {
                        System.out.println(i.getId() + " - " + i.getName() + " - ₹" + i.getPrice());
                    }
                    break;

                case 3:
                    System.out.print("Enter ID to update: ");
                    int idToUpdate = sc.nextInt();
                    sc.nextLine();
                    System.out.print("Enter new name: ");
                    String newName = sc.nextLine();
                    System.out.print("Enter new price: ");
                    double newPrice = sc.nextDouble();
                    dao.updateItem(idToUpdate, newName, newPrice);
                    System.out.println("Item updated.");
                    break;

                case 4:
                    System.out.print("Enter ID to delete: ");
                    int idToDelete = sc.nextInt();
                    dao.deleteItem(idToDelete);
                    System.out.println("Item deleted.");
                    break;

                case 5:
                    System.out.print("Enter ID to view: ");
                    int id = sc.nextInt();
                    Item foundItem = dao.getItemById(id);
                    if (foundItem != null)
                        System.out.println(foundItem.getId() + " - " + foundItem.getName() + " - ₹" + foundItem.getPrice());
                    else
                        System.out.println("Item not found.");
                    break;

                case 0:
                    System.out.println("Exiting...");
                    dao.close();
                    break;

                default:
                    System.out.println("Invalid choice.");
            }
        } while (choice != 0);
        sc.close();
    }
}
