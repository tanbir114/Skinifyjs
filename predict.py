import tensorflow as tf
from tensorflow import keras
import numpy as np
from PIL import Image
import matplotlib.pyplot as plt
import sys

model = keras.models.load_model('./model_integration/DermaNet.keras')

def preprocess_image(image_path, img_height, img_width):
    img = Image.open(image_path) 
    img = img.resize((img_height, img_width))
    img_array = np.array(img)
    img_array = np.expand_dims(img_array, axis=0)  
    return img_array

image_path = sys.argv[1]
img_height = 224
img_width = 224
processed_image = preprocess_image(image_path, img_height, img_width)

predictions = model.predict(processed_image)
predicted_class = np.argmax(predictions, axis=1)
categories = ['Chickenpox', 'Cowpox', 'HFMD', 'Healthy', 'Measles', 'Monkeypox']
predicted_label = categories[predicted_class[0]]

print(f'{predicted_label}')
