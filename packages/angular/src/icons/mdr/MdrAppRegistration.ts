import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-app-registration",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrAppRegistration {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["circle",{"cx":"12","cy":"6","r":"2"}],["circle",{"cx":"6","cy":"18","r":"2"}],["circle",{"cx":"6","cy":"12","r":"2"}],["circle",{"cx":"6","cy":"6","r":"2"}],["circle",{"cx":"18","cy":"6","r":"2"}],["path",{"d":"M11 18.07v1.43c0 0.280.220.50.50.5h1.4c0.13 0 0.26-0.050.35-0.15l5.83-5.83-2.12-2.12-5.81 5.81c-0.10.1-0.150.23-0.150.36zM12.03 14 14 12.03V12c0-1.1-0.9-2-2-2s-2 0.9-2 2 0.9 2 2 2h0.03zm8.82-2.44-1.41-1.41c-0.2-0.2-0.51-0.2-0.71 0l-1.06 1.06 2.12 2.12 1.06-1.06c0.2-0.20.2-0.51 0-0.71z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrAppRegistration;
