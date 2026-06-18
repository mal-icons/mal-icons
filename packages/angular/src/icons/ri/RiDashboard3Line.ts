import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-dashboard-3-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiDashboard3Line {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2ZM12 4C7.58 4 4 7.58 4 12C4 16.42 7.58 20 12 20C16.42 20 20 16.42 20 12C20 7.58 16.42 4 12 4ZM15.83 7.34C16.07 7.17 16.39 7.2 16.6 7.4C16.8 7.61 16.83 7.93 16.66 8.16C14.48 11.21 13.28 12.84 13.06 13.06C12.47 13.65 11.53 13.65 10.94 13.06C10.35 12.47 10.35 11.53 10.94 10.94C11.31 10.57 12.94 9.37 15.83 7.34ZM17.5 11C18.05 11 18.5 11.45 18.5 12C18.5 12.55 18.05 13 17.5 13C16.95 13 16.5 12.55 16.5 12C16.5 11.45 16.95 11 17.5 11ZM6.5 11C7.05 11 7.5 11.45 7.5 12C7.5 12.55 7.05 13 6.5 13C5.95 13 5.5 12.55 5.5 12C5.5 11.45 5.95 11 6.5 11ZM8.82 7.4C9.21 7.79 9.21 8.43 8.82 8.82C8.43 9.21 7.79 9.21 7.4 8.82C7.01 8.43 7.01 7.79 7.4 7.4C7.79 7.01 8.43 7.01 8.82 7.4ZM12 5.5C12.55 5.5 13 5.95 13 6.5C13 7.05 12.55 7.5 12 7.5C11.45 7.5 11 7.05 11 6.5C11 5.95 11.45 5.5 12 5.5Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiDashboard3Line;
