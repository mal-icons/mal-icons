import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdt-stream",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdtStream {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["circle",{"cx":"20","cy":"12","r":"2"}],["circle",{"cx":"4","cy":"12","r":"2"}],["circle",{"cx":"12","cy":"20","r":"2"}],["path",{"d":"m13.94 8.62 4.4-4.39 1.41 1.42-4.4 4.39zM8.32 9.68l0.310.32 1.42-1.41-4.02-4.04h-0.01l-0.31-0.32-1.42 1.41 4.02 4.05zm7.09 4.26L14 15.35l3.99 4.010.350.35 1.42-1.41-3.99-4.01zm-6.820.01-4.03 4.01-0.320.33 1.41 1.41 4.03-4.020.33-0.32z"}],["circle",{"cx":"12","cy":"4","r":"2"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdtStream;
