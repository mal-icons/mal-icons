import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-ancient-gate-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiAncientGateLine {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M6.96 3H17.04C17.28 4.72 18.76 6 20.5 6 20.83 6 21.16 5.95 21.48 5.86 21.3 7.64 19.79 9 18 9H6C4.21 9 2.7 7.64 2.52 5.86 2.84 5.95 3.17 6 3.5 6 5.24 6 6.72 4.72 6.96 3ZM16.9 6.66C16.34 6.17 15.9 5.62 15.59 5H8.41C8.1 5.62 7.66 6.17 7.1 6.66 6.96 6.78 6.81 6.89 6.67 7H17.33C17.19 6.89 17.04 6.78 16.9 6.66ZM21.5 11.5C22.04 11.5 22.54 11.36 22.98 11.11 22.99 11.24 23 11.37 23 11.5 23 12.9 22.18 14.1 21 14.66V21H14V19C14 17.9 13.1 17 12 17 10.9 17 10 17.9 10 19V21H3V14.66C1.82 14.1 1 12.9 1 11.5 1 11.37 1.01 11.24 1.02 11.11 1.46 11.36 1.96 11.5 2.5 11.5 3.61 11.5 4.58 10.9 5.1 10H18.9C19.42 10.9 20.39 11.5 21.5 11.5ZM18.96 12.81C18.58 12.58 18.23 12.31 17.93 12H6.07C5.77 12.31 5.42 12.58 5.04 12.81 4.83 12.93 4.63 13.03 4.42 13.12L5 13.4V19H8C8 17.9 8.39 16.95 9.17 16.17 9.95 15.39 10.9 15 12 15 13.1 15 14.05 15.39 14.83 16.17 15.61 16.95 16 17.9 16 19H19V13.4L19.58 13.12C19.37 13.03 19.17 12.93 18.96 12.81Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiAncientGateLine;
