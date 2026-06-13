import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-io-repeat-sharp",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class IoRepeatSharp {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["polyline",{"points":"320 120 368 168 320 216","fill":"none","stroke":"currentColor","stroke-linecap":"square","stroke-miterlimit":"10","stroke-width":"32"}],["polyline",{"points":"352 168 64 168 64 264","fill":"none","stroke":"currentColor","stroke-linecap":"square","stroke-miterlimit":"10","stroke-width":"32"}],["polyline",{"points":"192 392 144 344 192 296","fill":"none","stroke":"currentColor","stroke-linecap":"square","stroke-miterlimit":"10","stroke-width":"32"}],["polyline",{"points":"160 344 448 344 448 248","fill":"none","stroke":"currentColor","stroke-linecap":"square","stroke-miterlimit":"10","stroke-width":"32"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default IoRepeatSharp;
