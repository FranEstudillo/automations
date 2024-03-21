package selenium_java;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class validación_ambiente_testing {
    public static void main(String[]arg) {
        System.setProperty("webdriver.chrome.driver", "C:\\Users\\valsistes01\\OneDrive\\Escritorio\\Automatización\\selenium-java\\drivers\\chromedriver.exe");
        WebDriver driver = new ChromeDriver();
        driver.get("https://google.com");

    }

}
