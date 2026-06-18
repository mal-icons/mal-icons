import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-dedge",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiDedge {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M19.99 0v8.34C16.09 2.93 7.61 2.8 3.74 8.73-0.52 15.27 4.19 23.99 12 24h0c5.450 9.87-4.43 9.87-9.88V0Zm-7.99 6.14a8 8 0 0 1 7.99 7.99 7.99 7.99 0 0 1-4.93 7.38 7.99 7.99 0 0 1-8.71-1.73 7.99 7.99 0 0 1-1.73-8.71 7.99 7.99 0 0 1 7.38-4.93Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiDedge;
