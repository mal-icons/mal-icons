import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdf-badge",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdfBadge {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M20 7h-5V4c0-1.1-0.9-2-2-2h-2c-1.1 0-2 0.9-2 2v3H4c-1.1 0-2 0.9-2 2v11c0 1.10.9 2 2 2h16c1.1 0 2-0.9 2-2V9c0-1.1-0.9-2-2-2zM9 12c0.83 0 1.50.67 1.5 1.5S9.83 15 9 15s-1.5-0.67-1.5-1.5S8.17 12 9 12zm3 6H6v-0.75c0-1 2-1.5 3-1.5s3 0.5 3 1.5V18zm1-9h-2V4h2v5zm5 7.5h-4V15h4v1.5zm0-3h-4V12h4v1.5z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdfBadge;
