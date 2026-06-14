import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-wi-small-craft-advisory",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class WiSmallCraftAdvisory {
  readonly viewBox = "0 0 30 30";
  readonly nodes: NodeTuple[] = [["path",{"d":"M9.81,24.6V7.45h1.03V24.6H9.81z M11.54,14.86V7.45l8.65,3.69L11.54,14.86z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default WiSmallCraftAdvisory;
