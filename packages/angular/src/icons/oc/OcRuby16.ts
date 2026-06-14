import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-ruby-16",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcRuby16 {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M3.64 2.29A0.750.75 0 0 1 4.23 2h7.54c0.23 0 0.450.110.590.29l3.48 4.5a0.750.75 0 0 1-0.071l-7.25 7a0.750.75 0 0 1-1.04 0l-7.25-7a0.750.75 0 0 1-0.07-1ZM4.6 3.5 1.75 7.18 8 13.21l6.25-6.03L11.4 3.5Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcRuby16;
