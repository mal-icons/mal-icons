import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-io-cellular-outline",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class IoCellularOutline {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["rect",{"x":"416","y":"96","width":"64","height":"320","rx":"8","ry":"8","fill":"none","stroke":"currentColor","stroke-linejoin":"round","stroke-width":"32"}],["rect",{"x":"288","y":"176","width":"64","height":"240","rx":"8","ry":"8","fill":"none","stroke":"currentColor","stroke-linejoin":"round","stroke-width":"32"}],["rect",{"x":"160","y":"240","width":"64","height":"176","rx":"8","ry":"8","fill":"none","stroke":"currentColor","stroke-linejoin":"round","stroke-width":"32"}],["rect",{"x":"32","y":"304","width":"64","height":"112","rx":"8","ry":"8","fill":"none","stroke":"currentColor","stroke-linejoin":"round","stroke-width":"32"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default IoCellularOutline;
