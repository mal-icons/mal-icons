import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-io-scale-outline",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class IoScaleOutline {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["rect",{"x":"48","y":"48","width":"416","height":"416","rx":"96","fill":"none","stroke":"currentColor","stroke-linejoin":"round","stroke-width":"32"}],["path",{"d":"M388.94,151.56c-24.46-22.28-68.72-51.4-132.94-51.4s-108.48,29.12-132.94,51.4A34.66,34.66,0,0,0,120,199.64l33.32,39.21a26.07,26.07,0,0,0,33.6,5.21c15.92-9.83,40.91-21.64,69.1-21.64s53.18,11.81,69.1,21.64a26.07,26.07,0,0,0,33.6-5.21L392,199.64A34.66,34.66,0,0,0,388.94,151.56Z","fill":"none","stroke":"currentColor","stroke-linejoin":"round","stroke-width":"32"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default IoScaleOutline;
