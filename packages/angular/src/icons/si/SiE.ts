import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-e",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiE {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M0 12A12.01 12.01 0 0 0 12 24a2.27 2.27 0 0 0 2.27-2.27A2.27 2.27 0 0 0 12 19.47c-4.12 0-7.46-3.35-7.46-7.46S7.88 4.54 12 4.54c3.32 0 6.15 2.19 7.11 5.2H12a2.27 2.27 0 0 0-2.27 2.27A2.27 2.27 0 0 0 12 14.27h9.73a2.27 2.27 0 0 0 2.27-2.27A12.02 12.02 0 0 0 12 0C5.390.010 5.390 12"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiE;
