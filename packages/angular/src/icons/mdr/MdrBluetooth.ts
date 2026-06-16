import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-bluetooth",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrBluetooth {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"m17 7-4.29-4.29c-0.63-0.63-1.71-0.19-1.710.7v6.18L7.11 5.7A11 0 1 0 5.7 7.11L10.59 12 5.7 16.89a11 0 1 0 1.41 1.41L11 14.41v6.18c0 0.89 1.08 1.34 1.710.71L17 17a11 0 0 0 0-1.41L13.41 12 17 8.42c0.39-0.390.39-1.03 0-1.42zm-4-1.17 1.88 1.88L13 9.59V5.83zm1.88 10.46L13 18.17v-3.76l1.88 1.88z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrBluetooth;
