import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-compasses-2-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiCompasses2Line {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M16.33 13.5C17.96 12.22 19 10.23 19 8H21C21 10.97 19.56 13.6 17.34 15.24L19.87 19.62C20.42 20.58 20.09 21.8 19.13 22.35L15.61 16.24C14.5 16.73 13.28 17 12 17C10.72 17 9.5 16.73 8.39 16.24L4.87 22.35C3.91 21.8 3.58 20.58 4.13 19.62L9.2 10.85C8.46 10.13 8 9.11 8 8C8 6.13 9.27 4.57 11 4.12V2H13V4.12C14.73 4.57 16 6.13 16 8C16 9.11 15.54 10.13 14.8 10.85L16.33 13.5ZM14.6 14.5L13.07 11.85C12.73 11.95 12.37 12 12 12C11.63 12 11.27 11.95 10.93 11.85L9.4 14.5C10.2 14.82 11.08 15 12 15C12.92 15 13.8 14.82 14.6 14.5ZM12 10C13.1 10 14 9.1 14 8C14 6.89 13.1 6 12 6C10.9 6 10 6.89 10 8C10 9.1 10.9 10 12 10Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiCompasses2Line;
