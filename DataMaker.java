import java.io.BufferedReader;
import java.io.FileReader;
import java.io.FileWriter;
import java.util.ArrayList;
import java.util.List;

public class DataMaker {

    int[] cycles = { 1, 3, 4, 3 };
    
    
    public static void main(String[] args) {
        List<Integer> parcels = new ArrayList<Integer>();
        try {
            BufferedReader reader = new BufferedReader(new FileReader("landparcels.txt"));
            String line = reader.readLine();
            FileWriter writer = new FileWriter("valuation.sql");
            writer.write("");
            
            int count = 0;
            while (line != null) {
                String[] details = line.split(";");
                String currErf = details[1];
                writer.append("insert into AllValuations (parcelNumber, value) values ("+ currErf+"," + (int)(Math.random()*5000)*1000+");\n");
                line = reader.readLine();
            }
            reader.close();
            writer.close();
            System.out.println("Done!");
            
        } catch (Exception e) {
            System.out.println(e+"Error A");
            
        }
    }



}
