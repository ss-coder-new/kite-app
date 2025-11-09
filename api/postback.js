export default async function handler(req, res) {
  if (req.method === "POST") {
    console.log("Postback received:", req.body);
    res.status(200).json({ status: "ok" });
  } else {
    res.status(405).send("Method Not Allowed");
  }
}
