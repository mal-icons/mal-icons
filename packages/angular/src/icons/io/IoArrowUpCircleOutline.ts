import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-io-arrow-up-circle-outline",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class IoArrowUpCircleOutline {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["polyline",{"points":"176 249.38 256 170 336 249.38","fill":"none","stroke":"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"}],["line",{"x1":"256","y1":"181.03","x2":"256","y2":"342","fill":"none","stroke":"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"}],["path",{"d":"M448,256c0-106-86-192-192-192S64,150,64,256s86,192,192,192S448,362,448,256Z","fill":"none","stroke":"currentColor","stroke-miterlimit":"10","stroke-width":"32"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default IoArrowUpCircleOutline;
