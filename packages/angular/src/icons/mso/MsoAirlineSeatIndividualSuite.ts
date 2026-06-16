import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-airline-seat-individual-suite",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoAirlineSeatIndividualSuite {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M40-280v-370h60v310h353v-310h322q59.81 0 102.41 42.59Q920-564.81 920-505v225H40Zm473-60h347v-165q0-35.06-24.97-60.03T775-590H513v250Zm0-250v250-250ZM270-399q45 0 75.5-30.5T376-505q0-45-30.5-75.5T270-611q-45 0-75.5 30.5T164-505q0 45 30.5 75.5T270-399Zm0-60q-19 0-32.5-13.5T224-505q0-19 13.5-32.5T270-551q19 0 32.5 13.5T316-505q0 19-13.5 32.5T270-459Zm0-46Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoAirlineSeatIndividualSuite;
