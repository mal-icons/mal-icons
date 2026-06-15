import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-sl-volume-1",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SlVolume1 {
  readonly viewBox = "0 0 1024 1024";
  readonly nodes: NodeTuple[] = [["path",{"d":"M654.77 65.9c-10.43-5.55-23.09-4.93-32.91 1.7L300.77 319.71l-106.620.08c-54.51 0-98.88 38.66-98.88 86.4l1.71 211.14c0 47.54 44.35 86.22 98.86 86.22l106.590.07L621.82 956.37a31.98 31.98 0 0 0 17.91 5.47c5.15 0 10.32-1.25 15.01-3.74a31.95 31.95 0 0 0 17.01-28.26V94.16a32.09 32.09 0 0 0-16.98-28.26zm-47.04 803.73L330.13 645.11a31.97 31.97 0 0 0-17.89-5.47l-116.38-0.06c-20.54 0-34.88-11.71-34.88-22.46l-1.71-211.15c0-10.48 14.34-22.16 34.9-22.16l116.4-0.08a32.02 32.02 0 0 0 17.86-5.46l279.31-224v715.38zm182.1-522c-17.71-2.93-33.94 8.86-36.85 26.31-2.91 17.42 8.88 33.92 26.29 36.83 50.32 8.4 85.47 52.3 85.47 106.75 0 51.84-36.37 96.69-86.5 106.69-17.34 3.44-28.59 20.29-25.12 37.63 3.02 15.22 16.37 25.74 31.34 25.74 2.06 0 4.19-0.19 6.29-0.62 79.97-15.9 138-87.18 138-169.44-0.02-85.02-58.45-156.46-138.93-169.89z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SlVolume1;
