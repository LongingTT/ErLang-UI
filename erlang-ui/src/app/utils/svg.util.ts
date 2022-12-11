import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

export const loadSvgResources = (
  iconRegistry: MatIconRegistry,
  sanitizer: DomSanitizer
) => {
  const imgPath = 'assets/img';
  const sidebarImgPath = `${imgPath}/sidebar`;
  iconRegistry.addSvgIcon(
    'erlang_dog',
    sanitizer.bypassSecurityTrustResourceUrl(`${imgPath}/erlang_dog.svg`)
  );
  iconRegistry.addSvgIcon(
    'erlang_projects',
    sanitizer.bypassSecurityTrustResourceUrl(
      `${sidebarImgPath}/erlang_projects.svg`
    )
  );
  iconRegistry.addSvgIcon(
    'erlang_tasks',
    sanitizer.bypassSecurityTrustResourceUrl(
      `${sidebarImgPath}/erlang_tasks.svg`
    )
  );
  iconRegistry.addSvgIcon(
    'erlang_teams',
    sanitizer.bypassSecurityTrustResourceUrl(
      `${sidebarImgPath}/erlang_teams.svg`
    )
  );
  iconRegistry.addSvgIcon(
    'erlang_calendar',
    sanitizer.bypassSecurityTrustResourceUrl(
      `${sidebarImgPath}/erlang_calendar.svg`
    )
  );
};
