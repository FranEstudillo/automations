import pyautogui
screenWidth, screenHeight = pyautogui.size()
pyautogui.moveTo(screenWidth / 2, screenHeight / 2)
print(screenHeight)
print(screenWidth)