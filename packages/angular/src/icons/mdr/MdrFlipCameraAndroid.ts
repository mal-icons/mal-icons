import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-flip-camera-android",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrFlipCameraAndroid {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M9 12c0 1.66 1.34 3 3 3s3-1.34 3-3-1.34-3-3-3-3 1.34-3 3z"}],["path",{"d":"M8 9c0-0.55-0.45-1-1-1H5.09C6.47 5.61 9.05 4 12 4c3.49 0 6.45 2.24 7.54 5.360.140.390.530.640.940.640.68 0 1.18-0.670.96-1.31C20.07 4.79 16.36 2 12 2 8.73 2 5.82 3.58 4 6.01V5c0-0.55-0.45-1-1-1s-1 0.45-1 1v4c0 0.550.45 1 1 1h4c0.55 0 1-0.45 1-1zm8 6c0 0.550.45 1 1 1h1.91c-1.38 2.39-3.96 4-6.91 4-3.49 0-6.45-2.24-7.54-5.36a11 0 0 0-0.94-0.64c-0.68 0-1.180.67-0.96 1.31C3.93 19.21 7.64 22 12 22c3.27 0 6.18-1.58 8-4.01V19c0 0.550.45 1 1 1s1-0.45 1-1v-4c0-0.55-0.45-1-1-1h-4c-0.55 0-1 0.45-1 1z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrFlipCameraAndroid;
