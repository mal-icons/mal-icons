import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-percent",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrPercent {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M289.9-540Q236-540 198-578.1t-38-92Q160-724 198.1-762t92-38Q344-800 382-761.9t38 92Q420-616 381.9-578t-92 38Zm-0.02-60Q319-600 339.5-620.38q20.5-20.38 20.5-49.5Q360-699 339.62-719.5q-20.38-20.5-49.5-20.5Q261-740 240.5-719.62q-20.5 20.38-20.5 49.5Q220-641 240.38-620.5q20.38 20.5 49.5 20.5Zm380.02 440Q616-160 578-198.1t-38-92Q540-344 578.1-382t92-38Q724-420 762-381.9t38 92Q800-236 761.9-198t-92 38Zm-0.02-60Q699-220 719.5-240.38q20.5-20.38 20.5-49.5Q740-319 719.62-339.5q-20.38-20.5-49.5-20.5Q641-360 620.5-339.62q-20.5 20.38-20.5 49.5Q600-261 620.38-240.5q20.38 20.5 49.5 20.5ZM181-181q-9-9-9-21t9-21l556-556q9-9 21-9t21 9q9 9 9 21t-9 21L223-181q-9 9-21 9t-21-9Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrPercent;
