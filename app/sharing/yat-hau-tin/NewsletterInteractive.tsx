"use client";

import React, { useState } from "react";

interface Issue {
  id: number;
  vol: string;
  title: string;
  date: string;
  category: string;
  content: string;
  image?: string; // 1. Added optional image field
}

interface NewsletterInteractiveProps {
  issues: Issue[];
}

export default function NewsletterInteractive({ issues }: NewsletterInteractiveProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("全部");
  const [activeModalIssue, setActiveModalIssue] = useState<Issue | null>(null);
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState<boolean>(false);

  const categories = [
    { title: "牧者隨筆", icon: "✍️", desc: "牧者的心聲分享、靈修領受與教會牧養反思。" },
    { title: "會友園地", icon: "🌱", desc: "弟兄姊妹的生活見證、感恩分享與創作體驗。" },
    { title: "小徑靈光", icon: "💡", desc: "讀經亮光、信仰思考及日常生活中的靈思巧悟。" },
    { title: "靈命札記", icon: "📖", desc: "專題研讀、靈修心得與信仰成長筆記。" },
  ];

  const filteredIssues = selectedCategory === "全部" 
    ? issues 
    : issues.filter(issue => issue.category === selectedCategory);

  return (
    <>
      {/* Category Cards Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">欄目分類</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat) => (
              <div
                key={cat.title}
                onClick={() => setSelectedCategory(cat.title)}
                className={`cursor-pointer p-6 rounded-xl border transition-all text-center flex flex-col justify-between ${
                  selectedCategory === cat.title
                    ? "bg-blue-50 border-blue-600 shadow-md ring-2 ring-blue-500/20"
                    : "bg-white border-slate-100 hover:shadow-lg hover:-translate-y-1"
                }`}
              >
                <div>
                  <div className="text-4xl mb-3">{cat.icon}</div>
                  <h3 className="text-xl font-bold mb-2 text-slate-900">{cat.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{cat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Bar & Issues Grid Section */}
      <section className="bg-white py-12 px-4 border-t border-slate-100">
        <div className="container mx-auto max-w-6xl">
          {/* Header & Quick Filter Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
            <h2 className="text-2xl font-bold text-slate-900">家訊期數</h2>
            
            <div className="flex flex-wrap justify-center gap-2">
              <button
                onClick={() => setSelectedCategory("全部")}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === "全部"
                    ? "bg-blue-600 text-white"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                顯示全部 ({issues.length})
              </button>
              {categories.map((cat) => (
                <button
                  key={cat.title}
                  onClick={() => setSelectedCategory(cat.title)}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === cat.title
                      ? "bg-blue-600 text-white"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  {cat.title}
                </button>
              ))}
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredIssues.map((issue) => (
              <article key={issue.id} className="bg-slate-50 border border-slate-200 rounded-lg overflow-hidden flex flex-col shadow-sm">
                {/* 2. Dynamic Image source with fallback handling */}
                <img 
                  src={issue.image || "/images/yht/yht-001.png"} 
                  alt={issue.title} 
                  className="w-full h-44 object-cover"
                  onError={(e) => {
                    // Fallback to a default image if file path is missing or fails to load
                    (e.target as HTMLImageElement).src = "https://via.placeholder.com/400x200?text=No+Image";
                  }}
                />
                <div className="p-5 flex flex-col flex-grow">
                  <span className="text-xs font-semibold text-blue-600 mb-1">{issue.category}</span>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">一口田 Vol. {issue.vol} - {issue.title}</h3>
                  <p className="text-xs text-slate-400 mb-4">發布日期：{issue.date}</p>
                  <button
                    onClick={() => setActiveModalIssue(issue)}
                    className="mt-auto text-left text-blue-600 hover:text-blue-800 font-semibold text-sm cursor-pointer"
                  >
                    閱讀全文 &rarr;
                  </button>
                </div>
              </article>
            ))}
          </div>

          {/* Submission Call-To-Action */}
          <div className="bg-blue-50 border border-blue-100 rounded-2xl p-8 text-center mt-16 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-blue-900 mb-2">歡迎投稿</h3>
            <p className="text-slate-600 mb-6">誠邀弟兄姊妹文字事奉，分享神在你生命中的作為與恩典。</p>
            <button
              onClick={() => setIsSubmitModalOpen(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-full transition-colors cursor-pointer"
            >
              立即投稿 / 查看詳情
            </button>
          </div>
        </div>
      </section>

      {/* Reader Modal */}
      {activeModalIssue && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-lg w-full p-6 shadow-2xl relative">
            <h3 className="text-xl font-bold text-slate-900 mb-2">
              一口田 Vol. {activeModalIssue.vol} - {activeModalIssue.title}
            </h3>
            <p className="text-xs text-slate-400 mb-4">
              {activeModalIssue.date} | {activeModalIssue.category}
            </p>
            <div className="text-slate-700 text-sm leading-relaxed mb-6">
              {activeModalIssue.content}
            </div>
            <button
              onClick={() => setActiveModalIssue(null)}
              className="w-full bg-slate-200 hover:bg-slate-300 text-slate-800 font-medium py-2 rounded-lg cursor-pointer"
            >
              關閉
            </button>
          </div>
        </div>
      )}

      {/* Submission Modal */}
      {isSubmitModalOpen && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-md w-full p-6 shadow-2xl relative">
            <h3 className="text-xl font-bold text-slate-900 mb-4">投稿表格</h3>
            <form 
              onSubmit={(e) => { 
                e.preventDefault(); 
                alert("已成功提交！"); 
                setIsSubmitModalOpen(false); 
              }} 
              className="space-y-4"
            >
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1">姓名 / 筆名</label>
                <input type="text" required className="w-full border border-slate-300 rounded p-2 text-sm" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1">文章標題</label>
                <input type="text" required className="w-full border border-slate-300 rounded p-2 text-sm" />
              </div>
              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setIsSubmitModalOpen(false)}
                  className="px-4 py-2 text-sm text-slate-600 hover:bg-slate-100 rounded cursor-pointer"
                >
                  取消
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-sm bg-blue-600 text-white rounded hover:bg-blue-700 cursor-pointer"
                >
                  提交
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}