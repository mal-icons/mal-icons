import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-wifi-2-bar",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrWifi2Bar {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M201-388q-13-13-13.5-31.5T201-450q63-55 132-82.5T480-560q78 0 147 27.5T759-450q14 12 14 30t-14 32q-13 13-31 13t-32-12q-54-45-107.5-64T480-470q-55 0-108.5 19T264-387q-14 12-32 12t-31-13Zm279 261q-36 0-63-27t-27-63q0-36 27-63t63-27q36 0 63 27t27 63q0 36-27 63t-63 27Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrWifi2Bar;
