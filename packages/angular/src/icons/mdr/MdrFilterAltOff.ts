import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-filter-alt-off",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrFilterAltOff {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M19.79 5.61A11 0 0 0 19 4H6.83l7.97 7.97 4.99-6.36zm0.7 14.88L3.51 3.51A11 0 1 0 2.1 4.92L10 13v5c0 1.10.9 2 2 2s2-0.9 2-2v-1.17l5.07 5.07c0.390.39 1.020.39 1.41 0s0.4-1.020.01-1.41z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrFilterAltOff;
