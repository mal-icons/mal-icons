import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-md-send-to-mobile",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdSendToMobile {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"m18 8 4 4-4 4-1.41-1.41L18.17 13H13v-2h5.17l-1.59-1.59L18 8zM7 1.01 17 1c1.1 0 2 0.9 2 2v4h-2V6H7v12h10v-1h2v4c0 1.1-0.9 2-2 2H7c-1.1 0-2-0.9-2-2V3c0-1.10.9-1.99 2-1.99zM7 21h10v-1H7v1zM7 4h10V3H7v1z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdSendToMobile;
