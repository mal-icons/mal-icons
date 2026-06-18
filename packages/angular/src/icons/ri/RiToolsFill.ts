import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-tools-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiToolsFill {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M5.33 3.27C6.56 2.83 7.99 3.11 8.98 4.09C9.97 5.08 10.24 6.51 9.8 7.75L20.65 18.59L18.53 20.71L7.68 9.87C6.45 10.31 5.02 10.03 4.03 9.04C3.04 8.06 2.77 6.63 3.21 5.39L5.44 7.63C6.03 8.22 6.98 8.22 7.57 7.63C8.15 7.04 8.15 6.09 7.57 5.51L5.33 3.27ZM15.7 5.16L18.88 3.39L20.29 4.8L18.53 7.98L16.76 8.34L14.64 10.46L13.22 9.04L15.34 6.92L15.7 5.16ZM8.63 12.93L10.75 15.05L5.8 20C5.21 20.59 4.26 20.59 3.68 20C3.12 19.45 3.09 18.58 3.58 17.99L3.68 17.88L8.63 12.93Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiToolsFill;
