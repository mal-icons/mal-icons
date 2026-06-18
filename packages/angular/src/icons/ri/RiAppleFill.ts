import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-apple-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiAppleFill {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M11.67 7.22C10.8 7.22 9.44 6.23 8.01 6.26C6.13 6.29 4.4 7.35 3.43 9.05C1.47 12.44 2.93 17.46 4.83 20.22C5.77 21.56 6.87 23.07 8.34 23.03C9.74 22.97 10.27 22.11 11.97 22.11C13.67 22.11 14.15 23.03 15.63 22.99C17.15 22.97 18.11 21.62 19.03 20.27C20.1 18.71 20.54 17.19 20.57 17.11C20.53 17.1 17.63 15.98 17.59 12.62C17.57 9.81 19.88 8.47 19.99 8.41C18.67 6.48 16.64 6.26 15.93 6.21C14.09 6.07 12.54 7.22 11.67 7.22ZM14.79 4.39C15.57 3.45 16.09 2.15 15.95 0.85C14.83 0.9 13.49 1.59 12.68 2.53C11.96 3.36 11.34 4.69 11.51 5.96C12.74 6.06 14.01 5.33 14.79 4.39Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiAppleFill;
