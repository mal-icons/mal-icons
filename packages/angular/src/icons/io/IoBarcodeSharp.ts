import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-io-barcode-sharp",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class IoBarcodeSharp {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["polyline",{"points":"400 400.33 448 400 448 112 400 112.33","fill":"none","stroke":"currentColor","stroke-linecap":"square","stroke-linejoin":"round","stroke-width":"32"}],["polyline",{"points":"112 112 64 112.33 64 400.33 112 400","fill":"none","stroke":"currentColor","stroke-linecap":"square","stroke-linejoin":"round","stroke-width":"32"}],["line",{"x1":"384","y1":"192","x2":"384","y2":"320","fill":"none","stroke":"currentColor","stroke-linecap":"square","stroke-linejoin":"round","stroke-width":"32"}],["line",{"x1":"320","y1":"160","x2":"320","y2":"352","fill":"none","stroke":"currentColor","stroke-linecap":"square","stroke-linejoin":"round","stroke-width":"32"}],["line",{"x1":"256","y1":"176","x2":"256","y2":"336","fill":"none","stroke":"currentColor","stroke-linecap":"square","stroke-linejoin":"round","stroke-width":"32"}],["line",{"x1":"192","y1":"160","x2":"192","y2":"352","fill":"none","stroke":"currentColor","stroke-linecap":"square","stroke-linejoin":"round","stroke-width":"32"}],["line",{"x1":"128","y1":"192","x2":"128","y2":"320","fill":"none","stroke":"currentColor","stroke-linecap":"square","stroke-linejoin":"round","stroke-width":"32"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default IoBarcodeSharp;
