package mk.finki.ukim.wpproekt;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.ServletComponentScan;

@ServletComponentScan
@SpringBootApplication
public class WpproektApplication {

    public static void main(String[] args) {
        SpringApplication.run(WpproektApplication.class, args);
    }

}
