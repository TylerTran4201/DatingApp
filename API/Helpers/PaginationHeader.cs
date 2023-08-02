namespace API.Helpers
{
    public class PaginationHeader
    {

        public int CurrentPage { get; set; }
        public int ItemsPerPage { get; set; }
        public int TotalItems { get; set; }
        public int ToltalPages { get; set; }

        public PaginationHeader(int currentPage, int itemsPerPage, int totalItems, int toltalPages)
        {
            CurrentPage = currentPage;
            ItemsPerPage = itemsPerPage;
            TotalItems = totalItems;
            ToltalPages = toltalPages;
        }
    }
}