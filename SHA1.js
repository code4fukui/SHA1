export class SHA1 {
  static async digest(data) {
    if (typeof data == "string") {
      data = new TextEncoder().encode(data);
    }
    const hashBuffer = await crypto.subtle.digest("SHA-1", data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    return hashHex;
  }
};
