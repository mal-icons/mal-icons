import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-electric-bolt",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrElectricBolt {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"m457-386-272-32q-19-2-25-20.5t8-31.5l440-404q4-3 8.5-5t13.5-2q15 0 23 12.5t0 25.5L503-574l272 32q19 2 25 20.5t-8 31.5L352-86q-4 3-8.5 5T330-79q-15 0-23-12.5t0-25.5l150-269Zm-4 120 252-223-297-36 99-169-253 224 297 35-98 169Zm27-214Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrElectricBolt;
