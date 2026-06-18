import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-glasses-2-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiGlasses2Line {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M3.02 10.99C3.04 9.45 3.13 8.47 3.35 7.32C3.69 5.66 4.31 4.66 5.55 3.83L4.44 2.17C2.69 3.34 1.81 4.84 1.39 6.93C0.87 9.53 1 14.86 1 15C1 15 1 15 1 15C1 17.76 3.24 20 6 20C8.76 20 11 17.76 11 15C11 14.73 10.98 14.46 10.93 14.19C11.26 14.07 11.62 14 12 14C12.37 14 12.73 14.07 13.06 14.19C13.02 14.46 13 14.73 13 15C13 17.76 15.24 20 18 20C20.76 20 23 17.76 23 15C23 15 23 15 23 15L23 15C23 15 23.13 9.56 22.6 6.93C22.19 4.84 21.31 3.34 19.55 2.17L18.44 3.83C19.69 4.66 20.31 5.66 20.64 7.32C20.87 8.47 20.95 9.45 20.98 10.99C20.15 10.37 19.12 10 18 10C16.22 10 14.66 10.93 13.77 12.32C13.22 12.11 12.62 12 12 12C11.37 12 10.78 12.11 10.22 12.32C9.34 10.93 7.78 10 6 10C4.88 10 3.85 10.37 3.02 10.99ZM3 15C3 13.34 4.34 12 6 12C7.31 12 8.42 12.84 8.83 14.01C8.94 14.32 9 14.65 9 15C9 16.66 7.66 18 6 18C4.34 18 3 16.66 3 15ZM15.17 14.01C15.58 12.84 16.69 12 18 12C19.66 12 21 13.34 21 15C21 16.66 19.66 18 18 18C16.34 18 15 16.66 15 15C15 14.65 15.06 14.32 15.17 14.01Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiGlasses2Line;
