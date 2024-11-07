namespace Masterpiece.DTO
{
    public class DTOrder

    {
       
            public int OrderId { get; set; }
            public int? UserId { get; set; }
        public string? UserName { get; set; }

        public string TransactionId { get; set; }
            public string? Status { get; set; }
            public decimal? Amount { get; set; }
            public DateOnly? Date { get; set; }
        public List<OrderItemDTOemail> OrderItems { get; set; } 
    }
}
    



