import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bxs-droplet-half",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxsDropletHalf {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12.58 2.18a1 1 0 0 0-1.16 0C11.12 2.4 4 7.51 4 13.75 4 18.53 7.36 22 12 22s8-3.47 8-8.25c0-6.24-7.12-11.36-7.42-11.57zM6 13.75c0-4.28 4.39-8.2 6-9.49V20c-3.53 0-6-2.57-6-6.25z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxsDropletHalf;
