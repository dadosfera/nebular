import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NbMenuItem } from '@beast/theme';

@Component({
  selector: 'nb-menu-badge',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './menu-badge.component.html',
  styleUrls: ['./menu-badge.component.scss'],
})
export class MenuBadgeComponent {
  items: NbMenuItem[] = [
    {
      title: 'Profile',
      expanded: true,
      badge: {
        text: '30',
        status: 'primary',
      },
      children: [
        {
          title: 'Messages',
          badge: {
            text: '99+',
            status: 'danger',
          },
        },
        {
          title: 'Notifications',
          badge: {
            dotMode: true,
            status: 'warning',
          },
        },
        {
          title: 'Emails',
          badge: {
            text: 'new',
            status: 'success',
          },
        },
      ],
    },
  ];
}
