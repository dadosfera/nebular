import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NbTagComponent } from '@beast/theme';

import { trees } from './trees-list';

@Component({
  template: `
    <nb-card>
      <nb-card-body>
        <nb-tag-list (tagRemove)="onTagRemove($event)">
          <nb-tag removable *ngFor="let tree of trees" [text]="tree"></nb-tag>
        </nb-tag-list>
      </nb-card-body>
    </nb-card>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TagRemovableComponent {
  trees = trees;

  onTagRemove(tagToRemove: NbTagComponent): void {
    this.trees = this.trees.filter((t) => t !== tagToRemove.text);
  }
}
