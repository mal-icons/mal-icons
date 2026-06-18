import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-eye-off-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiEyeOffFill {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M4.52 5.93L1.39 2.81L2.81 1.39L22.61 21.19L21.19 22.61L17.88 19.3C16.18 20.38 14.16 21 12 21C6.61 21 2.12 17.12 1.18 12C1.62 9.62 2.82 7.51 4.52 5.93ZM14.76 16.17L13.29 14.71C12.9 14.9 12.46 15 12 15C10.34 15 9 13.66 9 12C9 11.54 9.11 11.1 9.29 10.71L7.83 9.24C7.31 10.03 7 10.98 7 12C7 14.76 9.24 17 12 17C13.02 17 13.97 16.7 14.76 16.17ZM7.97 3.76C9.22 3.27 10.58 3 12 3C17.39 3 21.88 6.88 22.82 12C22.51 13.7 21.8 15.26 20.81 16.59L16.95 12.73C16.98 12.49 17 12.25 17 12C17 9.24 14.76 7 12 7C11.75 7 11.51 7.02 11.27 7.05L7.97 3.76Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiEyeOffFill;
