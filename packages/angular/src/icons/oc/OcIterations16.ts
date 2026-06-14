import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-iterations-16",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcIterations16 {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M2.5 7.25a4.75 4.75 0 0 1 9.5 0 0.750.75 0 0 0 1.5 0 6.25 6.25 0 1 0-6.25 6.25H12v2.15c0 0.220.270.340.430.18l2.9-2.9a0.250.25 0 0 0 0-0.35l-2.9-2.9a0.250.25 0 0 0-0.430.18V12H7.25A4.75 4.75 0 0 1 2.5 7.25Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcIterations16;
