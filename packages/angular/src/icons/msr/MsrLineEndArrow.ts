import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-line-end-arrow",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrLineEndArrow {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M486-229q-15 10-30.5 1.19Q440-236.62 440-255v-195H110q-12.75 0-21.37-8.68Q80-467.35 80-480.17 80-493 88.63-501.5T110-510h330v-195q0-18.38 15.5-27.19Q471-741 486-731l354 226q14 8.79 14 24.89T840-455L486-229Zm14-80 268-171-268-171v342Zm0-171Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrLineEndArrow;
