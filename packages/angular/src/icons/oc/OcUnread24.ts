import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-unread-24",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcUnread24 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M1.75 4.5a0.250.25 0 0 0-0.250.25v0.85l10.36 7a0.250.25 0 0 0 0.28 0l5.69-3.84A0.750.75 0 0 1 18.67 10l-5.69 3.85c-0.590.4-1.370.4-1.96 0L1.5 7.41V19.25c0 0.140.110.250.250.25h20.5a0.250.25 0 0 0 0.25-0.25v-8.5a0.750.75 0 0 1 1.5 0v8.5A1.75 1.75 0 0 1 22.25 21H1.75A1.75 1.75 0 0 1 0 19.25V4.75C0 3.780.78 3 1.75 3h15.5a0.750.75 0 0 1 0 1.5H1.75Z"}],["path",{"d":"M24 5.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcUnread24;
