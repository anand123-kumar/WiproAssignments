package mypojos;

import javax.persistence.*;

import java.util.List;

@Entity
public class Account {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String holderName;

    @OneToMany(mappedBy = "account", cascade = CascadeType.ALL)
    private List<mypojos.Transaction> transactions;

    // Getters and Setters
    public int getId() { return id; }
    public void setId(int id) { this.id = id; }

    public String getHolderName() { return holderName; }
    public void setHolderName(String holderName) { this.holderName = holderName; }

    public List<mypojos.Transaction> getTransactions() { return transactions; }
    public void setTransactions(List<mypojos.Transaction> txList) { this.transactions = txList; }
}
