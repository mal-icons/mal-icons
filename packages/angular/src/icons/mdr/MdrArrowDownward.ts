import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-arrow-downward",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrArrowDownward {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M11 5v11.17l-4.88-4.88c-0.39-0.39-1.03-0.39-1.42 0a11 0 0 0 0 1.41l6.59 6.59c0.390.39 1.020.39 1.41 0l6.59-6.59a11 0 1 0-1.41-1.41L13 16.17V5c0-0.55-0.45-1-1-1s-1 0.45-1 1z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrArrowDownward;
