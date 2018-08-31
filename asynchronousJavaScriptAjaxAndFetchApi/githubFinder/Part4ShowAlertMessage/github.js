class Github {
  constructor() {
    this.client_id = 'c16afcff28c2b9466aa0';
    this.client_secret = 'c2cf72ade5594cbaea9d1ab83b42b1a70dbed286';
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();

    return {
      profile
    }
  }
}