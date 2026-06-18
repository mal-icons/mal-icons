import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-channel4",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiChannel4 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"m14.31 0-0.330.41v4.2l2.38-2.95zm-1.15 1.2L10.71 4.22v8.67h2.45zm3.27 1.7-2.44 3.02v14.81h2.44zM9.89 5.24l-6.2 7.66h3.14L9.89 9.12Zm-6.77 8.48v2.44h10.03v-2.44Zm14.13 0v2.44h3.63v-2.44Zm-6.54 3.27V24h2.44v-7.02Zm-3.27 4.57V24h2.44v-2.44zm6.54 0V24h5.19v-2.44z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiChannel4;
