import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-chevron-right-12",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcChevronRight12 {
  readonly viewBox = "0 0 12 12";
  readonly nodes: NodeTuple[] = [["path",{"d":"M4.7 10c-0.2 0-0.4-0.1-0.5-0.2-0.3-0.3-0.3-0.8 0-1.1L6.9 6 4.2 3.3c-0.3-0.3-0.3-0.8 0-1.10.3-0.30.8-0.3 1.1 0l3.3 3.2c0.30.30.30.8 0 1.1L5.3 9.7c-0.20.2-0.40.3-0.60.3Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcChevronRight12;
