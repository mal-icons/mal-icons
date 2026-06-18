import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-namebase",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiNamebase {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M23.1 2.41c0 1.33-1.05 2.41-2.35 2.41s-2.35-1.08-2.35-2.41S19.45 0 20.75 0s2.35 1.08 2.35 2.41zm-11.510.54C5.69 2.950.9 7.850.9 13.89V24h6.58V13.89c0-2.33 1.84-4.21 4.11-4.21s4.11 1.89 4.11 4.21V24h6.58V13.89c0-6.05-4.78-10.95-10.69-10.95z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiNamebase;
