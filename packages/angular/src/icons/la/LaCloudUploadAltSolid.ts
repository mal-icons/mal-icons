import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-cloud-upload-alt-solid",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaCloudUploadAltSolid {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 16 7 C 13.35 7 11.05 8.24 9.41 10.06 C 9.27 10.05 9.15 10 9 10 C 6.8 10 5 11.8 5 14 C 3.27 15.05 2 16.84 2 19 C 2 22.3 4.7 25 8 25 L 13 25 L 13 23 L 8 23 C 5.78 23 4 21.22 4 19 C 4 17.34 5.01 15.92 6.44 15.31 L 7.13 15.03 L 7.03 14.28 C 7.01 14.12 7 14.02 7 14 C 7 12.88 7.88 12 9 12 C 9.14 12 9.3 12.02 9.47 12.06 L 10.09 12.22 L 10.47 11.72 C 11.75 10.07 13.75 9 16 9 C 19.28 9 22.01 11.25 22.78 14.28 L 22.97 15.06 L 23.81 15.03 C 24.02 15.02 24.07 15 24 15 C 26.22 15 28 16.78 28 19 C 28 21.22 26.22 23 24 23 L 19 23 L 19 25 L 24 25 C 27.3 25 30 22.3 30 19 C 30 15.84 27.51 13.32 24.41 13.09 C 23.18 9.57 19.93 7 16 7 Z M 16 15 L 12 19 L 15 19 L 15 27 L 17 27 L 17 19 L 20 19 Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaCloudUploadAltSolid;
