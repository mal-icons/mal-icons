import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-io-film-outline",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class IoFilmOutline {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["rect",{"x":"48","y":"96","width":"416","height":"320","rx":"28","ry":"28","fill":"none","stroke":"currentColor","stroke-linejoin":"round","stroke-width":"32"}],["rect",{"x":"384","y":"336","width":"80","height":"80","rx":"28","ry":"28","fill":"none","stroke":"currentColor","stroke-linejoin":"round","stroke-width":"32"}],["rect",{"x":"384","y":"256","width":"80","height":"80","rx":"28","ry":"28","fill":"none","stroke":"currentColor","stroke-linejoin":"round","stroke-width":"32"}],["rect",{"x":"384","y":"176","width":"80","height":"80","rx":"28","ry":"28","fill":"none","stroke":"currentColor","stroke-linejoin":"round","stroke-width":"32"}],["rect",{"x":"384","y":"96","width":"80","height":"80","rx":"28","ry":"28","fill":"none","stroke":"currentColor","stroke-linejoin":"round","stroke-width":"32"}],["rect",{"x":"48","y":"336","width":"80","height":"80","rx":"28","ry":"28","fill":"none","stroke":"currentColor","stroke-linejoin":"round","stroke-width":"32"}],["rect",{"x":"48","y":"256","width":"80","height":"80","rx":"28","ry":"28","fill":"none","stroke":"currentColor","stroke-linejoin":"round","stroke-width":"32"}],["rect",{"x":"48","y":"176","width":"80","height":"80","rx":"28","ry":"28","fill":"none","stroke":"currentColor","stroke-linejoin":"round","stroke-width":"32"}],["rect",{"x":"48","y":"96","width":"80","height":"80","rx":"28","ry":"28","fill":"none","stroke":"currentColor","stroke-linejoin":"round","stroke-width":"32"}],["rect",{"x":"128","y":"96","width":"256","height":"160","rx":"28","ry":"28","fill":"none","stroke":"currentColor","stroke-linejoin":"round","stroke-width":"32"}],["rect",{"x":"128","y":"256","width":"256","height":"160","rx":"28","ry":"28","fill":"none","stroke":"currentColor","stroke-linejoin":"round","stroke-width":"32"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default IoFilmOutline;
