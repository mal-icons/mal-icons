import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-network-locked",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrNetworkLocked {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M22 12V4.42c0-0.89-1.08-1.34-1.71-0.71L3.71 20.29c-0.630.63-0.19 1.710.7 1.71H15v-6c0-2.21 1.79-4 4-4h3zm0 5v-1c0-1.1-0.9-2-2-2s-2 0.9-2 2v1c-0.55 0-1 0.45-1 1v3c0 0.550.45 1 1 1h4c0.55 0 1-0.45 1-1v-3c0-0.55-0.45-1-1-1zm-3-1c0-0.550.45-1 1-1s1 0.45 1 1v1h-2v-1z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrNetworkLocked;
