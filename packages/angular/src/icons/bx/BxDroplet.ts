import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bx-droplet",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxDroplet {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 22c4.64 0 8-3.47 8-8.25C20 7.52 12.88 2.4 12.58 2.19a1 1 0 0 0-1.160C11.12 2.4 4 7.5 4 13.75 4 18.53 7.36 22 12 22zm0-17.74C13.6 5.55 18 9.47 18 13.75 18 17.43 15.53 20 12 20s-6-2.57-6-6.25c0-4.29 4.39-8.2 6-9.49z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxDroplet;
