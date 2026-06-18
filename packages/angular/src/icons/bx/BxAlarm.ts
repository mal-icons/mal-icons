import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bx-alarm",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxAlarm {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 4c-4.88 0-9 4.12-9 9s4.12 9 9 9 9-4.12 9-9-4.12-9-9-9zm0 16c-3.79 0-7-3.21-7-7s3.21-7 7-7 7 3.21 7 7-3.21 7-7 7z"}],["path",{"d":"M13 12V8h-2v6h6v-2zm4.28-8.29 1.41-1.42 3.01 3-1.41 1.42zm-10.59 0-2.99 3L2.29 5.29l2.99-3z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxAlarm;
