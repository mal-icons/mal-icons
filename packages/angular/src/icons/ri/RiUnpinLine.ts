import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-unpin-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiUnpinLine {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M20.97 17.17 19.56 18.59 16.02 15.05 15.95 15.13 15.24 18.66 13.83 20.07 9.58 15.83 4.63 20.78 3.22 19.37 8.17 14.42 3.93 10.18 5.34 8.76 8.88 8.05 8.95 7.98 5.41 4.44 6.83 3.03 20.97 17.17ZM10.36 9.39 9.86 9.9 7.04 10.46 13.54 16.96 14.11 14.14 14.61 13.64 10.36 9.39ZM18.78 9.47 17.44 10.81 18.85 12.22 20.19 10.88 20.9 11.59 22.31 10.18 13.83 1.69 12.41 3.1 13.12 3.81 11.78 5.15 13.19 6.57 14.53 5.23 18.78 9.47Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiUnpinLine;
