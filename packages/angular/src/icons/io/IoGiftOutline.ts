import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-io-gift-outline",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class IoGiftOutline {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"d":"M256,104v56h56a56,56,0,1,0-56-56Z","fill":"none","stroke":"currentColor","stroke-linecap":"round","stroke-miterlimit":"10","stroke-width":"32"}],["path",{"d":"M256,104c0,15.46,0,56,0,56H200a56,56,0,1,1,56-56Z","fill":"none","stroke":"currentColor","stroke-linecap":"round","stroke-miterlimit":"10","stroke-width":"32"}],["rect",{"x":"64","y":"160","width":"384","height":"112","rx":"32","ry":"32","fill":"none","stroke":"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"}],["path",{"d":"M416,272V416a48,48,0,0,1-48,48H144a48,48,0,0,1-48-48V272","fill":"none","stroke":"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"}],["line",{"x1":"256","y1":"160","x2":"256","y2":"464","fill":"none","stroke":"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default IoGiftOutline;
