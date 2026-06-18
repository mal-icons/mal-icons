import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ph-chats-circle",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class PhChatsCircle {
  readonly viewBox = "0 0 256 256";
  readonly nodes: NodeTuple[] = [["path",{"d":"M231.79,187.33A80,80,0,0,0,169.57,72.59,80,80,0,1,0,24.21,139.33l-7.66,26.82a14,14,0,0,0,17.3,17.3l26.82-7.66a80.15,80.15,0,0,0,25.75,7.63,80,80,0,0,0,108.91,40.37l26.82,7.66a14,14,0,0,0,17.3-17.3ZM61.53,159.23a8.22,8.22,0,0,0-2.20.3l-26.41,7.55,7.55-26.41a8,8,0,0,0-0.68-6,63.95,63.95,0,1,1,25.57,25.57A7.94,7.94,0,0,0,61.53,159.23Zm154,29.44,7.55,26.41-26.41-7.55a8,8,0,0,0-6,0.68,64.06,64.06,0,0,1-86.32-24.64A79.93,79.93,0,0,0,174.7,89.71a64,64,0,0,1,41.51,92.93A8,8,0,0,0,215.53,188.67Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default PhChatsCircle;
