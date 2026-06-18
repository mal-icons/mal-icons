import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-meteor-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiMeteorLine {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M21 1V13C21 17.97 16.97 22 12 22C7.03 22 3 17.97 3 13C3 9.72 4.75 6.85 7.37 5.28L14 1.45V4.22L21 1ZM19 4.12L12 7.35V4.92L8.6 6.88C6.47 8.07 5.1 10.27 5.01 12.73L5 13C5 16.87 8.13 20 12 20C15.79 20 18.87 17 19 13.24L19 13V4.12ZM12 8C14.76 8 17 10.24 17 13C17 15.76 14.76 18 12 18C9.24 18 7 15.76 7 13C7 10.24 9.24 8 12 8ZM12 10C10.34 10 9 11.34 9 13C9 14.66 10.34 16 12 16C13.66 16 15 14.66 15 13C15 11.34 13.66 10 12 10Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiMeteorLine;
