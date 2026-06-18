import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-moon-cloudy-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiMoonCloudyLine {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M8.67 5.01C9.79 2.64 12.21 1 15 1C15.42 1 15.82 1.04 16.22 1.11C16.08 1.54 16 2.01 16 2.5C16 4.99 18.01 7 20.5 7C20.99 7 21.46 6.92 21.89 6.78C21.96 7.18 22 7.58 22 8C22 9.22 21.69 10.37 21.14 11.37C22.28 12.38 23 13.86 23 15.5C23 18.54 20.54 21 17.5 21H9C4.58 21 1 17.42 1 13C1 8.69 4.41 5.18 8.67 5.01ZM10.85 5.21C13.42 5.82 15.51 7.67 16.46 10.1C16.8 10.03 17.14 10 17.5 10C18.17 10 18.82 10.12 19.42 10.34C19.64 9.92 19.81 9.46 19.91 8.97C16.79 8.69 14.31 6.21 14.03 3.09C12.71 3.36 11.57 4.14 10.85 5.21ZM17.5 19C19.43 19 21 17.43 21 15.5C21 13.57 19.43 12 17.5 12C16.52 12 15.64 12.4 15 13.05C15 13.03 15 13.02 15 13C15 9.69 12.31 7 9 7C5.69 7 3 9.69 3 13C3 16.31 5.69 19 9 19H17.5Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiMoonCloudyLine;
