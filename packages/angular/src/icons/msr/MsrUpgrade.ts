import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-upgrade",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrUpgrade {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M480-330q-13 0-21.5-8.5T450-360v-326L350-586q-9 9-21 9t-21-9q-9-9-9-21t9-21l151-151q5-5 10-6.5t11-1.5q6 0 11 1.5t10 6.5l151 151q9 9 9 21t-9 21q-9 9-21 9t-21-9L510-686v326q0 13-8.5 21.5T480-330ZM310-160q-13 0-21.5-8.5T280-190q0-13 8.5-21.5T310-220h340q13 0 21.5 8.5T680-190q0 13-8.5 21.5T650-160H310Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrUpgrade;
