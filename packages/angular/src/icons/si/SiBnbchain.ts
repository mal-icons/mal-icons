import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-bnbchain",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiBnbchain {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M5.63 3.68 12 0l6.37 3.68-2.34 1.36L12 2.72 7.97 5.03l-2.34-1.36Zm12.74 4.64-2.34-1.36L12 9.27 7.97 6.95l-2.34 1.36v2.72l4.03 2.32v4.64L12 19.34l2.34-1.36v-4.64l4.03-2.32V8.31Zm0 7.35v-2.72l-2.34 1.36v2.72l2.34-1.36Zm1.660.96-4.03 2.32v2.72l6.37-3.68V10.63l-2.34 1.36v4.64Zm-2.34-10.63 2.34 1.36v2.72l2.34-1.36V5.99l-2.34-1.36-2.34 1.36ZM9.66 19.93v2.72L12 24l2.34-1.36v-2.72l-2.34 1.36-2.34-1.36Zm-4.03-4.26 2.34 1.36v-2.72l-2.34-1.36v2.72Zm4.03-9.67L12 7.35l2.34-1.36-2.34-1.36-2.34 1.36Zm-5.69 1.36L6.31 5.99 3.97 4.64l-2.34 1.36V8.71l2.34 1.36V7.35Zm0 4.64-2.34-1.36v7.35l6.37 3.68v-2.72l-4.03-2.32v-4.64Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiBnbchain;
