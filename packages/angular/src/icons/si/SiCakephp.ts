import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-cakephp",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiCakephp {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M0 13.88v3.75c0 2.07 5.37 3.74 12 3.74V17.62c-6.63 0-12-1.68-12-3.74v0zm21.38 2.33L12 13.88v3.75l9.38 2.33C23.02 19.31 24 18.5 24 17.62v-3.74c0 0.88-0.98 1.69-2.62 2.33zM12 10.13v3.74c-6.63 0-12-1.68-12-3.74V6.38c0-2.06 5.37-3.74 12-3.74 6.63 0 12 1.68 12 3.74v3.75c0 0.88-0.98 1.69-2.62 2.33L12 10.13v0z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiCakephp;
