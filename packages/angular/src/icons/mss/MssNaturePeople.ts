import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-nature-people",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssNaturePeople {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M163-484q-17 0-30-13t-13-30q0-17 13-30t30-13q17 0 30 13t13 30q0 17-13 30t-30 13ZM120.32-80v-186H80v-192h166v192h-39v126h368v-243h-81q-65 0-111-43.97Q337-470.93 337-534q0-46 27.5-88t77.5-59q7-70 55-114.5T608.5-840q63.5 0 111 44.5T775-681q50 17 77.5 59t27.5 88q0 63.07-46.5 107.03Q787-383 722-383h-87v243h211v60H120.32ZM494-443h228q38 0 68-26t30-65q0-31.18-20-56.59Q780-616 751-628l-36-15v-31q0-45-32-75.5T608.26-780q-42.74 0-74.5 30.5Q502-719 502-674v31l-36 15q-29 12-49 37.41-20 25.41-20 56.59 0 39 29.5 65t67.5 26Zm115-169Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssNaturePeople;
