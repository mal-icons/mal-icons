import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-location-24",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcLocation24 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 13.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"}],["path",{"d":"M19.07 3.43h0c3.91 3.91 3.91 10.24 0 14.14l-5.4 5.4a2.36 2.36 0 0 1-3.34 0l-5.37-5.37-0.03-0.03c-3.9-3.9-3.9-10.24 0-14.14 3.9-3.9 10.24-3.9 14.14 0ZM5.99 4.49v0a8.5 8.5 0 0 0 0 12.02l0.020.0200 5.38 5.38a0.860.86 0 0 0 1.21 0l5.4-5.4a8.5 8.5 0 0 0-0.04-11.98A8.5 8.5 0 0 0 5.99 4.49Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcLocation24;
