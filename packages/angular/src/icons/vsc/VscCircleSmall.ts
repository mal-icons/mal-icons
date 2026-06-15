import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-vsc-circle-small",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class VscCircleSmall {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M8.83 8.56C8.72 8.72 8.57 8.85 8.38 8.92C8.2 9 8 9.02 7.8 8.98C7.61 8.94 7.43 8.85 7.29 8.71C7.15 8.57 7.06 8.39 7.02 8.19C6.98 8 7 7.8 7.08 7.62C7.15 7.43 7.28 7.28 7.44 7.17C7.61 7.06 7.8 7 8 7C8.27 7 8.52 7.11 8.71 7.29C8.89 7.48 9 7.73 9 8C9 8.2 8.94 8.39 8.83 8.56ZM9.66 9.11C9.88 8.78 10 8.4 10 8C10 7.47 9.79 6.96 9.41 6.59C9.04 6.21 8.53 6 8 6C7.6 6 7.22 6.12 6.89 6.34C6.56 6.56 6.3 6.87 6.15 7.23C6 7.6 5.96 8 6.04 8.39C6.12 8.78 6.31 9.13 6.59 9.41C6.87 9.69 7.22 9.88 7.61 9.96C8 10.04 8.4 10 8.77 9.85C9.13 9.7 9.44 9.44 9.66 9.11Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default VscCircleSmall;
