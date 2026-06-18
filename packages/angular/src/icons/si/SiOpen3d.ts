import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-open3d",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiOpen3d {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M6 1.61 0 12l6 10.39h2.09l1.95-3.38H7.95L4.06 12.27h8.15l3.56 6.16L19.48 12l-3.71-6.44-3.56 6.18H4.06l3.89-6.75h2.1L8.09 1.61Zm2.71 0 1.95 3.38h5.39L20.1 12l-4.04 7.01h-5.39l-1.95 3.38h9.29l0.49-0.85L24 12 18 1.61Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiOpen3d;
