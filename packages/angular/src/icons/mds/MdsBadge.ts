import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mds-badge",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdsBadge {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M22 7h-7V2H9v5H2v15h20V7zM9 12c0.83 0 1.50.67 1.5 1.5S9.83 15 9 15s-1.5-0.67-1.5-1.5S8.17 12 9 12zm3 6H6v-0.43c0-0.60.36-1.150.92-1.390.64-0.28 1.34-0.43 2.08-0.43s1.440.15 2.080.43c0.550.240.920.780.92 1.39V18zm1-9h-2V4h2v5zm5 7.5h-4V15h4v1.5zm0-3h-4V12h4v1.5z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdsBadge;
