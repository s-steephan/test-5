import { ClientType, IAPIRequestData, IAPIResponseData } from "./types"

const callClient1 = async (data: IAPIRequestData): Promise<IAPIResponseData> => {
    return { secretKey: "hello" }
}

const callClient2 = async (data: IAPIRequestData): Promise<IAPIResponseData> => {
    return { secretKey: "hello world" }
}

export const getResponse = async (clientType: ClientType, data: IAPIRequestData): Promise<null | IAPIResponseData> => {
    let response = null;

    switch (clientType) {
        case ClientType.client1:
            response = await callClient1(data);
            break;

        case ClientType.client2:
            response = await callClient2(data);
            break;
    
        default:
            break;
    }

    return response;
}
