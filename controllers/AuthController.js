class AuthController {
  static async register(req, res) {
    res.status(201).json({
      id: 1,
      email: "fachri@mail.com"
    })
  }

  static async login(req, res) {
    res.json({
      accessToken: "1234"
    })
  }
}
module.exports = AuthController
