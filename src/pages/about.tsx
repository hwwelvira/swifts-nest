/* eslint-disable unused-imports/no-unused-imports */
import clsx from 'clsx';
import * as React from 'react';

import { trackEvent } from '@/lib/analytics';
import useLoaded from '@/hooks/useLoaded';

import Accent from '@/components/Accent';
import FeishuDocEmbed from '@/components/FeishuDocEmbed';
import CloudinaryImg from '@/components/images/CloudinaryImg';
import LaTeX from '@/components/LaTeX';
import Layout from '@/components/layout/Layout';
import CustomLink from '@/components/links/CustomLink';
import Seo from '@/components/Seo';
import TechStack from '@/components/TechStack';
import Tooltip from '@/components/Tooltip';

export default function AboutPage() {
  const isLoaded = useLoaded();

  return (
    <Layout>
      <Seo
        templateTitle='About'
        description='Sharing Wisdom, Innovation & Futuristic Technologies (S.W.I.F.T.)'
      />

      <main>
        <section className={clsx(isLoaded && 'fade-in-start')}>
          <div className='layout pt-20'>
            <h2 data-fade='0'>关于 👋</h2>
            <h1 className='mt-1' data-fade='1'>
              <Accent>BJUT-SWIFT</Accent>
            </h1>
            <div className='mt-4' data-fade='2'>
              <article className='prose dark:prose-invert'>
                <p data-fade='3' className='text-lg font-medium'>
                  本组织由工大学生自发组成，愿景是：
                  <br />
                  <span className='ml-4'>
                    Sharing Wisdom, Innovation & Futuristic Technologies
                    (S.W.I.F.T.)
                  </span>{' '}
                  ✨
                </p>

                <h3 className='mt-8 flex items-center gap-2' data-fade='4'>
                  已有项目 <span className='text-primary-500'>📚</span>
                </h3>

                <h4 className='mt-4 flex items-center gap-2' data-fade='5'>
                  <CustomLink href='https://helper.bjutswift.cn'>
                    BJUT-Helper 📖
                  </CustomLink>
                </h4>
                <p data-fade='5'>全称为：北京工业大学课程资源共享计划。</p>
                <p data-fade='5'>
                  本项目旨在整合分享全校课程近年的试题、笔记、以及有限开卷等各类学习资料。欢迎前来阅读、贡献本项目！希望本平台能够助你在前人努力的基础上走得更远。
                </p>

                <h4 className='mt-4 flex items-center gap-2' data-fade='6'>
                  <CustomLink href='https://github.com/bjut-swift/BJUT-PPT-template'>
                    北京工业大学PPT模版 🎨
                  </CustomLink>
                </h4>
                <p data-fade='6'>
                  针对北京工业大学视觉形象识别系统，设计了这款PPT模版，欢迎北工大学子前来下载使用。提供4:3和16:9两种大小。
                </p>
                <p data-fade='6'>
                  同时，在{' '}
                  <code className='rounded bg-gray-200 px-1 dark:bg-gray-700'>
                    \BJUT矢量图
                  </code>{' '}
                  路径下提供了包括校训、校标、校徽等在内的BJUT的svg素材，可以二次开发使用。
                </p>

                <h4 className='mt-4 flex items-center gap-2' data-fade='7'>
                  <CustomLink href='https://github.com/bjut-swift/BJUTLATEX'>
                    硕士论文 <LaTeX>\LaTeX</LaTeX> 模板 📝
                  </CustomLink>
                </h4>
                <p data-fade='7'>
                  希望借助此模版，使用者能将本就在毕业季不多的精力专注于文字而不是行距、行高、段落等繁琐的格式上。
                </p>

                <p data-fade='3'>
                  欢迎查看我们的{' '}
                  <CustomLink
                    href='https://github.com/bjut-swift'
                    className='hover:text-primary-500'
                  >
                    GitHub 主页 <span className='inline-block'>🚀</span>
                  </CustomLink>{' '}
                  来深入了解我们的工作。
                </p>
                {/* <FeishuDocEmbed docUrl='https://fafmkoqaxys.feishu.cn/docx/WqsqdqB6dof3AAxzjmncux8KnTd' /> */}
              </article>
            </div>
          </div>
        </section>

        <section>
          <div className='layout mt-16'>
            <h2 className='flex items-center gap-2'>
              联系我们 <span>📬</span>
            </h2>
            <article className='prose mt-4 dark:prose-invert'>
              <p className='text-lg'>
                我们需要大家的力量，随时欢迎联系我们以申请加入组织、发起立项、反馈意见。
              </p>
            </article>
          </div>
        </section>

        <section>
          <div className='layout mt-16'>
            <h3 className='flex items-center gap-2'>
              本站所用的技术栈 <span className='text-primary-500'>⚡</span>
            </h3>
            <figure className='mt-8'>
              <TechStack />
            </figure>
          </div>
        </section>
      </main>
    </Layout>
  );
}
