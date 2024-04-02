import prismaClient from "../../prisma";

interface ItemRequest {
    order_id: string;
    product_id: string;
    amount: number;
} 

class AddItemService {
    async execute({ order_id, product_id, amount }: ItemRequest) {
        
        const item = await prismaClient.item.create({
            data: {
                product_id,
                order_id,
                amount
            }
        });
        return item;
    }
}

export { AddItemService }