import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-ghost-2-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiGhost2Line {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 2C15.5 2 18 5 19 8C22 9 23 11.73 23 14L20.23 14.79C19.8 14.92 19.5 15.31 19.5 15.75V17.25C19.5 18.22 18.72 19 17.75 19H17.15C16.48 19 15.86 19.34 15.49 19.9C14.56 21.3 13.4 22 12 22C10.6 22 9.44 21.3 8.51 19.9C8.14 19.34 7.52 19 6.85 19H6.25C5.28 19 4.5 18.22 4.5 17.25V15.75C4.5 15.31 4.2 14.92 3.77 14.79L1 14C1 11.73 2 9 5 8C6 5 8.5 2 12 2ZM12 4C9.89 4 7.94 5.79 6.99 8.37L6.9 8.63L6.58 9.58L5.63 9.9C4.38 10.32 3.56 11.24 3.21 12.46L3.19 12.54L4.32 12.87C5.55 13.22 6.42 14.31 6.49 15.57L6.5 15.75V17H6.85C8.11 17 9.29 17.6 10.05 18.6L10.18 18.79C10.76 19.66 11.32 20 12 20C12.64 20 13.17 19.71 13.7 18.96L13.82 18.79C14.52 17.74 15.67 17.08 16.92 17.01L17.15 17H17.5V15.75C17.5 14.48 18.31 13.35 19.5 12.92L19.68 12.87L20.82 12.54L20.79 12.46C20.46 11.3 19.71 10.42 18.57 9.97L18.37 9.9L17.42 9.58L17.1 8.63C16.19 5.91 14.18 4 12 4ZM12 12C12.83 12 13.5 13.12 13.5 14.5C13.5 15.88 12.83 17 12 17C11.17 17 10.5 15.88 10.5 14.5C10.5 13.12 11.17 12 12 12ZM9.5 8C10.33 8 11 8.67 11 9.5C11 10.33 10.33 11 9.5 11C8.67 11 8 10.33 8 9.5C8 8.67 8.67 8 9.5 8ZM14.5 8C15.33 8 16 8.67 16 9.5C16 10.33 15.33 11 14.5 11C13.67 11 13 10.33 13 9.5C13 8.67 13.67 8 14.5 8Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiGhost2Line;
