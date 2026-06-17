import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-camera-video-off-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsCameraVideoOffFill {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","d":"M10.96 12.37a2 2 0 0 0 0.52-1.1l3.11 1.38A1 1 0 0 0 16 11.73V4.27a1 1 0 0 0-1.41-0.91l-3.11 1.38A2 2 0 0 0 9.5 3H4.27zm-10.11-9A2 2 0 0 0 0 5v6a2 2 0 0 0 2 2h5.73zm9.75 11.93-10-14 0.81-0.58 10 14z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsCameraVideoOffFill;
