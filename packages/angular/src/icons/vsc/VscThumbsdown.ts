import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-vsc-thumbsdown",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class VscThumbsdown {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M13 1H4.84C3.27 1 2.72 2.2 2.44 3.11L1.09 7.4C1.03 7.6 1 7.8 1 8C1 9.1 1.9 10 3 10H5.33L4.79 11.78C4.72 12.02 4.69 12.26 4.69 12.5C4.69 13.88 5.81 15 7.19 15C7.57 15 7.92 14.79 8.09 14.45L10.17 10.28C10.26 10.11 10.43 10 10.62 10H13C14.1 10 15 9.1 15 8V3C15 1.9 14.1 1 13 1ZM9.28 9.83L7.19 14L7.19 14C6.36 14 5.69 13.33 5.69 12.5C5.69 12.36 5.71 12.21 5.75 12.07L6.48 9.64C6.52 9.49 6.5 9.33 6.4 9.2C6.31 9.07 6.16 9 6 9H3C2.45 9 2 8.55 2 8C2 7.9 2.02 7.8 2.05 7.7L3.39 3.4C3.75 2.24 4.23 2 4.84 2H11V9H10.62C10.05 9 9.53 9.32 9.28 9.83V9.83ZM14 8C14 8.55 13.55 9 13 9H12V2H13C13.55 2 14 2.45 14 3V8Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default VscThumbsdown;
