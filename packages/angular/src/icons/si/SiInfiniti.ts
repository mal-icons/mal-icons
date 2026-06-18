import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-infiniti",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiInfiniti {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M1.95 11.64c0 1.51 1.83 2.69 4.6 3.34l4.84-5.52H12l-4.19 8.06C3.25 16.74 0 14.71 0 12.23c0-3.18 5.38-5.76 12-5.76s12 2.57 12 5.76c0 2.48-3.25 4.51-7.81 5.29L12 9.46h0.61l4.84 5.52c2.77-0.65 4.6-1.83 4.6-3.34 0-2.66-4.48-4.88-10.05-4.88-5.56 0-10.05 2.22-10.05 4.88z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiInfiniti;
