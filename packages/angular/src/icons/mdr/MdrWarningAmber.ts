import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-warning-amber",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrWarningAmber {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 5.99 19.53 19H4.47L12 5.99M2.74 18c-0.77 1.330.19 3 1.73 3h15.06c1.54 0 2.5-1.67 1.73-3L13.73 4.99c-0.77-1.33-2.69-1.33-3.46 0L2.74 18zM11 11v2c0 0.550.45 1 1 1s1-0.45 1-1v-2c0-0.55-0.45-1-1-1s-1 0.45-1 1zm0 5h2v2h-2z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrWarningAmber;
