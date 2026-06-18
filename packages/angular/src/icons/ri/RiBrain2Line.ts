import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-brain-2-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiBrain2Line {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M7 6C7 6.24 7.04 6.46 7.11 6.67C7.23 6.99 7.17 7.34 6.97 7.6C6.77 7.87 6.45 8.02 6.12 8C6.08 8 6.04 8 6 8C4.9 8 4 8.9 4 10C4 10.51 4.19 10.98 4.51 11.33C4.85 11.71 4.85 12.29 4.51 12.67C4.19 13.02 4 13.49 4 14C4 14.88 4.57 15.64 5.37 15.9C5.85 16.06 6.14 16.54 6.04 17.03C6.01 17.18 6 17.34 6 17.5C6 18.88 7.12 20 8.5 20C9.76 20 10.8 19.07 10.97 17.86C10.98 17.82 10.99 17.78 11 17.74V6C11 4.9 10.1 4 9 4C7.9 4 7 4.9 7 6ZM13 17.74C13.01 17.78 13.02 17.82 13.03 17.86C13.2 19.07 14.24 20 15.5 20C16.88 20 18 18.88 18 17.5C18 17.34 17.99 17.18 17.96 17.03C17.86 16.54 18.15 16.06 18.63 15.9C19.43 15.64 20 14.88 20 14C20 13.49 19.81 13.02 19.49 12.67C19.15 12.29 19.15 11.71 19.49 11.33C19.81 10.98 20 10.51 20 10C20 8.9 19.1 8 18 8C17.96 8 17.92 8 17.88 8C17.55 8.02 17.23 7.87 17.03 7.6C16.83 7.34 16.77 6.99 16.89 6.67C16.96 6.46 17 6.24 17 6C17 4.9 16.1 4 15 4C13.9 4 13 4.9 13 6V17.74ZM9 2C10.19 2 11.27 2.52 12 3.35C12.73 2.52 13.81 2 15 2C17.21 2 19 3.79 19 6C19 6.04 19 6.08 19 6.13C20.72 6.57 22 8.14 22 10C22 10.73 21.8 11.41 21.46 12C21.8 12.59 22 13.27 22 14C22 15.48 21.19 16.77 20 17.46L20 17.5C20 19.99 17.99 22 15.5 22C14.09 22 12.82 21.35 12 20.33C11.18 21.35 9.91 22 8.5 22C6.01 22 4 19.99 4 17.5L4 17.46C2.81 16.77 2 15.48 2 14C2 13.27 2.2 12.59 2.54 12C2.2 11.41 2 10.73 2 10C2 8.14 3.28 6.57 5 6.13C5 6.08 5 6.04 5 6C5 3.79 6.79 2 9 2Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiBrain2Line;
