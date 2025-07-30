package wiprojavaprograms;

import java.util.*;

class CD implements Comparable<CD> {
    String title, singer;

    CD(String title, String singer) {
        this.title = title;
        this.singer = singer;
    }

    public int compareTo(CD other) {
        return this.singer.compareTo(other.singer);
    }

    public String toString() {
        return title + " - " + singer;
    }
}

public class Q40 {
    public static void main(String[] args) {
        List<CD> cds = new ArrayList<>();
        cds.add(new CD("Love Songs", "Arijit"));
        cds.add(new CD("Pop Hits", "Zayn"));
        cds.add(new CD("Classical", "Beethoven"));

        Collections.sort(cds);

        for (CD cd : cds) {
            System.out.println(cd);
        }
    }
}
