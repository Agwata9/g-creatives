from flask import current_app as app, request, jsonify
from . import db
from .models import Booking


@app.route('/api/bookings', methods=['POST'])
def create_booking():
    data = request.get_json()

    required_fields = ['name', 'email', 'phone', 'service', 'meetingPlatform', 'privacy', 'date', 'time']
    if not all(field in data for field in required_fields):
        return jsonify({'error': 'Missing required fields'}), 400

    booking = Booking(
        name=data['name'],
        email=data['email'],
        phone=data['phone'],
        service=data['service'],
        meeting_platform=data['meetingPlatform'],
        notes=data.get('notes', ''),
        privacy=bool(data['privacy']),
        date=data['date'],
        time=data['time']
    )

    db.session.add(booking)
    db.session.commit()

    return jsonify({'message': 'Booking successfully saved'}), 201


@app.route('/api/bookings', methods=['GET'])
def get_bookings():
    bookings = Booking.query.all()
    return jsonify([booking.to_dict() for booking in bookings])
