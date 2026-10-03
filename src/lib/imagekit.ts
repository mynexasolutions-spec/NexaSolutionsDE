import ImageKit from "imagekit";

let imageKitInstance: ImageKit | null = null;

export function getImageKitClient(): ImageKit {
  if (!imageKitInstance) {
    const publicKey = process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY;
    const privateKey = process.env.IMAGEKIT_PRIVATE_KEY;
    const urlEndpoint = process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT;

    if (!publicKey || !privateKey || !urlEndpoint) {
      throw new Error(
        "ImageKit environment variables are missing (NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY, IMAGEKIT_PRIVATE_KEY, NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT)"
      );
    }

    imageKitInstance = new ImageKit({
      publicKey,
      privateKey,
      urlEndpoint,
    });
  }

  return imageKitInstance;
}

export async function uploadToImageKit(
  fileBuffer: Buffer | string,
  fileName: string,
  folder = "/nexa-solutions/blogs"
) {
  const ik = getImageKitClient();
  const base64 = typeof fileBuffer === "string" ? fileBuffer : fileBuffer.toString("base64");

  const response = await ik.upload({
    file: base64,
    fileName,
    folder,
    useUniqueFileName: true,
  });

  return response;
}
