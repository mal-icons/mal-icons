import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-warning",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrWarning {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M4.47 21h15.06c1.54 0 2.5-1.67 1.73-3L13.73 4.99c-0.77-1.33-2.69-1.33-3.46 0L2.74 18c-0.77 1.330.19 3 1.73 3zM12 14c-0.55 0-1-0.45-1-1v-2c0-0.550.45-1 1-1s1 0.45 1 1v2c0 0.55-0.45 1-1 1zm1 4h-2v-2h2v2z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrWarning;
