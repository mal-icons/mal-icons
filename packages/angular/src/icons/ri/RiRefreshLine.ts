import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-refresh-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiRefreshLine {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M5.46 4.43C7.22 2.92 9.5 2 12 2C17.52 2 22 6.48 22 12C22 14.14 21.33 16.12 20.19 17.74L17 12H20C20 7.58 16.42 4 12 4C9.85 4 7.9 4.85 6.46 6.23L5.46 4.43ZM18.54 19.57C16.78 21.08 14.5 22 12 22C6.48 22 2 17.52 2 12C2 9.86 2.67 7.88 3.81 6.26L7 12H4C4 16.42 7.58 20 12 20C14.15 20 16.1 19.15 17.54 17.77L18.54 19.57Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiRefreshLine;
