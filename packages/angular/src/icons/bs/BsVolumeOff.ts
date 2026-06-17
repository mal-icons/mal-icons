import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-volume-off",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsVolumeOff {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M10.72 3.55A0.50.5 0 0 1 11 4v8a0.50.5 0 0 1-0.810.39L7.83 10.5H5.5A0.50.5 0 0 1 5 10V6a0.50.5 0 0 1 0.5-0.5h2.33l2.36-1.89a0.50.5 0 0 1 0.53-0.06M10 5.04 8.31 6.39A0.50.5 0 0 1 8 6.5H6v3h2a0.50.5 0 0 1 0.310.11L10 10.96z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsVolumeOff;
