import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-upptime",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiUpptime {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M11.86 15.68c1.93 0 3.49 1.53 3.49 3.41 0 1.88-1.56 3.41-3.49 3.41-1.93 0-3.49-1.53-3.49-3.41 0-1.88 1.56-3.41 3.49-3.41ZM24 14.88 12 1.51 0 14.89l3.16 3.52L12 8.55l8.84 9.86L24 14.89Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiUpptime;
