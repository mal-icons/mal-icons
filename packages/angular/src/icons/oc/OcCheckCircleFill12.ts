import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-check-circle-fill-12",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcCheckCircleFill12 {
  readonly viewBox = "0 0 12 12";
  readonly nodes: NodeTuple[] = [["path",{"d":"M6 0a6 6 0 1 1 0 12A6 6 0 0 1 6 0Zm-0.7 8.74L9.63 4.4 8.39 3.17 5.3 6.26l-1.7-1.7L2.36 5.8l2.94 2.94Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcCheckCircleFill12;
