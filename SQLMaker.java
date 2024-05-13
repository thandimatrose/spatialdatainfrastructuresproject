import java.io.BufferedReader;
import java.io.FileReader;
import java.io.FileWriter;
import java.util.ArrayList;
import java.util.List;

public class SQLMaker {

    int[] cycles = { 1, 3, 4, 3 };
    
    
    public static void main(String[] args) {
        List<Integer> parcels = new ArrayList<Integer>();
        try {
            BufferedReader reader = new BufferedReader(new FileReader("landparcels.txt"));
            String line = reader.readLine();
            int count = 0;
            while (line != null && count < 9000) {
                String[] details = line.split(";");
                parcels.add(Integer.parseInt(details[1]));
                line = reader.readLine();
            }
            reader.close();
            System.out.println(parcels.get(0));
            replaceERFS("ComparativeSalesValuations.sql", parcels,0);
            replaceERFS("IncomeCapitalisationValuations.sql", parcels,2000);
            replaceERFS("ManualValuations.sql", parcels,7000);
            
        } catch (Exception e) {
            System.out.println(e+"Error A");
            
        }
    }

    public static void replaceERFS(String file, List<Integer> parcels, int start) {
        try {
            BufferedReader reader = new BufferedReader(new FileReader(file));
            String line = reader.readLine();
            String sql = "";
            int count = start;
            while (line != null) {
                
                line = line.replaceAll("\'~\'", "" + parcels.get(count));
                sql += line + "#";

                count++;
                line = reader.readLine();
            }
            reader.close();
            FileWriter writer = new FileWriter("file"+start+".txt");
            String[] sqldetails = sql.split("#");
            for (int i = 0; i < sqldetails.length; i++) {
                writer.append(sqldetails[i]+"\n");
            }
            writer.close();
        } catch (Exception e) {
            System.out.println(e+"error b");
        }

    }

}
