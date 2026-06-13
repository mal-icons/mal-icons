import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-io-basket-outline",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class IoBasketOutline {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"d":"M68.4,192A20.38,20.38,0,0,0,48,212.2a17.87,17.87,0,0,0,0.8,5.5L100.5,400a40.46,40.46,0,0,0,39.1,29.5H372.4A40.88,40.88,0,0,0,411.7,400l51.7-182.30.6-5.5A20.38,20.38,0,0,0,443.6,192H68.4ZM261.72,352.07A42.07,42.07,0,1,1,304,310,42.27,42.27,0,0,1,261.72,352.07Z","fill":"none","stroke":"currentColor","stroke-linejoin":"round","stroke-width":"32"}],["polyline",{"points":"160 192 256 64 352 192","fill":"none","stroke":"currentColor","stroke-linejoin":"round","stroke-width":"32"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default IoBasketOutline;
