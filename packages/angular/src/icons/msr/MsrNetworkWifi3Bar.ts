import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-network-wifi-3-bar",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrNetworkWifi3Bar {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M197-486q62-49 132-76t151-27q81 0 151.5 27T764-486l108-108q-87-68-184.5-107T480-740q-110 0-207.5 39T88-594l109 108Zm283 354q-6 0-11-2t-10-7L21-579q-9-9-8.5-21t9.5-20q95-84 211.5-132T480-800q130 0 246.5 48T938-620q9 8 9.5 20t-8.5 21L501-141q-5 5-10 7t-11 2Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrNetworkWifi3Bar;
