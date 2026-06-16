import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-water-ph",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoWaterPh {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M380-81q-130-8-215-100T80-408q0-100 79.5-217.5T400-880q161 137 240.5 254.5T720-408v14q0 7-1 14h-60q1-7 1-14v-14q0-79-66.5-179.5T400-800Q273-688 206.5-587.5T140-408q0 108.76 68 183.88T380-141v60Zm20-389Zm40 390v-240h152q20 0 34 14t14 34v64q0 20-14 34t-34 14H488v80h-48Zm238 0v-240h48v89h108v-89h48v240h-48v-103H726v103h-48ZM488-208h104v-64H488v64Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoWaterPh;
