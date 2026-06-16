import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-roundabout-left",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoRoundaboutLeft {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M610-120v-242q0-23 13.5-40t36.5-20q69-8 114.5-58.5T820-600q0-75-52.5-127.5T640-780q-69 0-120 46t-59 115q-3 20-21.5 34.5T401-570H194l90 90-42 42L80-600l162-162 42 42-90 90h208q11-91 79.5-150.5T640-840q100 0 170 70t70 170q0 90-59.5 158.5T670-362v242h-60Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoRoundaboutLeft;
