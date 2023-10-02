import { APIError } from "./error";
import openSeaCLient from "./config";

export const itemAPI = {
  getNfts: async (slug: string, limit: number) => {
    let Nfts;
    try {
      const output = await openSeaCLient.get(
        `v2/collection/${slug}/nfts?limit=${limit}`
      );
      if (output && output.data && output.status === 200) {
        Nfts = output.data.nfts;
      }
    } catch (error: any) {
      const output = error.response;
      const message = output?.data?.error?.message
        ? output?.data?.error?.message
        : "unable to get NFT Items";
      throw new APIError(message, output?.status);
    }
    return Nfts;
  },
  getNftData: async (contract: string, id: string) => {
    let data;
    try {
      const output = await openSeaCLient.get(
        `v2/orders/ethereum/seaport/listings?asset_contract_address=${contract}&token_ids=${id}&order_by=created_date&order_direction=desc`
      );
      if (output && output.data && output.status === 200) {
        console.log(output.data);
        data = output.data.orders;
      }
    } catch (error: any) {
      const output = error.response;
      const message = output?.data?.error?.message
        ? output?.data?.error?.message
        : "unable to get NFT Items";
      throw new APIError(message, output?.status);
    }
    return data;
  },
};
