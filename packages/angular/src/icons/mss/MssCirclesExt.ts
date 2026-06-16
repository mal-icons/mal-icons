import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-circles-ext",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssCirclesExt {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M230-120q-63 0-106.5-43.5T80-270q0-63 43.5-106.5T230-420q63 0 106.5 43.5T380-270q0 63-43.5 106.5T230-120Zm501 0q-63 0-106.5-43.5T581-270q0-63 43.5-106.5T731-420q63 0 106.5 43.5T881-270q0 63-43.5 106.5T731-120Zm-501-60q38 0 64-26t26-64q0-38-26-64t-64-26q-38 0-64 26t-26 64q0 38 26 64t64 26Zm501 0q38 0 64-26t26-64q0-38-26-64t-64-26q-38 0-64 26t-26 64q0 38 26 64t64 26ZM481-366q-29.47 0-49.74-20.26T411-436q0-29.47 20.26-49.74T481-506q29.47 0 49.74 20.26T551-436q0 29.47-20.26 49.74T481-366Zm0-214q-63 0-106.5-43.5T331-730q0-63 43.5-106.5T481-880q63 0 106.5 43.5T631-730q0 63-43.5 106.5T481-580Zm0-60q38 0 64-26t26-64q0-38-26-64t-64-26q-38 0-64 26t-26 64q0 38 26 64t64 26Zm0-90ZM230-270Zm501 0Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssCirclesExt;
