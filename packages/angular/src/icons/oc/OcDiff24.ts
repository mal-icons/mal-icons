import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-diff-24",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcDiff24 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12.25 3.5a0.750.75 0 0 1 0.750.75V8.5h4.25a0.750.75 0 0 1 0 1.5H13v4.25a0.750.75 0 0 1-1.5 0V10H7.25a0.750.75 0 0 1 0-1.5h4.25V4.25a0.750.75 0 0 1 0.75-0.75ZM6.56 19.25a0.750.75 0 0 1 0.75-0.75h9.94a0.750.75 0 0 1 0 1.5H7.31a0.750.75 0 0 1-0.75-0.75Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcDiff24;
