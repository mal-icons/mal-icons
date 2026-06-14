import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-move-to-end-24",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcMoveToEnd24 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M11.22 5.22a0.750.75 0 0 1 1.06 0l6.25 6.25a0.750.75 0 0 1 0 1.06l-6.25 6.25a0.750.75 0 1 1-1.06-1.06l4.97-4.97H1.75a0.750.75 0 0 1 0-1.5h14.44L11.22 6.28a0.750.75 0 0 1 0-1.06Zm10.03-1.47a0.750.75 0 0 1 0.750.75v15a0.750.75 0 0 1-1.5 0v-15a0.750.75 0 0 1 0.75-0.75Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcMoveToEnd24;
