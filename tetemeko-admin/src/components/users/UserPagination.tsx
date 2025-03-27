import { Button } from "@/components/ui/button";

interface UserPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function UserPagination({ currentPage, totalPages, onPageChange }: UserPaginationProps) {
  return (
    <div className="flex justify-between items-center mt-4">
      <Button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1} variant="outline">
        Previous
      </Button>
      <span className="text-gray-600">Page {currentPage} of {totalPages}</span>
      <Button onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages} variant="outline">
        Next
      </Button>
    </div>
  );
}
