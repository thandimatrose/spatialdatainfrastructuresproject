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
            replaceERFS("ComparativeSalesValuationsOLD.sql", parcels,0, "ComparativeSalesValuations.sql");
            replaceERFS("IncomeCapitalisationValuationsOLD.sql", parcels,2000, "IncomeCapitalisationValuations.sql");
            replaceERFS("ManualValuationsOLD.sql", parcels,7000, "ManualValuations.sql");
            
        } catch (Exception e) {
            System.out.println(e+"Error A");
            
        }
    }

    public static void replaceERFS(String file, List<Integer> parcels, int start, String newfile) {
        try {
            BufferedReader reader = new BufferedReader(new FileReader(file));
            String line = reader.readLine();
            String sql = "";
            int count = start;
            while (line != null) {
                
                line = line.replaceAll("~", "" + parcels.get(count));
                sql += line + "#";

                count++;
                line = reader.readLine();
            }
            reader.close();
            FileWriter writer = new FileWriter(newfile);
            String[] sqldetails = sql.split("#");
            writer.write("");
            for (int i = 0; i < sqldetails.length; i++) {
                writer.append(sqldetails[i]+"\n");
            }
            writer.close();
        } catch (Exception e) {
            System.out.println(e+"error b");
        }

    }

}
