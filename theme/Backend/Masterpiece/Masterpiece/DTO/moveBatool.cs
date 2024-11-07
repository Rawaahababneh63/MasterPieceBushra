namespace Masterpiece.DTO
{
    public class MoveBatool
    {
        public class ProductDTO
        {
            public int ProductId { get; set; }
            public string Name { get; set; }
            public string Image { get; set; }
            public decimal Price { get; set; }
            public decimal PriceWithDiscount { get; set; }
        }

        public class CartItemDTO
        {
            public int CartId { get; set; }
            public int CartItemId { get; set; }
            public ProductDTO Product { get; set; }
            public int Quantity { get; set; }
        }

        public class AddCartItemsRequestDTO
        {
            public List<CartItemDTO> CartItems { get; set; }
        }
    }
}
