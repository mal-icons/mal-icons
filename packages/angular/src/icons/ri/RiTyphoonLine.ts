import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-typhoon-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiTyphoonLine {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M17.65 1.7L14.87 4.23C16.15 4.62 17.35 5.28 18.36 6.21C21.87 9.41 21.87 14.59 18.36 17.79C15.77 20.15 11.76 21.66 6.35 22.3L9.13 19.77C7.85 19.38 6.65 18.72 5.64 17.79C2.13 14.59 2.1 9.43 5.64 6.21C8.23 3.85 12.24 2.34 17.65 1.7ZM12 6C8.13 6 5 8.69 5 12C5 15.31 8.13 18 12 18C15.87 18 19 15.31 19 12C19 8.69 15.87 6 12 6ZM12 8.3C14.21 8.3 16 9.96 16 12C16 14.04 14.21 15.7 12 15.7C9.79 15.7 8 14.04 8 12C8 9.96 9.79 8.3 12 8.3ZM12 10.3C10.86 10.3 10 11.1 10 12C10 12.9 10.86 13.7 12 13.7C13.14 13.7 14 12.9 14 12C14 11.1 13.14 10.3 12 10.3Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiTyphoonLine;
