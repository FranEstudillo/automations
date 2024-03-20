from datetime import time
import unittest
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys

options = webdriver.ChromeOptions()
driver = webdriver.Chrome(options=options)

options.add_experimental_option("detach", True)
options.add_argument("--start-maximized")

#Accedemos al sitio web de pruebas
driver.get("https://odm.com.mx/gridsistemas.php")

#Seleccionamos el elemento CSS correspondiente al origen del viaje
origen = driver.find_element(by=By.ID, value='select2-cbx_estado-container')
origen.click()
search_origen = driver.find_element(by=By.CLASS_NAME, value='select2-search__field')
search_origen.click()
#Escribimos el nombre del origen del viaje
search_origen.send_keys("mexico central norte")
search_origen.send_keys('{enter}')

#Seleccionamos el elemento CSS correspondiente al destino del viaje
origen = driver.find_element(by=By.ID, value='select2-cbx_estado-container')


