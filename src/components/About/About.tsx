import React from "react";

const About: React.FC = () => {
  return (
    <section
      id="domain"
      className="py-12 md:py-16 border-t border-slate-200/70 dark:border-slate-700 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          Research Domain
        </h2>
        <p className="mt-3 text-slate-600 dark:text-slate-300 leading-relaxed">
          Our research addresses the critical scarcity of AI-driven educational
          tools for the Sinhala language by developing an integrated assistant
          that can process uploaded learning resources, retrieve relevant
          content, reduce hallucinated answers, and generate responses grounded
          in source material.
        </p>

        <div className="space-y-10">
          {/* LEFT CONTENT */}
          <div>
            <h3 className="mt-4 text-xl font-bold text-slate-900 dark:text-white">
              Literature Survey
            </h3>

            <p className="mt-4 text-slate-600 dark:text-slate-300 leading-relaxed">
              Sinhala Natural Language Processing has improved in areas such as
              OCR, speech recognition, question answering, and text
              summarization. However, most existing studies focus on these areas
              as separate tasks. Our project addresses this gap by developing a
              complete Sinhala educational assistant that can process uploaded
              educational resources, retrieve relevant content, reduce
              hallucinated answers, and generate responses supported by the
              original source material.
            </p>

            <h3 className="mt-6 font-semibold text-slate-900 dark:text-white">
              Sinhala OCR and Document Processing
            </h3>
            <p className="mt-3 text-slate-600 dark:text-slate-300 leading-relaxed">
              Existing Sinhala OCR studies have mainly focused on printed text
              recognition and legacy font processing. Vasantharajan et al.
              adapted the Tesseract OCR engine for Tamil and Sinhala legacy
              fonts and showed that additional training can improve Sinhala OCR
              accuracy [1]. However, Tesseract still has limitations when
              processing complex Sinhala ligatures, noisy images, handwritten
              text, and real classroom documents.
            </p>
            <p className="mt-3 text-slate-600 dark:text-slate-300 leading-relaxed">
              To overcome this limitation, our project improves the OCR pipeline
              by using enhanced preprocessing and fine-tuned OCR models for
              Sinhala educational content. For handwritten text, we use and
              further fine-tune an existing Sinhala TrOCR model, since the
              available model is trained on a comparatively simple dataset and
              does not fully support complex handwritten notes and varied
              writing styles [2].
            </p>

            <h3 className="mt-6 font-semibold text-slate-900 dark:text-white">
              Sinhala Speech Recognition
            </h3>
            <p className="mt-3 text-slate-600 dark:text-slate-300 leading-relaxed">
              Sinhala speech recognition has also progressed with models such as
              Whisper. The existing Sinhala Whisper model supports Sinhala
              speech-to-text conversion [3]. However, general Sinhala speech
              models may not perform equally well for all regional accents, such
              as the Sinhala southern accent. This creates a limitation when
              building educational systems for students from different parts of
              Sri Lanka.
            </p>
            <p className="mt-3 text-slate-600 dark:text-slate-300 leading-relaxed">
              Our project addresses this issue by considering regional Sinhala
              pronunciation differences when handling voice-based learning
              interactions.
            </p>

            <h3 className="mt-6 font-semibold text-slate-900 dark:text-white">
              Sinhala Question Answering and Hallucination Control
            </h3>
            <p className="mt-3 text-slate-600 dark:text-slate-300 leading-relaxed">
              Existing Sinhala educational question answering systems have
              attempted to support school-based learning content. Kiridana and
              Dias developed a question answering system for the Sri Lankan
              school education system [4]. However, current systems still lack a
              complete Sinhala educational assistant that can retrieve answers
              from uploaded learning materials, check whether a question is
              answerable, and generate only source-supported responses.
            </p>
            <p className="mt-3 text-slate-600 dark:text-slate-300 leading-relaxed">
              This is important because general AI systems can sometimes
              generate incorrect or unsupported answers. Our project reduces
              this issue by using retrieval-based answering, where responses are
              generated only using the uploaded educational resources.
            </p>

            <h3 className="mt-6 font-semibold text-slate-900 dark:text-white">
              Sinhala Text Summarization
            </h3>
            <p className="mt-3 text-slate-600 dark:text-slate-300 leading-relaxed">
              Sinhala summarization research has also been explored in the
              education domain. Rathnayake et al. introduced “Talking Books,” a
              Sinhala abstractive summarization approach for Sinhala textbooks
              [5]. However, this work mainly focuses on textbook summarization
              and does not provide summaries adapted to different student grade
              levels.
            </p>
            <p className="mt-3 text-slate-600 dark:text-slate-300 leading-relaxed">
              Our project extends this idea by supporting adaptive
              summarization, where educational content can be summarized
              according to the student’s grade level and learning needs.
            </p>

            <h3 className="mt-6 font-semibold text-slate-900 dark:text-white">
              Sinhala Answer Evaluation
            </h3>
            <p className="mt-3 text-slate-600 dark:text-slate-300 leading-relaxed">
              Automatic answer evaluation is still limited in Sinhala
              educational NLP. Most existing work focuses on OCR, speech
              recognition, question answering, or summarization, but there is
              less research on evaluating Sinhala student answers semantically.
            </p>
            <p className="mt-3 text-slate-600 dark:text-slate-300 leading-relaxed">
              In our project, answer evaluation is performed using semantic
              similarity techniques such as XLM-R. This allows the system to
              compare a student’s answer with the expected answer based on
              meaning, rather than checking only exact word matches.
            </p>

            <h3 className="mt-6 font-semibold text-slate-900 dark:text-white">
              Research Gap
            </h3>
            <p className="mt-3 text-slate-600 dark:text-slate-300 leading-relaxed">
              Based on the reviewed literature, existing Sinhala NLP systems do
              not provide a complete solution for Sinhala-medium education.
              Current systems mainly focus on individual tasks such as OCR,
              speech recognition, question answering, or summarization. They do
              not fully support uploaded educational resource processing,
              source-grounded answer generation, hallucination control,
              grade-level summarization, regional Sinhala voice input, and
              semantic answer evaluation in one integrated platform.
            </p>
            <p className="mt-3 text-slate-600 dark:text-slate-300 leading-relaxed">
              Therefore, this project focuses on building an integrated Sinhala
              educational assistant that supports Sinhala-medium students
              through improved OCR, speech input, source-based question
              answering, adaptive summarization, and answer evaluation.
            </p>

            <h3 className="mt-6 font-semibold text-slate-900 dark:text-white">
              Research Problem and Objectives
            </h3>
            <ul className="mt-3 grid sm:grid-cols-1 gap-3 text-sm text-slate-700 dark:text-slate-300">
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-sky-500"></span>
                <span>
                  <strong>Problem Statement:</strong> Providing a reliable,
                  localized AI assistant that can process educational resources,
                  answer from source material, handle diverse Sinhala speech,
                  and support semantic evaluation for student responses.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-indigo-500"></span>
                <span>
                  <strong>Main Objective:</strong> To develop a comprehensive
                  Sinhala educational ecosystem using improved OCR, source-based
                  question answering, adaptive summarization, and answer
                  evaluation.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-fuchsia-500"></span>
                <span>
                  <strong>Sub-Objective:</strong> Improve handwritten Sinhala
                  text recognition, support regional speech input, and generate
                  answers that remain grounded in uploaded learning materials.
                </span>
              </li>
            </ul>

            <h3 className="mt-6 font-semibold text-slate-900 dark:text-white">
              References
            </h3>
            <ul className="mt-3 grid sm:grid-cols-1 gap-3 text-sm text-slate-700 dark:text-slate-300">
              <li className="flex items-start gap-2">
                <span className="mt-1 shrink-0 font-semibold text-sky-600 dark:text-sky-400">
                  [1]
                </span>
                <span>
                  C. Vasantharajan, L. Tharmalingam, and U. Thayasivam,
                  “Adapting the Tesseract Open Source OCR Engine for Tamil and
                  Sinhala Legacy Fonts and Creating a Parallel Corpus for Tamil
                  Sinhala English,” in Proc. 2022 International Conference on
                  Asian Language Processing (IALP), Singapore, 2022, pp.
                  143–149, doi: 10.1109/IALP57159.2022.9961304.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 shrink-0 font-semibold text-indigo-600 dark:text-indigo-400">
                  [2]
                </span>
                <span>
                  E. Jayasundara, “TrOCR-Sinhala-finetuned,” Hugging Face.
                  [Online]. Available:
                  https://huggingface.co/eshangj/TrOCR-Sinhala-finetuned
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 shrink-0 font-semibold text-fuchsia-600 dark:text-fuchsia-400">
                  [3]
                </span>
                <span>
                  Lingalingeswaran, “whisper-small-sinhala,” Hugging Face.
                  [Online]. Available:
                  https://huggingface.co/Lingalingeswaran/whisper-small-sinhala
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 shrink-0 font-semibold text-emerald-600 dark:text-emerald-400">
                  [4]
                </span>
                <span>
                  Y. M. W. H. M. R. P. J. R. B. Kiridana and G. Dias,
                  “Developing a question answering system for the Sri Lankan
                  school education system,” Proc. Applied Data Science and
                  Artificial Intelligence Symposium, Department of Computer
                  Science and Engineering, University of Moratuwa, 2025.
                  [Online]. Available:
                  https://dl.lib.uom.lk/items/293e2700-6136-449b-9c5c-8f3243f95754
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 shrink-0 font-semibold text-fuchsia-600 dark:text-fuchsia-400">
                  [5]
                </span>
                <span>
                  B. R. M. S. R. B. Rathnayake, K. Manathunga, and D.
                  Kasthurirathna, “Talking Books”: A Sinhala abstractive text
                  summarization approach for Sinhala textbooks,” in Proc. 2023
                  IEEE 8th International Conference for Convergence in
                  Technology (I2CT), 2023. [Online]. Available:
                  https://ieeexplore.ieee.org/document/10126205
                </span>
              </li>
            </ul>
            <div className="mt-10 glass rounded-2xl p-6 shadow-soft border border-slate-200/60 bg-white dark:bg-slate-800 transition-colors">
              <h3 className="font-bold text-slate-900 dark:text-white">
                Methodology and Technologies
              </h3>

              <dl className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div>
                  <dt className="text-slate-500 dark:text-slate-400">
                    Workflow
                  </dt>
                  <dd className="font-semibold dark:text-slate-100">
                    OCR and document processing → retrieval-based answering →
                    adaptive summarization → semantic answer evaluation.
                  </dd>
                </div>

                <div>
                  <dt className="text-slate-500 dark:text-slate-400">
                    Tech Stack
                  </dt>
                  <dd className="font-semibold dark:text-slate-100">
                    Tesseract, TrOCR, Whisper, XLM-R, FastAPI, pgvector.
                  </dd>
                </div>

                <div>
                  <dt className="text-slate-500 dark:text-slate-400">
                    Data Sources
                  </dt>
                  <dd className="font-semibold dark:text-slate-100">
                    Uploaded educational resources, Sinhala textbooks,
                    handwritten notes, and speech samples.
                  </dd>
                </div>

                <div>
                  <dt className="text-slate-500 dark:text-slate-400">
                    Validation
                  </dt>
                  <dd className="font-semibold dark:text-slate-100">
                    WER/CER metrics, semantic similarity, and source-grounded
                    response checking.
                  </dd>
                </div>
              </dl>

              <div className="mt-4 flex flex-wrap gap-2">
                <span className="tag bg-sky-100 text-sky-700 dark:bg-sky-900/30 dark:text-sky-300">
                  OCR Processing
                </span>
                <span className="tag bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300">
                  Regional Speech Input
                </span>
                <span className="tag bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300">
                  Source-Grounded QA
                </span>
                <span className="tag bg-fuchsia-100 text-fuchsia-700 dark:bg-fuchsia-900/30 dark:text-fuchsia-300">
                  Adaptive Summarization
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
