export class Paginator {
  private page = 1;
  private total = 0;
  private currentPage = this.page;
  private hasMore = true;

  constructor(private readonly pageSize: number) {
    this.pageSize = pageSize;
  }

  next() {
    this.page += 1;
    this.currentPage += 1;
  }

  reset() {
    this.page = 1;
  }

  getParams() {
    return { page: this.page, pageSize: this.pageSize };
  }

  getTotal() {
    return this.total;
  }

  setTotal(total: number) {
    this.total = total;
  }

  setHasMore(value: boolean) {
    this.hasMore = value;
  }

  getHasMore() {
    return this.hasMore;
  }

  setCurrentPage(currentPage: number) {
    this.currentPage = currentPage;
  }
}
