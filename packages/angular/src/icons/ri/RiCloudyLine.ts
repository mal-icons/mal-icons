import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-cloudy-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiCloudyLine {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M9.5 6C5.91 6 3 8.91 3 12.5C3 16.09 5.91 19 9.5 19H16.5C18.99 19 21 16.99 21 14.5C21 12.01 18.99 10 16.5 10C16.17 10 15.85 10.04 15.54 10.1C14.59 7.7 12.24 6 9.5 6ZM16.5 21H9.5C4.81 21 1 17.19 1 12.5C1 7.81 4.81 4 9.5 4C12.54 4 15.21 5.6 16.71 8C20.21 8.12 23 10.98 23 14.5C23 18.09 20.09 21 16.5 21Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiCloudyLine;
