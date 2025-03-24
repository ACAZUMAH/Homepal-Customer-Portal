import { showNotification } from "@mantine/notifications";
import { supabase } from "../configs";

export const useUploadImages = () => {
  const uploadImage = async (file) => {
    return new Promise( async (resolve, reject) => {
        if (!file) return reject("No file provided");

        const fileExt = file.name.split(".").pop();
        const fileName = `${Date.now()}.${fileExt}`;
        const filePath = `Properties/${fileName}`;
    
        const { data, error } = await supabase.storage
          .from("Listings")
          .upload(filePath, file, {
            cacheControl: "3600",
            upsert: false,
          });
    
        if (error) {
            showNotification({
                title: "Error",
                message: error.message || "An Error ocurred trying to upload images",
                color: "red"
            })
            return reject(error.message);
        }
    
        const { data: publicUrlData } = supabase.storage
            .from("Listings")
            .getPublicUrl(filePath);

        return resolve(publicUrlData.publicUrl);
    })
  };

  return { uploadImage };
};
