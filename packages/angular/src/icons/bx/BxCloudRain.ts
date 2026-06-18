import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bx-cloud-rain",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxCloudRain {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M8 13h2v7H8zm3 2h2v7h-2zm3-2h2v7h-2z"}],["path",{"d":"M18.94 10.11C18.51 6.67 15.56 4 12 4c-2.76 0-5.15 1.61-6.24 4.15C3.61 8.79 2 10.82 2 13c0 2.76 2.24 5 5 5v-2c-1.65 0-3-1.35-3-3 0-1.4 1.2-2.76 2.67-3.01l0.58-0.10.19-0.56C8.15 7.27 9.9 6 12 6c2.76 0 5 2.24 5 5v1h1c1.1 0 2 0.9 2 2s-0.9 2-2 2h-1v2h1c2.21 0 4-1.79 4-4a4.01 4.01 0 0 0-3.06-3.89z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxCloudRain;
