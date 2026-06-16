import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-compare-arrows",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrCompareArrows {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M9.01 14H3c-0.55 0-1 0.45-1 1s0.45 1 1 1h6.01v1.79c0 0.450.540.670.850.35l2.78-2.79c0.19-0.20.19-0.51 0-0.71l-2.78-2.79c-0.31-0.32-0.85-0.09-0.850.35V14zm5.98-2.21V10H21c0.55 0 1-0.45 1-1s-0.45-1-1-1h-6.01V6.21c0-0.45-0.54-0.67-0.85-0.35l-2.78 2.79c-0.190.2-0.190.51 0 0.71l2.78 2.79a0.50.5 0 0 0 0.85-0.36z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrCompareArrows;
