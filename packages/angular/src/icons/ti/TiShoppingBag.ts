import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ti-shopping-bag",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TiShoppingBag {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M17 4h-10c-1.65 0-3 1.35-3 3v11c0 1.65 1.35 3 3 3h10c1.65 0 3-1.35 3-3v-11c0-1.65-1.35-3-3-3zm1 14c0 0.55-0.45 1-1 1h-10c-0.55 0-1-0.45-1-1v-7.28c0.30.170.640.28 1 0.28h1.5c0 1.93 1.57 3.5 3.5 3.5s3.5-1.57 3.5-3.5h1.5c0.37 0 0.7-0.11 1-0.28v7.28zm-8.5-7h5c0 1.38-1.12 2.5-2.5 2.5s-2.5-1.12-2.5-2.5zm8.5-2c0 0.55-0.45 1-1 1h-10c-0.55 0-1-0.45-1-1v-2c0-0.550.45-1 1-1h10c0.55 0 1 0.45 1 1v2z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TiShoppingBag;
