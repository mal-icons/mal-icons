import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-md-phone-bluetooth-speaker",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdPhoneBluetoothSpeaker {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M20 15.5c-1.25 0-2.45-0.2-3.57-0.57-0.1-0.03-0.21-0.05-0.31-0.05-0.26 0-0.510.1-0.710.29l-2.2 2.2a15.05 15.05 0 0 1-6.59-6.59l2.2-2.21a0.960.96 0 0 0 0.25-1A11.36 11.36 0 0 1 8.5 4c0-0.55-0.45-1-1-1H4c-0.55 0-1 0.45-1 1 0 9.39 7.61 17 17 17 0.55 0 1-0.45 1-1v-3.5c0-0.55-0.45-1-1-1zM5.03 5h1.5c0.070.880.22 1.750.45 2.58l-1.2 1.21c-0.4-1.21-0.66-2.47-0.75-3.79zM19 18.97c-1.32-0.09-2.6-0.35-3.8-0.76l1.2-1.2c0.850.24 1.720.39 2.60.45v1.51zM14.71 9.5 17 7.21V11h0.5l2.85-2.85L18.21 6l2.15-2.15L17.5 1H17v3.79L14.71 2.5l-0.710.71L16.79 6 14 8.79l0.710.71zM18 2.91l0.940.94-0.940.94V2.91zm0 4.30.940.94-0.940.94V7.21z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdPhoneBluetoothSpeaker;
