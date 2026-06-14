import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-fc-template",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class FcTemplate {
  readonly viewBox = "0 0 48 48";
  readonly nodes: NodeTuple[] = [["rect",{"x":"4","y":"7","fill":"#BBDEFB","width":"40","height":"34"}],["rect",{"x":"9","y":"12","fill":"#3F51B5","width":"30","height":"5"}],["rect",{"fill":"#2196F3","x":"9","y":"21","width":"13","height":"16"}],["rect",{"fill":"#2196F3","x":"26","y":"21","width":"13","height":"16"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default FcTemplate;
