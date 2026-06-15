import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gr-hpe-labs",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GrHpeLabs {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["polyline",{"fill":"none","stroke":"currentColor","stroke-width":"2","points":"14 23 5 23 5 2 17 2 17 15 13 15 13 6 9 6 9 19 20 19"}]];
  readonly defaultAttr = {"fill":"none"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GrHpeLabs;
