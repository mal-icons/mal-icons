import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-wellfound",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiWellfound {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M24 8.13c0.06-1.38-1.61-2.38-2.79-1.66-1.230.6-1.32 2.52-0.16 3.23 1.20.86 3-0.09 2.95-1.57zm0 7.75c0.06-1.38-1.61-2.38-2.79-1.66-1.230.6-1.32 2.52-0.16 3.23 1.20.86 3-0.09 2.95-1.57zm-20.5 1.76L0 6.36h3.26l2.07 8.11 2.25-8.11h3.27l2.24 8.11 2.07-8.11h3.26l-3.54 11.27H11.39c-0.73-2.71-1.46-5.43-2.19-8.14l-2.23 8.14H3.5z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiWellfound;
