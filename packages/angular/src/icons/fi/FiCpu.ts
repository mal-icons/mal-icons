import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-fi-cpu",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class FiCpu {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["rect",{"x":"4","y":"4","width":"16","height":"16","rx":"2","ry":"2"}],["rect",{"x":"9","y":"9","width":"6","height":"6"}],["line",{"x1":"9","y1":"1","x2":"9","y2":"4"}],["line",{"x1":"15","y1":"1","x2":"15","y2":"4"}],["line",{"x1":"9","y1":"20","x2":"9","y2":"23"}],["line",{"x1":"15","y1":"20","x2":"15","y2":"23"}],["line",{"x1":"20","y1":"9","x2":"23","y2":"9"}],["line",{"x1":"20","y1":"14","x2":"23","y2":"14"}],["line",{"x1":"1","y1":"9","x2":"4","y2":"9"}],["line",{"x1":"1","y1":"14","x2":"4","y2":"14"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default FiCpu;
