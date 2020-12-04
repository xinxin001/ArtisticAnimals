from tensorflow import keras
import tensorflow as tf
import numpy as np
from PIL import Image


noise_dim = 128

class GAN_dog:
    def __init__(self):
        self.model = keras.models.load_model('model/dog_generator.h5')

    def generate_image(self):
        test_input = tf.random.normal([1, noise_dim])
        generated_image = self.model(test_input, training=False)[0,:,:,:]
        generated_image = np.array((generated_image * 127.5 + 127.5) / 255.)
        img_arr = np.array(generated_image)*255
        img = Image.fromarray(img_arr.astype(np.uint8))
        
        return img
