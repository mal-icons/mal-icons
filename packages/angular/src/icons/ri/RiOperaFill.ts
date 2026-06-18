import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-opera-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiOperaFill {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M8.71 6.37C7.6 7.67 6.89 9.6 6.84 11.77V12.24C6.89 14.4 7.6 16.33 8.71 17.63C10.14 19.5 12.28 20.68 14.66 20.68C16.12 20.68 17.49 20.23 18.67 19.45C16.9 21.04 14.56 22 12 22C11.84 22 11.68 22 11.53 21.99C6.22 21.74 2 17.36 2 12C2 6.48 6.48 2 12 2H12.04C14.58 2.01 16.91 2.97 18.67 4.55C17.49 3.77 16.12 3.32 14.66 3.32C12.28 3.32 10.14 4.5 8.71 6.37H8.71ZM22 12C22 14.96 20.71 17.62 18.67 19.45C16.1 20.7 13.71 19.83 12.92 19.28C15.44 18.73 17.34 15.68 17.34 12C17.34 8.32 15.44 5.27 12.92 4.72C13.71 4.17 16.1 3.3 18.67 4.55C20.71 6.38 22 9.04 22 12Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiOperaFill;
