import { type Locator, type Page } from '@playwright/test';

import { ROUTES } from '../config/app.config';

import { SearchablePage } from './base/SearchablePage';
export class NewsDetailPage extends SearchablePage {
  private readonly newsPage: Locator;
  private readonly title: Locator;
  private readonly date: Locator;
  private readonly content: Locator;

  constructor(page: Page) {
    super(page);

    this.newsPage = page.locator('.news-page');
    this.title = page.locator('#major-title');
    this.date = page.locator('.content-title');
    this.content = page.locator('.content-text');
  }

  async gotoNewsDetailPage(id: string | number): Promise<void> {
    await this.open(ROUTES.newsDetail(id));
  }

  getNewsPageLocator(): Locator {
    return this.newsPage;
  }

  getTitleLocator(): Locator {
    return this.title;
  }

  getDateLocator(): Locator {
    return this.date;
  }

  getContentLocator(): Locator {
    return this.content;
  }
}