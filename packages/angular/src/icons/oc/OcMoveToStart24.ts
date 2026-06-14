import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-move-to-start-24",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcMoveToStart24 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12.78 18.78a0.750.75 0 0 1-1.06 0l-6.25-6.25a0.750.75 0 0 1 0-1.06l6.25-6.25a0.750.75 0 1 1 1.06 1.06l-4.97 4.97H22.25a0.750.75 0 0 1 0 1.5H7.81l4.97 4.97a0.750.75 0 0 1 0 1.06ZM2.75 3.75a0.750.75 0 0 1 0.750.75v15a0.750.75 0 0 1-1.5 0v-15a0.750.75 0 0 1 0.75-0.75Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcMoveToStart24;
