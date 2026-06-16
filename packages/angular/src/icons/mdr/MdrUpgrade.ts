import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-upgrade",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrUpgrade {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M16 19c0 0.55-0.45 1-1 1H9c-0.55 0-1-0.45-1-1s0.45-1 1-1h6c0.55 0 1 0.45 1 1zM11 7.99V15c0 0.550.45 1 1 1s1-0.45 1-1V7.99h1.79c0.45 0 0.67-0.540.35-0.85l-2.79-2.78a0.510.51 0 0 0-0.71 0L8.86 7.14c-0.320.31-0.10.850.350.85H11z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrUpgrade;
