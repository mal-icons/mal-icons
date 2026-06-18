import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-video-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiVideoLine {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M3 3.99C3 3.44 3.44 3 3.99 3H20.01C20.56 3 21 3.44 21 3.99V20.01C21 20.56 20.56 21 20.01 21H3.99C3.44 21 3 20.56 3 20.01V3.99ZM5 5V19H19V5H5ZM10.62 8.41L15.5 11.67C15.68 11.79 15.73 12.04 15.61 12.22C15.58 12.27 15.54 12.3 15.5 12.33L10.62 15.59C10.44 15.71 10.19 15.66 10.07 15.47C10.02 15.41 10 15.33 10 15.25V8.75C10 8.53 10.18 8.35 10.4 8.35C10.48 8.35 10.56 8.37 10.62 8.41Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiVideoLine;
