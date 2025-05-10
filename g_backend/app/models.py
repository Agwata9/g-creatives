from . import db

class Booking(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(100), nullable=False)
    phone = db.Column(db.String(20), nullable=False)
    service = db.Column(db.String(100), nullable=False)
    meeting_platform = db.Column(db.String(50), nullable=False)
    notes = db.Column(db.Text)
    privacy = db.Column(db.Boolean, nullable=False)
    date = db.Column(db.String(20), nullable=False)
    time = db.Column(db.String(10), nullable=False)

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "email": self.email,
            "phone": self.phone,
            "service": self.service,
            "meeting_platform": self.meeting_platform,
            "notes": self.notes,
            "privacy": self.privacy,
            "date": self.date,
            "time": self.time
        }
