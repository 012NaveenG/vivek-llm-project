import * as pdfjsLib from "pdfjs-dist";
import mammoth from "mammoth";
import pdfjsWorker from "pdfjs-dist/build/pdf.worker.min?url";

pdfjsLib.GlobalWorkerOptions.workerSrc = pdfjsWorker;

const readFileContent = async (file: File) => {
    const ext = file.name.split(".").pop()?.toLowerCase();

    if (ext === "pdf") {
        return await extractTextFromPDF(file);
    } else if (ext === "doc" || ext === "docx") {
        return await extractTextFromDOCX(file);
    } else {
        throw new Error("Unsupported file format");
    }
};

const extractTextFromPDF = async (file: File) => {
    const arrayBuffer = await file.arrayBuffer();
    const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
    let text = "";

    for (let i = 1; i <= pdf.numPages; i++) {
        const page = await pdf.getPage(i);
        const content = await page.getTextContent();
        text += content.items.map((item: any) => item.str).join(" ") + "\n";
    }
    return text;
};

const extractTextFromDOCX = async (file: File) => {
    const arrayBuffer = await file.arrayBuffer();
    const result = await mammoth.extractRawText({ arrayBuffer });
    return result.value;
};
const extractNameAndSummary = (text: string) => {
    // Name: (but not Father's Name or Mother's Name)
    const nameMatch = text.match(
        /\bName\s*[:\-]?\s*(?!Father'?s Name|Mother'?s Name)(.+)/i
    );

    // Summary or Career Objective
    const summaryMatch =
        text.match(/Summary\s*[:\-]?\s*(.+)/i) ||
        text.match(/Career Objective\s*[:\-]?\s*(.+)/i);

    return {
        name: nameMatch ? nameMatch[1].trim() : null,
        summary: summaryMatch ? summaryMatch[1].trim() : null,
    };
};


export { readFileContent, extractNameAndSummary }