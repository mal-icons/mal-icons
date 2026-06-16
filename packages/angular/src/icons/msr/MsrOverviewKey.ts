import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-overview-key",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrOverviewKey {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M100-200q-24 0-42-18t-18-42v-440q0-24 18-42t42-18h440q24 0 42 18t18 42v440q0 24-18 42t-42 18H100Zm0-60h440v-440H100v440Zm629.83 60Q717-200 708.5-208.62T700-230v-500q0-12.75 8.68-21.37 8.68-8.62 21.5-8.62 12.83 0 21.33 8.63T760-730v500q0 12.75-8.68 21.38-8.68 8.63-21.5 8.63Zm160 0Q877-200 868.5-208.62T860-230v-500q0-12.75 8.68-21.37 8.68-8.62 21.5-8.62 12.83 0 21.33 8.63T920-730v500q0 12.75-8.68 21.38-8.68 8.63-21.5 8.63ZM100-260v-440 440Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrOverviewKey;
