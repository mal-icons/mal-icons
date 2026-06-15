import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-sl-location-pin",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SlLocationPin {
  readonly viewBox = "0 0 1024 1024";
  readonly nodes: NodeTuple[] = [["path",{"d":"M515.66-0.37C305.76-0.37 128 178.4 128 390.18c0 221.76 206.03 448.54 344.62 607.940.530.64 22.93 25.52 50.53 25.52h2.45c27.6 0 49.84-24.88 50.4-25.52 130.06-149.52 320-396.05 320-607.94C896 178.4 757.34-0.37 515.66-0.37zm12.83 955.55c-1.12 1.12-2.75 2.37-4.19 3.41-1.47-1.01-3.07-2.29-4.25-3.41l-16.74-19.25C371.92 785.2 192 578.79 192 390.18c0-177.01 148.22-326.56 323.66-326.56 218.53 0 316.34 164 316.34 326.56 0 143.18-102.13 333.3-303.5 565.01zm-15.38-761.78c-106.03 0-192 85.97-192 192s85.97 192 192 192 192-85.97 192-192-85.97-192-192-192zm0 320c-70.58 0-129.47-58.82-129.47-129.41 0-70.58 57.42-128 128-128 70.62 0 128 57.42 128 128 0.03 70.59-55.9 129.41-126.53 129.41z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SlLocationPin;
