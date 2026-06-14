import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-chevron-left-12",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcChevronLeft12 {
  readonly viewBox = "0 0 12 12";
  readonly nodes: NodeTuple[] = [["path",{"d":"M3.59 6.03c0 0.20.10.40.20.5l3.3 3.3c0.30.30.80.3 1.1 0 0.3-0.30.3-0.8 0-1.1l-2.7-2.7 2.7-2.7c0.3-0.30.3-0.8 0-1.1-0.3-0.3-0.8-0.3-1.1 0l-3.2 3.2c-0.20.2-0.30.4-0.30.6Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcChevronLeft12;
