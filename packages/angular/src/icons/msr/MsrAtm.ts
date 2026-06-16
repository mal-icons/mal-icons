import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-atm",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrAtm {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M433-360q-10.4 0-17.2-6.8-6.8-6.8-6.8-17.2v-168h-56q-10.4 0-17.2-6.8-6.8-6.8-6.8-17.2 0-10.4 6.8-17.2 6.8-6.8 17.2-6.8h160q10.4 0 17.2 6.8 6.8 6.8 6.8 17.2 0 10.4-6.8 17.2-6.8 6.8-17.2 6.8h-56v168q0 10.4-6.8 17.2-6.8 6.8-17.2 6.8Zm-329 0q-10.4 0-17.2-6.8Q80-373.6 80-384v-182q0-15 9.5-24.5T114-600h139q15 0 24.5 9.5T287-566v182q0 10.4-6.8 17.2-6.8 6.8-17.2 6.8-10.4 0-17.2-6.8-6.8-6.8-6.8-17.2v-53H128v53q0 10.4-6.8 17.2-6.8 6.8-17.2 6.8Zm24-125h111v-67H128v67Zm482 125q-10.4 0-17.2-6.8-6.8-6.8-6.8-17.2v-182q0-15 9.5-24.5T620-600h226q15 0 24.5 9.5T880-566v182q0 10.4-6.8 17.2-6.8 6.8-17.2 6.8-10.4 0-17.2-6.8-6.8-6.8-6.8-17.2v-168h-75v126q0 10.4-6.8 17.2-6.8 6.8-17.2 6.8-10.4 0-17.2-6.8-6.8-6.8-6.8-17.2v-126h-75v168q0 10.4-6.8 17.2-6.8 6.8-17.2 6.8Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrAtm;
