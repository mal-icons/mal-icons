import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-candlestick-chart",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrCandlestickChart {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M309.83-160Q297-160 288.5-168.62T280-190v-60h-50q-12.75 0-21.37-8.62T200-280v-400q0-12.75 8.63-21.37T230-710h50v-60q0-12.75 8.68-21.37 8.68-8.62 21.5-8.62 12.83 0 21.33 8.63T340-770v60h50q12.75 0 21.38 8.63T420-680v400q0 12.75-8.62 21.38T390-250h-50v60q0 12.75-8.68 21.38-8.68 8.63-21.5 8.63ZM260-310h100v-340H260v340Zm389.83 150Q637-160 628.5-168.62T620-190v-180h-50q-12.75 0-21.37-8.62T540-400v-200q0-12.75 8.63-21.37T570-630h50v-140q0-12.75 8.68-21.37 8.68-8.62 21.5-8.62 12.83 0 21.33 8.63T680-770v140h50q12.75 0 21.38 8.63T760-600v200q0 12.75-8.62 21.38T730-370h-50v180q0 12.75-8.68 21.38-8.68 8.63-21.5 8.63ZM600-430h100v-140H600v140Zm-290-50Zm340-20Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrCandlestickChart;
