import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-fc-plus",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class FcPlus {
  readonly viewBox = "0 0 48 48";
  readonly nodes: NodeTuple[] = [["circle",{"fill":"#4CAF50","cx":"24","cy":"24","r":"21"}],["rect",{"fill":"#fff","x":"21","y":"14","width":"6","height":"20"}],["rect",{"fill":"#fff","x":"14","y":"21","width":"20","height":"6"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default FcPlus;
