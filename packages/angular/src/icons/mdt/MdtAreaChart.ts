import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdt-area-chart",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdtAreaChart {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"m19 16.95-7-5.45L8 17l-3-2.4V11l2.44 1.83 4.96-6.95L16.3 9H19z","opacity":".3"}],["path",{"d":"m17 7-5-4-5 7-4-3v13h18V7h-4zm2 9.95-7-5.45L8 17l-3-2.4V11l2.44 1.83 4.96-6.95L16.3 9H19v7.95z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdtAreaChart;
