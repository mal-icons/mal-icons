import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-height",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrHeight {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M13 6.99h1.79c0.45 0 0.67-0.540.35-0.85l-2.79-2.78a0.510.51 0 0 0-0.71 0L8.86 6.14c-0.320.31-0.10.850.350.85H11v10.02H9.21c-0.45 0-0.670.54-0.350.85l2.79 2.78c0.20.190.510.190.71 0l2.79-2.78c0.32-0.310.09-0.85-0.35-0.85H13V6.99z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrHeight;
