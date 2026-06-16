import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-castle",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrCastle {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M100-120q-24.75 0-42.37-17.62T40-180v-380q0-12.75 8.68-21.37Q57.35-590 70.18-590 83-590 91.5-581.37T100-560v50h110v-300q0-12.75 8.68-21.37 8.68-8.62 21.5-8.62 12.83 0 21.33 8.63T270-810v50h100v-50q0-12.75 8.68-21.37 8.68-8.62 21.5-8.62 12.83 0 21.33 8.63T430-810v50h100v-50q0-12.75 8.68-21.37 8.68-8.62 21.5-8.62 12.83 0 21.33 8.63T590-810v50h100v-50q0-12.75 8.68-21.37 8.68-8.62 21.5-8.62 12.83 0 21.33 8.63T750-810v300h110v-50q0-12.75 8.68-21.37 8.68-8.62 21.5-8.62 12.83 0 21.33 8.63T920-560v380q0 24.75-17.62 42.38T860-120H570v-120q0-38-26-64t-63.5-26q-37.5 0-64 26T390-240v120H100Zm0-60h230v-60q0-63 44.06-106.5Q418.13-390 480-390q63 0 106.5 43.5T630-240v60h230v-270H690v-250H270v250H100v270Zm270-310h60v-110h-60v110Zm160 0h60v-110h-60v110Zm-50 50Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrCastle;
