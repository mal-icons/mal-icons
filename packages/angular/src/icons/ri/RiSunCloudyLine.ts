import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-sun-cloudy-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiSunCloudyLine {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M9.98 5.06C11.13 3.22 13.17 2 15.5 2C19.09 2 22 4.91 22 8.5C22 9.58 21.74 10.6 21.27 11.5C22.34 12.5 23 13.92 23 15.5C23 18.54 20.54 21 17.5 21H9C4.58 21 1 17.42 1 13C1 8.58 4.58 5 9 5C9.33 5 9.66 5.02 9.98 5.06ZM12.06 5.6C14.07 6.44 15.67 8.07 16.46 10.1C16.8 10.03 17.14 10 17.5 10C18.24 10 18.94 10.14 19.58 10.41C19.85 9.83 20 9.18 20 8.5C20 6.01 17.99 4 15.5 4C14.12 4 12.88 4.62 12.06 5.6ZM17.5 19C19.43 19 21 17.43 21 15.5C21 13.57 19.43 12 17.5 12C16.52 12 15.64 12.4 15 13.05C15 13.03 15 13.02 15 13C15 9.69 12.31 7 9 7C5.69 7 3 9.69 3 13C3 16.31 5.69 19 9 19H17.5Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiSunCloudyLine;
