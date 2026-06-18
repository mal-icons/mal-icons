import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-apple-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiAppleLine {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M15.78 8.21C15.31 8.17 14.8 8.28 14.02 8.58C14.09 8.56 13.28 8.87 13.05 8.95C12.55 9.13 12.14 9.22 11.67 9.22C11.22 9.22 10.79 9.13 10.31 8.97C10.15 8.91 10 8.86 9.8 8.78C9.72 8.75 9.42 8.63 9.35 8.6C8.71 8.35 8.34 8.25 8.04 8.26C6.89 8.28 5.8 8.94 5.16 10.04C3.87 12.29 4.59 16.34 6.47 19.08C7.48 20.52 8.03 21.04 8.25 21.03C8.47 21.02 8.64 20.97 9.04 20.8C9.11 20.77 9.11 20.77 9.2 20.73C10.21 20.3 10.91 20.11 11.97 20.11C12.99 20.11 13.68 20.3 14.64 20.72C14.73 20.75 14.73 20.75 14.81 20.79C15.21 20.96 15.35 21 15.6 20.99C15.96 20.98 16.4 20.57 17.38 19.14C17.65 18.74 17.88 18.33 18.09 17.92C17.96 17.81 17.83 17.69 17.7 17.57C16.41 16.34 15.61 14.68 15.59 12.64C15.58 11.02 16.11 9.61 17 8.46C16.63 8.31 16.22 8.24 15.78 8.21ZM15.93 6.21C16.64 6.26 18.67 6.48 19.99 8.41C19.88 8.47 17.57 9.81 17.59 12.62C17.63 15.98 20.53 17.1 20.57 17.11C20.54 17.19 20.1 18.71 19.03 20.27C18.11 21.62 17.15 22.97 15.63 22.99C14.15 23.03 13.67 22.11 11.97 22.11C10.27 22.11 9.74 22.97 8.34 23.03C6.87 23.07 5.77 21.56 4.83 20.22C2.93 17.46 1.47 12.44 3.43 9.05C4.4 7.35 6.13 6.29 8.01 6.26C9.44 6.23 10.8 7.22 11.67 7.22C12.54 7.22 14.09 6.07 15.93 6.21ZM14.79 4.39C14.01 5.33 12.74 6.06 11.51 5.96C11.34 4.69 11.96 3.36 12.68 2.53C13.49 1.59 14.83 0.9 15.95 0.85C16.09 2.15 15.57 3.45 14.79 4.39Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiAppleLine;
