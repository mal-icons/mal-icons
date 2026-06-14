import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-chevron-down-12",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcChevronDown12 {
  readonly viewBox = "0 0 12 12";
  readonly nodes: NodeTuple[] = [["path",{"d":"M6 8.82c-0.2 0-0.4-0.1-0.5-0.2l-3.3-3.3c-0.3-0.3-0.3-0.8 0-1.10.3-0.30.8-0.3 1.1 0l2.7 2.7 2.7-2.7c0.3-0.30.8-0.3 1.1 0 0.30.30.30.8 0 1.1l-3.2 3.2c-0.20.2-0.40.3-0.60.3Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcChevronDown12;
