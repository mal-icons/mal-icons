import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-close-fullscreen",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrCloseFullscreen {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M21.29 4.12 16.7 8.71l1.59 1.59c0.630.630.18 1.71-0.71 1.71H13c-0.55 0-1-0.45-1-1v-4.6c0-0.89 1.08-1.34 1.71-0.71l1.59 1.59 4.59-4.59a11 0 0 1 1.41 0c0.380.40.38 1.03-0.01 1.42zM4.12 21.29l4.59-4.59 1.59 1.59c0.630.63 1.710.18 1.71-0.71V13c0-0.55-0.45-1-1-1h-4.6c-0.89 0-1.34 1.08-0.71 1.71l1.59 1.59-4.59 4.59a11 0 0 0 0 1.41c0.40.38 1.030.38 1.42-0.01z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrCloseFullscreen;
