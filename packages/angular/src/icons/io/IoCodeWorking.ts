import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-io-code-working",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class IoCodeWorking {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["circle",{"cx":"256","cy":"256","r":"26","stroke":"currentColor","stroke-miterlimit":"10","stroke-width":"10"}],["circle",{"cx":"346","cy":"256","r":"26","stroke":"currentColor","stroke-miterlimit":"10","stroke-width":"10"}],["circle",{"cx":"166","cy":"256","r":"26","stroke":"currentColor","stroke-miterlimit":"10","stroke-width":"10"}],["polyline",{"points":"160 368 32 256 160 144","fill":"none","stroke":"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"42"}],["polyline",{"points":"352 368 480 256 352 144","fill":"none","stroke":"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"42"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default IoCodeWorking;
