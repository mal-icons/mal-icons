import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-archive-24",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcArchive24 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M2.75 2h18.5c0.97 0 1.750.78 1.75 1.75v3.5A1.75 1.75 0 0 1 21.25 9H2.75A1.75 1.75 0 0 1 1 7.25v-3.5C1 2.78 1.78 2 2.75 2Zm18.5 1.5H2.75a0.250.25 0 0 0-0.250.25v3.5c0 0.140.110.250.250.25h18.5a0.250.25 0 0 0 0.25-0.25v-3.5a0.250.25 0 0 0-0.25-0.25ZM2.75 10a0.750.75 0 0 1 0.750.75v9.5c0 0.140.110.250.250.25h16.5a0.250.25 0 0 0 0.25-0.25v-9.5a0.750.75 0 0 1 1.5 0v9.5A1.75 1.75 0 0 1 20.25 22H3.75A1.75 1.75 0 0 1 2 20.25v-9.5a0.750.75 0 0 1 0.75-0.75Z"}],["path",{"d":"M9.75 11.5a0.750.75 0 0 0 0 1.5h4.5a0.750.75 0 0 0 0-1.5h-4.5Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcArchive24;
