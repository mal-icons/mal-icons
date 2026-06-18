import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-xsplit",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiXsplit {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M24 19.5c-0.7-0.1-2.5-0.3-2.7-0.3-0.1 0-2.8 2.3-4 3.4l-0.10.1c0.1-1.30.3-2.60.4-3.9C11.7 18.1 5.9 17.4 0 16.7V1.5v-0.2H0.3C0.9 1.4 22.9 3.9 24 4v15.5zm-2.6-2.6V6.2C15.1 5.5 8.7 4.7 2.4 4v10.6c6.30.8 12.7 1.5 19 2.3z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiXsplit;
