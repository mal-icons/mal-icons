import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-linear-scale",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrLinearScale {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M680-280q-74 0-129-47t-69-123H276q-10 29-36.5 49.5T179-380q-41 0-70.5-29.5T79-480q0-41 29.5-70.5T179-580q34 0 60.5 20.5T276-510h206q14-76 69-123t129-47q83 0 141.5 58.5T880-480q0 83-58.5 141.5T680-280Zm0-60q59 0 99.5-40.5T820-480q0-59-40.5-99.5T680-620q-59 0-99.5 40.5T540-480q0 59 40.5 99.5T680-340Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrLinearScale;
