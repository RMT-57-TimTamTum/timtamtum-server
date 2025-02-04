class AuthController {
  static async register(req, res) {
    res.status(201).json({
      id: 1,
      email: "fachri@mail.com"
    })
  }
}

module.exports = AuthController
