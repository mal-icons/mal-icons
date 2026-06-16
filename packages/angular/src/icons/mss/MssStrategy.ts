import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-strategy",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssStrategy {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M220-520 80-600v-160l140-80 140 80v160l-140 80Zm0-69 80-46v-90l-80-46-80 46v90l80 46Zm430 71v-70l150 88v280L560-80 320-220v-280l150-87v69l-90 53v211l180 104 180-104v-211l-90-53Zm-120 98v-460h351l-73 110 73 110H590v240h-60Zm30 86ZM220-680Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssStrategy;
