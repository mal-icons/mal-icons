import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-color-filter-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiColorFilterLine {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 3C14.21 3 16 4.79 16 7C16 7.54 15.89 8.06 15.7 8.53C14.05 8.71 12.5 9.56 11.48 10.97C10.22 10.8 9.14 10.05 8.53 9C8.19 8.41 8 7.73 8 7C8 4.79 9.79 3 12 3ZM17.76 8.67C17.92 8.14 18 7.58 18 7C18 3.69 15.31 1 12 1C8.69 1 6 3.69 6 7C6 7.58 6.08 8.14 6.24 8.67C5.7 8.8 5.17 9.01 4.67 9.3C1.8 10.96 0.82 14.63 2.47 17.5C4.13 20.37 7.8 21.35 10.67 19.7C11.17 19.41 11.62 19.05 12 18.66C12.38 19.05 12.83 19.41 13.33 19.7C16.2 21.35 19.87 20.37 21.53 17.5C23.18 14.63 22.2 10.96 19.33 9.3C18.83 9.01 18.3 8.8 17.76 8.67ZM13.15 16.93C13.82 15.43 13.86 13.66 13.15 12.07C13.93 11.06 15.11 10.5 16.33 10.5C17.01 10.5 17.7 10.67 18.33 11.04C20.24 12.14 20.9 14.59 19.79 16.5C18.69 18.41 16.24 19.07 14.33 17.96C13.86 17.69 13.46 17.34 13.15 16.93ZM11.36 12.97C11.85 14.14 11.74 15.45 11.13 16.5C10.79 17.09 10.3 17.6 9.67 17.96C7.76 19.07 5.31 18.41 4.21 16.5C3.1 14.59 3.76 12.14 5.67 11.04C6.14 10.76 6.64 10.6 7.15 10.53C8.12 11.87 9.63 12.78 11.36 12.97Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiColorFilterLine;
