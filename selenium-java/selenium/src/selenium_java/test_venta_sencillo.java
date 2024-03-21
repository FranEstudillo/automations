package selenium_java;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import java.time.Duration;

public class test_venta_sencillo {
    public static void main(String[]arg) {

        //Establecemos el driver para automatizar el navegador
        System.setProperty("webdriver.chrome.driver", "C:\\Users\\valsistes01\\OneDrive\\Escritorio\\Automatización\\selenium-java\\drivers\\chromedriver.exe");
        WebDriver driver = new ChromeDriver();
        //Establecemos la URL del sitio
        driver.get("https://odm.com.mx/gridsistemas.php");
        //Timeout
        driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(5));
        //PRIMERA SECCION: FILTROS DEL VIAJE
        //Seleccionamos el origen del viaje
        driver.findElement(By.className("select2-selection__arrow")).click();
        //Seleccionamos el cuadro de búsqueda del elemento origen
        driver.findElement(By.className("select2-search__field")).sendKeys("mexico central norte", Keys.ENTER);
        //Timeout
        driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(5));
        //Seleccionamos el destino del viaje
        driver.findElement(By.id("select2-cbx_municipio-container")).click();
        //Seleccionamos el cuadro de búsqueda del elemento destino
        driver.findElement(By.className("select2-search__field")).sendKeys("aguascalientes c. autobus", Keys.ENTER);

        //Seleccionamos el día de salida del viaje
        //PARA SELECCIONAR DIA ACTUAL
        driver.findElement(By.id("fechasalida1")).click();
        driver.findElement(By.xpath("//td[@class=' ui-datepicker-days-cell-over  ui-datepicker-current-day ui-datepicker-today']")).click();


        //PARA SELECCIONAR DIA SIGUIENTE
        //driver.findElement(By.id("fechasalida1")).click();
        //driver.findElement(By.xpath("//a[@class='ui-state-default ui-state-hover']")).click();

        //SELECCIONAMOS PASAJEROS
        //Adultos
        //NOTA: NUMPADX = CANTIDAD DE PASAJEROS QUE DESEAMOS DEL TIPO SELECCIONADO
        driver.findElement(By.id("adultos")).sendKeys(Keys.NUMPAD2);

        //Menores

        //Inapam

        //Estudiantes

        //Profesores

        //BUSCAR VIAJE
        driver.findElement(By.id("idboton")).click();
        //Timeout
        driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(15));


        //SEGUNDA SECCION: SELECCIÓN DE CORRIDA
        driver.findElement(By.id("u50849-4")).click();
        //Timeout
        driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(15));

        //TERCERA SECCIÓN: SELECCIÓN DE ASIENTOS
        //VALIDACIÓN DEL MENSAJE DE ALERTA


        driver.findElement(By.className("aceptarBtn")).click();
        //SELECCION DE ASIENTOS
        WebElement primerAsientoDisponible = driver.findElement(By.cssSelector("td.piso1 disponible"));
        primerAsientoDisponible.click();

        WebElement segundoAsientoDisponible = driver.findElement(By.cssSelector("td.piso1 disponible"));
        segundoAsientoDisponible.click();










    }

}
