import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-floor-polisher",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiFloorPolisher {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M37.08 29c-8.55 0-15.28 6.73-15.28 15.28S28.53 59.57 37.08 59.57s15.29-6.73 15.29-15.28S45.63 29 37.08 29zm31.75 26.3C64.23 68.41 51.69 77.91 37.08 77.91c-5.01 0-9.77-1.12-14.06-3.12l37.41 49.89 19.32-8.45zm16.71 78.42l-16.43 7.19 111.19 283.18 16.11-8.06zm213.04 198.17v14.27h79.48v-14.26zm0 32.61v46.87h79.48v-46.87zm-149.69 32.61l-4.56 11.4a58.62 58.62 0 0 1 15.04 12.01l-8.78-23.41zm60.01 0l5.35 14.27h65.99v-14.27zm-92.71 22.42a39.6 39.6 0 0 0-39.74 39.74A39.6 39.6 0 0 0 116.18 499a39.6 39.6 0 0 0 39.74-39.74 39.6 39.6 0 0 0-39.74-39.74zm100.88 10.19v30.57h242.51v-30.57zm-18.34 5.67l-25.54 12.77a57.87 57.87 0 0 1 1.08 11.11c0 0.34-0.020.68-0.03 1.02h24.48v-24.9zm14.84 43.24l-7.13 14.27h263.78l-7.13-14.26z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiFloorPolisher;
