import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-coreos-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiCoreosLine {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M9.45 4.41C8.32 4.79 7.25 5.44 6.34 6.34C3.22 9.47 3.22 14.53 6.34 17.66C9.47 20.78 14.53 20.78 17.66 17.66C18.62 16.69 19.29 15.54 19.66 14.32C16.26 15.78 12.41 16.3 8.11 15.89C7.4 11.76 7.85 7.94 9.45 4.41ZM11.9 4C11.23 5.22 10.71 6.47 10.36 7.77C11.85 7.8 13.34 8.39 14.47 9.53C15.55 10.6 16.13 11.98 16.22 13.39C17.55 13.04 18.81 12.57 20 11.95C19.99 10.64 19.66 9.33 19.02 8.15C18.66 7.5 18.2 6.89 17.66 6.34C17.08 5.77 16.44 5.3 15.74 4.93C14.55 4.29 13.22 3.98 11.9 4ZM4.93 19.07C1.02 15.17 1.02 8.83 4.93 4.93C8.83 1.02 15.17 1.02 19.07 4.93C22.98 8.83 22.98 15.17 19.07 19.07C15.17 22.98 8.83 22.98 4.93 19.07ZM9.95 9.78C9.76 11.14 9.73 12.55 9.87 14.01C11.4 14.07 12.85 13.99 14.23 13.79C14.24 12.76 13.85 11.73 13.06 10.94C12.21 10.09 11.06 9.7 9.95 9.78Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiCoreosLine;
