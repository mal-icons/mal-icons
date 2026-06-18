import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-rolldown",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiRolldown {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M21.65 0c0.51 0 0.80.60.471l-5.62 6.74c-0.660.79-0.1 20.93 2h5.43c0.52 0 0.80.60.471L12.47 23.78a0.60.6 0 0 1-0.470.230.60.6 0 0 1-0.47-0.22L0.66 10.73a0.610.61 0 0 1 0.47-1H6.56c1.03 0 1.6-1.20.94-2L1.881A0.610.61 0 0 1 2.35 0Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiRolldown;
