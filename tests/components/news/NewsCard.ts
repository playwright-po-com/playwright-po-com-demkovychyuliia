import { type Locator, type Page } from '@playwright/test';

import { BaseComponent } from '../../pages/base/BaseComponent';

export class NewsCard extends BaseComponent {
  public readonly DETAILS_LINK_LABEL = 'Детальніше' as const;

  private readonly title: Locator;
  private readonly date: Locator;
  private readonly detailsLink: Locator;

  constructor(page: Page, cardRoot: Locator) {
    super(page, cardRoot);

    this.title = this.root.locator('#newsTitle');
    this.date = this.root.locator('#newsDate');
    this.detailsLink = this.root.locator('#detailButton a');
  }

  async openDetails(): Promise<void> {
    await this.detailsLink.click();
  }

  getTitleLocator(): Locator {
    return this.title;
  }

  getDateLocator(): Locator {
    return this.date;
  }

  getDetailsLink(): Locator {
    return this.detailsLink;
  }
}