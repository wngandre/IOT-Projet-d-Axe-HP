import network
import urequests
import ujson
import utime
from machine import Pin, PWM

wlan = network.WLAN(network.STA_IF)
wlan.active(True)

ssid = 'iPhone de Kustyy'
password = 'Tpa123321'
wlan.connect(ssid, password)

houses = {
    "Gryffindor": [25000,1,1],
    "Slytherin": [1, 35000,1],
    "Hufflepuff": [35000,35000,1],
    "Ravenclaw":[1,1,35000],
    "": [35000,35000,35000]
    }
pwm_ledR = PWM(Pin(13, mode=Pin.OUT))
pwm_ledG = PWM(Pin(14, mode=Pin.OUT))
pwm_ledB = PWM(Pin(15, mode=Pin.OUT))
pwm_ledR.freq(1_000)
pwm_ledG.freq(1_000)
pwm_ledB.freq(1_000)

while not wlan.isconnected():
    print("pas co")
    utime.sleep(1)

while True:

    print("GET")
    url = "http://172.20.10.3:3000/maisons"
    print(url)
    response = urequests.get(url)
    print(response)

    house = response.json()["house"]
    response.close()

    print(house)
    utime.sleep(0.1)

    pwm_ledR.duty_u16(houses[house][0])
    pwm_ledG.duty_u16(houses[house][1])
    pwm_ledB.duty_u16(houses[house][2])
