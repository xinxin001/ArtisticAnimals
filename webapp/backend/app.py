from flask import Flask, render_template, request, send_file, jsonify
import io
from base64 import encodebytes
# Import your models
from dcgan import GAN_dog

app = Flask(__name__)

# Instantiate your models
gan = GAN_dog()


@app.route('/generate/image', methods=['POST'])
def generate_image():
    image = gan.generate_image()

    file_object = io.BytesIO()
    image.save(file_object, 'PNG')
    encoded_img = encodebytes(file_object.getvalue()).decode('ascii')
    response =  { 'Status' : 'Success', 'message': 'nice' , 'ImageBytes': encoded_img}
    return jsonify(response)

if __name__ == '__main__':
    app.run(debug=True)
