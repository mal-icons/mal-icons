import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bxs-buoy",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxsBuoy {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2zm7.74 8h-3.16A5.02 5.02 0 0 0 14 7.42V4.26A8.02 8.02 0 0 1 19.74 10zM12 15c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3zM10 4.26v3.16A5.02 5.02 0 0 0 7.42 10h-3.16A8.02 8.02 0 0 1 10 4.26zM4.26 14h3.16A5.02 5.02 0 0 0 10 16.58v3.16A8.02 8.02 0 0 1 4.26 14zM14 19.74v-3.16A5.02 5.02 0 0 0 16.58 14h3.16A8.02 8.02 0 0 1 14 19.74z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxsBuoy;
