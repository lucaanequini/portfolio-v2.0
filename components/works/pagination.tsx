'use client'

import { useState } from "react"

import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"

import { WorkCard } from "./work-card"

const projects = [
    'jotion',
    'onebitflix',
    'onebitflix',
    'jotion',
    'onebitflix',
    'jotion'
]

export const WorksPagination = () => {
    const rowsPerPage = 2
    const [startIndex, setStartIndex] = useState(0)
    const [endIndex, setEndIndex] = useState(rowsPerPage)
    const [page, setPage] = useState(1)

    return (
        <div className="flex flex-col gap-1">
            <div className="flex flex-col gap-3">
                {projects.slice(startIndex, endIndex).map((work, index) => (
                    <WorkCard key={index} work={work} />
                ))}
            </div>
            <Pagination>
                <PaginationContent className="flex gap-x-2">
                    <PaginationItem>
                        <PaginationPrevious
                            onClick={() => {
                                setStartIndex(startIndex - rowsPerPage)
                                setEndIndex(endIndex - rowsPerPage)
                                setPage(page - 1)
                            }}
                            aria-disabled={startIndex <= 1}
                            tabIndex={startIndex <= 1 ? -1 : undefined}
                            className={
                                startIndex <= 1 ? "pointer-events-none opacity-50" : undefined
                            }
                        />
                    </PaginationItem>
                    <p className="font-bold text-blue">{page}</p>
                    <PaginationItem>
                        <PaginationNext
                            onClick={() => {
                                setStartIndex(startIndex + rowsPerPage)
                                setEndIndex(endIndex + rowsPerPage)
                                setPage(page + 1)
                            }}
                            aria-disabled={endIndex >= projects.length}
                            tabIndex={endIndex >= projects.length ? -1 : undefined}
                            className={
                                endIndex >= projects.length ? "pointer-events-none opacity-50" : undefined
                            }
                        />
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
        </div>
    )
}