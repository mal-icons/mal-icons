import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-googlechronicle",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiGooglechronicle {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"m2.72 4.81 4.81 3v4l-4.81 3Zm0 10 4.81-3v9.38l-3.91-2.39a1.88 1.88 0 0 1-0.9-1.6ZM2.72 0h18.56v4.81H2.72Zm4.81 21.19 13.75-8.59v4.62c0 0.63-0.32 1.21-0.85 1.54L12 24Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiGooglechronicle;
