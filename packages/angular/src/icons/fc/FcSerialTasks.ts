import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-fc-serial-tasks",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class FcSerialTasks {
  readonly viewBox = "0 0 48 48";
  readonly nodes: NodeTuple[] = [["path",{"fill":"#90CAF9","d":"M33,9H11v4h22c1.1,0,2,0.9,2,2v20H23v4h16V15C39,11.7,36.3,9,33,9z"}],["rect",{"x":"6","y":"6","fill":"#D81B60","width":"10","height":"10"}],["rect",{"fill":"#2196F3","x":"32","y":"17","width":"10","height":"10"}],["rect",{"fill":"#2196F3","x":"16","y":"32","width":"10","height":"10"}],["circle",{"fill":"#2196F3","cx":"26","cy":"11","r":"5"}],["circle",{"fill":"#2196F3","cx":"37","cy":"37","r":"5"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default FcSerialTasks;
