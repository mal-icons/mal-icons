import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-stack-24",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcStack24 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M11.06 1.46a1.75 1.75 0 0 1 1.87 0l8.38 5.32a1.75 1.75 0 0 1 0 2.96l-8.38 5.32a1.75 1.75 0 0 1-1.87 0L2.68 9.73a1.75 1.75 0 0 1 0-2.96Zm1.07 1.27a0.250.25 0 0 0-0.27 0L3.48 8.04a0.250.25 0 0 0 0 0.42l8.38 5.32a0.250.25 0 0 0 0.27 0l8.38-5.32a0.250.25 0 0 0 0-0.42Z"}],["path",{"d":"M1.87 12.32a0.750.75 0 0 1 1.03-0.23l8.96 5.69a0.250.25 0 0 0 0.27 0l8.96-5.68a0.750.75 0 0 1 0.8 1.27l-8.96 5.69a1.75 1.75 0 0 1-1.87 0l-8.96-5.68a0.750.75 0 0 1-0.23-1.03Z"}],["path",{"d":"M1.87 16.32a0.750.75 0 0 1 1.03-0.23l8.96 5.69a0.250.25 0 0 0 0.27 0l8.96-5.68a0.750.75 0 0 1 0.8 1.27l-8.96 5.69a1.75 1.75 0 0 1-1.87 0l-8.96-5.68a0.750.75 0 0 1-0.23-1.03Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcStack24;
