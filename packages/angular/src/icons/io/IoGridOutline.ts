import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-io-grid-outline",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class IoGridOutline {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["rect",{"x":"48","y":"48","width":"176","height":"176","rx":"20","ry":"20","fill":"none","stroke":"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"}],["rect",{"x":"288","y":"48","width":"176","height":"176","rx":"20","ry":"20","fill":"none","stroke":"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"}],["rect",{"x":"48","y":"288","width":"176","height":"176","rx":"20","ry":"20","fill":"none","stroke":"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"}],["rect",{"x":"288","y":"288","width":"176","height":"176","rx":"20","ry":"20","fill":"none","stroke":"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default IoGridOutline;
