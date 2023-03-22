import React from "react";
import CreatePageTitle from "../../../components/admin/CreatePageTitle";
import ChapterItem from "./ChapterItem";

const BookChapter = () => {
  return (
    <section className="">
      <h2 className="text-center text-xl font-semibold text-textColor1 mb-8">
        Chapter
      </h2>
      <div className="rounded-lg border border-slate-600 p-4">
        <div className="mb-8">
          <CreatePageTitle buttonTitle="Create New" title="Content" />
        </div>
        <ul className="flex flex-col gap-4">
          <ChapterItem />
          <ChapterItem />
        </ul>
      </div>
    </section>
  );
};

export default BookChapter;
