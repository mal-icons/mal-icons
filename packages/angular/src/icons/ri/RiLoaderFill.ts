import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-loader-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiLoaderFill {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 2C12.55 2 13 2.45 13 3V6C13 6.55 12.55 7 12 7C11.45 7 11 6.55 11 6V3C11 2.45 11.45 2 12 2ZM12 17C12.55 17 13 17.45 13 18V21C13 21.55 12.55 22 12 22C11.45 22 11 21.55 11 21V18C11 17.45 11.45 17 12 17ZM20.66 7C20.94 7.48 20.77 8.09 20.29 8.37L17.7 9.87C17.22 10.14 16.61 9.98 16.33 9.5C16.05 9.02 16.22 8.41 16.7 8.13L19.29 6.63C19.77 6.36 20.38 6.52 20.66 7ZM7.67 14.5C7.95 14.98 7.78 15.59 7.3 15.87L4.71 17.37C4.23 17.64 3.62 17.48 3.34 17C3.06 16.52 3.23 15.91 3.71 15.63L6.3 14.13C6.78 13.86 7.39 14.02 7.67 14.5ZM20.66 17C20.38 17.48 19.77 17.64 19.29 17.37L16.7 15.87C16.22 15.59 16.05 14.98 16.33 14.5C16.61 14.02 17.22 13.86 17.7 14.13L20.29 15.63C20.77 15.91 20.94 16.52 20.66 17ZM7.67 9.5C7.39 9.98 6.78 10.14 6.3 9.87L3.71 8.37C3.23 8.09 3.06 7.48 3.34 7C3.62 6.52 4.23 6.36 4.71 6.63L7.3 8.13C7.78 8.41 7.95 9.02 7.67 9.5Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiLoaderFill;
