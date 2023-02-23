"""Form data for customer info."""


class Customer:
    """Customer.

    To  make a customer, pass a list of customer attributes, and the text
    of the template.

        >>> c = Customer(["name", "phone", "case_type"],
    """

    def __init__(self, code, name, phone):
        """Create story with words and template text."""

        self.code = code
        self.name = name
        self.phone = phone

    def generate(self):
        """Substitute answers into text."""

        dict = {"code": self.code, "name": self.name, "phone": self.phone}

        return dict
    
    def show_customer(self):
        details = f"""
        code: {self.code},
        name: {self.name},
        phone: {self.phone}
        """
        return details

customer = Customer("0", "John Smith", "555-123-4567")