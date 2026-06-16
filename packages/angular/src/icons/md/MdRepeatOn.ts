import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-md-repeat-on",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdRepeatOn {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M21 1H3c-1.1 0-2 0.9-2 2v18c0 1.10.9 2 2 2h18c1.1 0 2-0.9 2-2V3c0-1.1-0.9-2-2-2zm-2 18H6.83l1.58 1.58L7 22l-4-4 4-4 1.41 1.42L6.83 17H17v-4h2v6zm-2-9-1.41-1.42L17.17 7H7v4H5V5h12.17l-1.58-1.58L17 2l4 4-4 4z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdRepeatOn;
