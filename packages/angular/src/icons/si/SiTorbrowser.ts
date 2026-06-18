import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-torbrowser",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiTorbrowser {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 21.82v-1.46A8.36 8.36 0 20.36 12 8.36 8.36 0 12 3.64V2.18A9.83 9.83 0 121.82 12 9.83 9.83 0 112 21.82zm0-5.09A4.74 4.74 0 16.73 12 4.74 4.74 0 12 7.27V5.82A6.17 6.17 0 118.18 12 6.17 6.17 0 112 18.18zm0-7.27A2.54 2.54 0 114.55 12 2.54 2.54 0 112 14.54zM0 12a12 12 0 12 12 12 12 0 12-12A12 12 0 12 0 12 12 0 0 12z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiTorbrowser;
