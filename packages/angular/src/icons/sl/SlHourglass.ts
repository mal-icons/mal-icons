import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-sl-hourglass",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SlHourglass {
  readonly viewBox = "0 0 1024 1024";
  readonly nodes: NodeTuple[] = [["path",{"d":"M833.06 64.61h-64.46v215.41c0 104.38-56.66 183.36-178.1 245.2 126.06 63.81 179.1 142.16 179.1 259.07 0 76.13-0.34 140-0.59 175.12h64.07c17.68 0 32 14.29 32 31.97s-14.32 32-32 32H190.94c-17.68 0-32-14.32-32-32s14.32-31.97 32-31.97h65.94c-0.24-35.12-0.59-99.01-0.59-175.12 0-116.91 52.29-195.25 178.15-259.06C313.2 463.39 257.3 384.42 257.3 280.03V64.61h-66.35c-17.68 0-32-14.3-32-32 0-17.66 14.32-31.98 32-31.98h642.13c17.68 0 32 14.32 32 31.98-0.02 17.7-14.32 32-32.02 32zm-512.78 719.68c0 76.290.35 140.220.59 175.12H705.04c0.22-34.910.59-98.850.59-175.12 0-89.01-33.12-158.03-193.18-224.4-160.02 66.37-192.18 135.39-192.18 224.4zm384.35-719.68H321.26v215.41c0 61.38 20.64 140.42 191.17 210.53 170.56-70.11 192.19-149.15 192.19-210.53V64.61z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SlHourglass;
