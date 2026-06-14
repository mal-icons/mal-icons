import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-square-16",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcSquare16 {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M4 5.75C4 4.78 4.78 4 5.75 4h4.5c0.97 0 1.750.78 1.75 1.75v4.5A1.75 1.75 0 0 1 10.25 12h-4.5A1.75 1.75 0 0 1 4 10.25Zm1.75-0.25a0.250.25 0 0 0-0.250.25v4.5c0 0.140.110.250.250.25h4.5a0.250.25 0 0 0 0.25-0.25v-4.5a0.250.25 0 0 0-0.25-0.25Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcSquare16;
