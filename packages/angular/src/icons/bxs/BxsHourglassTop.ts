import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bxs-hourglass-top",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxsHourglassTop {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M15.57 11.02A7.02 7.02 0 0 0 19 5V4h1V2H4v2h1v1a7.02 7.02 0 0 0 3.43 6.02c0.350.210.570.550.570.9v0.16c0 0.35-0.210.69-0.570.9A7.02 7.02 0 0 0 5 19v1H4v2h16v-2h-1v-1a7.01 7.01 0 0 0-3.43-6.02c-0.35-0.21-0.57-0.55-0.57-0.9v-0.16c0-0.350.21-0.690.57-0.9zM17 19v1H7v-1a5.01 5.01 0 0 1 2.45-4.3A3.11 3.11 0 0 0 10.83 13h2.33c0.230.690.7 1.3 1.39 1.7A5.01 5.01 0 0 1 17 19z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxsHourglassTop;
