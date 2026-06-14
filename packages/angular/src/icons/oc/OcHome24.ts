import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-home-24",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcHome24 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M11.03 2.59a1.5 1.5 0 0 1 1.94 0l7.5 6.36a1.5 1.5 0 0 1 0.53 1.14V19.5a1.5 1.5 0 0 1-1.5 1.5h-5.75a0.750.75 0 0 1-0.75-0.75V14h-2v6.25a0.750.75 0 0 1-0.750.75H4.5A1.5 1.5 0 0 1 3 19.5v-9.4c0-0.440.19-0.860.53-1.14ZM12 3.73l-7.5 6.36V19.5h5v-6.25a0.750.75 0 0 1 0.75-0.75h3.5a0.750.75 0 0 1 0.750.75v6.25h5v-9.4Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcHome24;
