import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdf-camera-front",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdfCameraFront {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M10 20H5v2h5v2l3-3-3-3v2zm4 0v2h5v-2h-5zM12 8c1.1 0 2-0.9 2-2s-0.9-2-2-2-1.990.9-1.99 2S10.9 8 12 8zm5-8H7C5.9 0 5 0.9 5 2v14c0 1.10.9 2 2 2h10c1.1 0 2-0.9 2-2V2c0-1.1-0.9-2-2-2zM7 2h10v10.5c0-1.67-3.33-2.5-5-2.5s-5 0.83-5 2.5V2z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdfCameraFront;
